import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();

    const params = await context.params;
    const contentId = params.id;

    const body = await request.json();
    const { 
      title, 
      subtitle, 
      description, 
      backgroundImage, 
      ctaText, 
      ctaLink, 
      textColor, 
      overlayOpacity, 
      order, 
      isActive 
    } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    if (!backgroundImage) {
      return NextResponse.json(
        { error: 'Background image is required' },
        { status: 400 }
      );
    }

    const content = await prisma.content.update({
      where: { id: contentId },
      data: {
        title,
        subtitle: subtitle || null,
        description,
        backgroundImage,
        ctaText: ctaText || null,
        ctaLink: ctaLink || null,
        textColor: textColor || 'white',
        overlayOpacity: overlayOpacity || 0.5,
        order: order || 0,
        isActive: isActive !== undefined ? isActive : true,
      }
    });

    return NextResponse.json(content);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating content:', error);
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();

    const params = await context.params;
    const contentId = params.id;

    await prisma.content.delete({
      where: { id: contentId }
    });

    return NextResponse.json({ message: 'Content deleted successfully' });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error deleting content:', error);
    return NextResponse.json(
      { error: 'Failed to delete content' },
      { status: 500 }
    );
  }
}
