import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = await prisma.blogPost.findFirst({
      where: { slug, status: 'PUBLISHED' },
    });
    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
