import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const event = await prisma.event.findFirst({
      where: { slug, isActive: true },
      include: { images: { orderBy: { order: 'asc' } } },
    });
    if (!event) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(event);
  } catch (error) {
    console.error('Error fetching event by slug:', error);
    return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
  }
}
