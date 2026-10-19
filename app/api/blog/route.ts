import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { slugify } from '@/lib/slug';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminView = searchParams.get('admin') === 'true';
    const tag = searchParams.get('tag');

    if (adminView) {
      await requireAdmin();
    }

    const posts = await prisma.blogPost.findMany({
      where: {
        ...(adminView ? {} : { status: 'PUBLISHED' }),
        ...(tag ? { tags: { has: tag } } : {}),
      },
      orderBy: adminView ? { createdAt: 'desc' } : { publishedAt: 'desc' },
    });

    return NextResponse.json(posts);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, tags, authorName, status, publishedAt } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const resolvedStatus = status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT';

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug: slug ? slugify(slug) : slugify(title),
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        tags: Array.isArray(tags) ? tags : [],
        authorName: authorName || null,
        status: resolvedStatus,
        publishedAt: resolvedStatus === 'PUBLISHED' ? (publishedAt ? new Date(publishedAt) : new Date()) : null,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create post', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
