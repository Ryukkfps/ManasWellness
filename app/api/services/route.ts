import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';
import { slugify } from '@/lib/slug';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminView = searchParams.get('admin') === 'true';

    if (adminView) {
      await requireAdmin();
      const services = await prisma.service.findMany({
        orderBy: [
          { order: 'asc' },
          { createdAt: 'desc' }
        ]
      });
      return NextResponse.json(services);
    } else {
      const services = await prisma.service.findMany({
        where: { isActive: true },
        orderBy: { order: 'asc' }
      });
      return NextResponse.json(services);
    }
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();

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

    const service = await prisma.service.create({
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
        isActive: isActive !== undefined ? isActive : true
      }
    });

    return NextResponse.json(service);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error creating service:', error);
    return NextResponse.json(
      {
        error: 'Failed to create service',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
