import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const service = await prisma.service.findFirst({
      where: { slug, isActive: true },
    });
    if (!service) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 });
  }
}
