import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const survey = await prisma.survey.findFirst({
      where: { slug, isActive: true },
      include: { questions: { orderBy: { order: 'asc' } } },
    });
    if (!survey) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(survey);
  } catch (error) {
    console.error('Error fetching survey by slug:', error);
    return NextResponse.json({ error: 'Failed to fetch survey' }, { status: 500 });
  }
}
