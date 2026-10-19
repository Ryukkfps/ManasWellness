import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { slugify } from '@/lib/slug';

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();

    const params = await context.params;
    const serviceId = params.id;

    const body = await request.json();
    const {
      title,
      slug,
      shortDescription,
      description,
      durationMinutes,
      priceLabel,
      modes,
      image,
      icon,
      order,
      isActive
    } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const service = await prisma.service.update({
      where: { id: serviceId },
      data: {
        title,
        slug: slug ? slugify(slug) : slugify(title),
        shortDescription: shortDescription || null,
        description,
        durationMinutes: typeof durationMinutes === 'number' ? durationMinutes : (durationMinutes ? parseInt(durationMinutes) : null),
        priceLabel: priceLabel || null,
        modes: Array.isArray(modes) ? modes : [],
        image: image || null,
        icon: icon || null,
        order: typeof order === 'number' ? order : (order ? parseInt(order) : 0),
        isActive: isActive !== undefined ? isActive : true,
      }
    });

    return NextResponse.json(service);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Failed to update service', details: error instanceof Error ? error.message : String(error) },
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
    const serviceId = params.id;

    await prisma.service.delete({
      where: { id: serviceId }
    });

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
