import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { reviewSchema, failsHoneypot, getClientIp, isRateLimited } from '@/lib/validation';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminView = searchParams.get('admin') === 'true';
    
    if (adminView) {
      await requireAdmin();
      const reviews = await prisma.review.findMany({
        orderBy: { createdAt: 'desc' }
      });
      return NextResponse.json(reviews);
    } else {
      const reviews = await prisma.review.findMany({
        where: { isApproved: true },
        orderBy: { createdAt: 'desc' }
      });
      return NextResponse.json(reviews);
    }
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (failsHoneypot(body.website)) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    if (isRateLimited(`review:${getClientIp(request)}`)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const parsed = reviewSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { author, content, rating } = parsed.data;

    const review = await prisma.review.create({
      data: {
        author,
        content,
        rating: rating ?? 5,
        isApproved: false
      }
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    );
  }
}
