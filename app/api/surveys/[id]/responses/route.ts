import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { surveyResponseSchema, getClientIp, isRateLimited } from '@/lib/validation';
import { isValidObjectId } from '@/lib/objectid';

// Admin: view responses for a survey.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    const responses = await prisma.surveyResponse.findMany({
      where: { surveyId: id },
      orderBy: { submittedAt: 'desc' },
      include: { answers: true },
    });
    return NextResponse.json(responses);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching survey responses:', error);
    return NextResponse.json({ error: 'Failed to fetch responses' }, { status: 500 });
  }
}

// Public: submit a response. `id` here may be the survey's id or its slug,
// since the public fill-out page only knows the slug.
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (isRateLimited(`survey-response:${getClientIp(request)}`)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    // `id` here may be the survey's real ObjectId or its slug — only add
    // the `{ id }` branch when it's actually a valid ObjectId (see
    // lib/objectid.ts for why).
    const survey = await prisma.survey.findFirst({
      where: { OR: [...(isValidObjectId(id) ? [{ id }] : []), { slug: id }], isActive: true },
      include: { questions: true },
    });

    if (!survey) {
      return NextResponse.json({ error: 'Survey not found' }, { status: 404 });
    }

    const body = await request.json();
    const parsed = surveyResponseSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { respondentName, respondentEmail, answers } = parsed.data;

    const questionIds = new Set(survey.questions.map((q) => q.id));
    const requiredIds = survey.questions.filter((q) => q.required).map((q) => q.id);
    const answeredIds = new Set(answers.map((a) => a.questionId));
    const missingRequired = requiredIds.some((qId) => !answeredIds.has(qId));
    const hasUnknownQuestion = answers.some((a) => !questionIds.has(a.questionId));

    if (missingRequired || hasUnknownQuestion) {
      return NextResponse.json({ error: 'Invalid or incomplete answers' }, { status: 400 });
    }

    const response = await prisma.surveyResponse.create({
      data: {
        surveyId: survey.id,
        respondentName: respondentName || null,
        respondentEmail: respondentEmail || null,
        answers: {
          create: answers.map((a) => ({
            questionId: a.questionId,
            value: Array.isArray(a.value) ? JSON.stringify(a.value) : a.value,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, id: response.id }, { status: 201 });
  } catch (error) {
    console.error('Error submitting survey response:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
