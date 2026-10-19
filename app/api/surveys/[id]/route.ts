import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { slugify } from '@/lib/slug';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const survey = await prisma.survey.findUnique({
      where: { id },
      include: { questions: { orderBy: { order: 'asc' } } },
    });
    if (!survey) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(survey);
  } catch (error) {
    console.error('Error fetching survey:', error);
    return NextResponse.json({ error: 'Failed to fetch survey' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    const { title, slug, description, isActive, questions } = body;

    const survey = await prisma.survey.update({
      where: { id },
      data: {
        title,
        slug: slug ? slugify(slug) : slugify(title),
        description: description || null,
        isActive: isActive !== undefined ? isActive : true,
        questions: {
          deleteMany: {},
          create: (questions || []).map((q: any, index: number) => ({
            order: index,
            type: q.type,
            label: q.label,
            options: Array.isArray(q.options) ? q.options : [],
            required: !!q.required,
          })),
        },
      },
      include: { questions: { orderBy: { order: 'asc' } } },
    });

    return NextResponse.json(survey);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating survey:', error);
    return NextResponse.json({ error: 'Failed to update survey' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    await prisma.survey.delete({ where: { id } }); // cascades to questions
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error deleting survey:', error);
    return NextResponse.json({ error: 'Failed to delete survey' }, { status: 500 });
  }
}
