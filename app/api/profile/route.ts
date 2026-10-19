import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin, UnauthorizedError } from '@/lib/auth-guard';

export async function GET() {
  try {
    await requireAdmin();
    const profile = await prisma.therapistProfile.findFirst();
    return NextResponse.json(profile);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const {
      fullName, title, photo, shortBio, qualifications,
      specialisations, languages, approach, yearsExperience, registrationNo,
    } = body;

    if (!fullName) {
      return NextResponse.json({ error: 'Full name is required' }, { status: 400 });
    }

    const data = {
      fullName,
      title: title || null,
      photo: photo || null,
      shortBio: shortBio || null,
      qualifications: Array.isArray(qualifications) ? qualifications : [],
      specialisations: Array.isArray(specialisations) ? specialisations : [],
      languages: Array.isArray(languages) ? languages : [],
      approach: approach || null,
      yearsExperience: typeof yearsExperience === 'number' ? yearsExperience : (yearsExperience ? parseInt(yearsExperience) : null),
      registrationNo: registrationNo || null,
    };

    const existing = await prisma.therapistProfile.findFirst();
    const profile = existing
      ? await prisma.therapistProfile.update({ where: { id: existing.id }, data })
      : await prisma.therapistProfile.create({ data });

    return NextResponse.json(profile);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
