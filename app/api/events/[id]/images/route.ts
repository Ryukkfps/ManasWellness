import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    const { imageUrl, caption, order } = body;

    if (!imageUrl) {
      return NextResponse.json({ error: 'imageUrl is required' }, { status: 400 });
    }

    const image = await prisma.galleryImage.create({
      data: {
        eventId: id,
        imageUrl,
        caption: caption || null,
        order: typeof order === 'number' ? order : 0,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error adding gallery image:', error);
    return NextResponse.json({ error: 'Failed to add gallery image' }, { status: 500 });
  }
}
