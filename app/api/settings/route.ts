import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth-guard';
import { handleApiError } from '@/lib/api-error';
import { THEME_PRESETS, FONT_PAIRS } from '@/lib/theme-presets';

export async function GET() {
  try {
    await requireAdmin();
    const settings = await prisma.siteSettings.findFirst();
    return NextResponse.json(settings);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch settings');
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const { themePreset, fontPair, siteName, tagline, metaDescription, crisisNotice, cookieConsentEnabled } = body;

    if (themePreset && !THEME_PRESETS.some((p) => p.key === themePreset)) {
      return NextResponse.json({ error: 'Invalid theme preset' }, { status: 400 });
    }
    if (fontPair && !FONT_PAIRS.some((f) => f.key === fontPair)) {
      return NextResponse.json({ error: 'Invalid font pair' }, { status: 400 });
    }

    const data = {
      ...(themePreset ? { themePreset } : {}),
      ...(fontPair ? { fontPair } : {}),
      ...(siteName !== undefined ? { siteName } : {}),
      ...(tagline !== undefined ? { tagline } : {}),
      ...(metaDescription !== undefined ? { metaDescription } : {}),
      ...(crisisNotice !== undefined ? { crisisNotice } : {}),
      ...(cookieConsentEnabled !== undefined ? { cookieConsentEnabled } : {}),
    };

    const existing = await prisma.siteSettings.findFirst();
    const settings = existing
      ? await prisma.siteSettings.update({ where: { id: existing.id }, data })
      : await prisma.siteSettings.create({ data });

    return NextResponse.json(settings);
  } catch (error) {
    return handleApiError(error, 'Failed to update settings');
  }
}
