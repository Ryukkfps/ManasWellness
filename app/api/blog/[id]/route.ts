import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { slugify } from '@/lib/slug';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, tags, authorName, status, publishedAt } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const resolvedStatus = status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT';
    const existing = await prisma.blogPost.findUnique({ where: { id } });

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        slug: slug ? slugify(slug) : slugify(title),
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        tags: Array.isArray(tags) ? tags : [],
        authorName: authorName || null,
        status: resolvedStatus,
        publishedAt:
          resolvedStatus === 'PUBLISHED'
            ? publishedAt
              ? new Date(publishedAt)
              : existing?.publishedAt || new Date()
            : null,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
