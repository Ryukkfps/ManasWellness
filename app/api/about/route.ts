import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin, UnauthorizedError } from "@/lib/auth-guard";

export async function GET() {
  try {
    const sections = await prisma.aboutSection.findMany({
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(sections);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const { title, subtitle, content, image, layout, order, isActive } = body;

    const section = await prisma.aboutSection.create({
      data: {
        title,
        subtitle,
        content,
        image,
        layout: layout || 'NORMAL',
        order: order || 0,
        isActive: isActive !== undefined ? isActive : true
      }
    });

    return NextResponse.json({ success: true, id: section.id, result: section });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error('Database error:', error);
    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    );
  }
}
