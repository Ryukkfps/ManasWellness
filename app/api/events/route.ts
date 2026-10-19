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
    }

    const events = await prisma.event.findMany({
      where: adminView ? undefined : { isActive: true },
      orderBy: [{ startDate: 'desc' }],
      include: { images: { orderBy: { order: 'asc' } } },
    });

    return NextResponse.json(events);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const body = await request.json();
    const { title, slug, description, startDate, endDate, location, bannerImage, order, isActive } = body;

    if (!title || !description || !startDate) {
      return NextResponse.json({ error: 'Title, description, and start date are required' }, { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        title,
        slug: slug ? slugify(slug) : slugify(title),
        description,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        location: location || null,
        bannerImage: bannerImage || null,
        order: typeof order === 'number' ? order : 0,
        isActive: isActive !== undefined ? isActive : true,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
