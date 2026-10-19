import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; imageId: string }> }
) {
  try {
    await requireAdmin();
    const { imageId } = await params;
    const body = await request.json();
    const { caption, order } = body;

    const image = await prisma.galleryImage.update({
      where: { id: imageId },
      data: {
        ...(caption !== undefined ? { caption } : {}),
        ...(order !== undefined ? { order } : {}),
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating gallery image:', error);
    return NextResponse.json({ error: 'Failed to update gallery image' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; imageId: string }> }
) {
  try {
    await requireAdmin();
    const { imageId } = await params;
    await prisma.galleryImage.delete({ where: { id: imageId } });
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error deleting gallery image:', error);
    return NextResponse.json({ error: 'Failed to delete gallery image' }, { status: 500 });
  }
}
