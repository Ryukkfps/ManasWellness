import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { slugify } from '@/lib/slug';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminView = searchParams.get('admin') === 'true';

    if (adminView) {
      await requireAdmin();
    }

    const surveys = await prisma.survey.findMany({
      where: adminView ? undefined : { isActive: true },
      orderBy: { createdAt: 'desc' },
      include: { questions: { orderBy: { order: 'asc' } } },
    });

    return NextResponse.json(surveys);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching surveys:', error);
    return NextResponse.json({ error: 'Failed to fetch surveys' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const body = await request.json();
    const { title, slug, description, isActive, questions } = body;

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const survey = await prisma.survey.create({
      data: {
        title,
        slug: slug ? slugify(slug) : slugify(title),
        description: description || null,
        isActive: isActive !== undefined ? isActive : true,
        questions: {
          create: (questions || []).map((q: any, index: number) => ({
            order: index,
            type: q.type,
            label: q.label,
            options: Array.isArray(q.options) ? q.options : [],
            required: !!q.required,
          })),
        },
      },
      include: { questions: true },
    });

    return NextResponse.json(survey);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error creating survey:', error);
    return NextResponse.json(
      { error: 'Failed to create survey', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
