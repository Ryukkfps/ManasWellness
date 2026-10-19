import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (slug) {
      const page = await prisma.legalPage.findUnique({
        where: { slug }
      });
      if (!page) {
        return NextResponse.json(
          { error: 'Page not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(page);
    }

    const pages = await prisma.legalPage.findMany({
      orderBy: { title: 'asc' }
    });
    return NextResponse.json(pages);
  } catch (error) {
    console.error('Error fetching legal pages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch legal pages' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();

    const body = await request.json();
    const { title, slug, content } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Title, slug, and content are required' },
        { status: 400 }
      );
    }

    const page = await prisma.legalPage.create({
      data: { title, slug, content }
    });

    return NextResponse.json(page);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error creating legal page:', error);
    return NextResponse.json(
      { error: 'Failed to create legal page' },
      { status: 500 }
    );
  }
}
