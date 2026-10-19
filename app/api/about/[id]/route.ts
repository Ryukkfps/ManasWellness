import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-guard";
import { handleApiError } from "@/lib/api-error";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    const { title, subtitle, content, image, layout, order, isActive } = body;

    const section = await prisma.aboutSection.update({
      where: { id },
      data: {
        title,
        subtitle,
        content,
        image,
        layout,
        order,
        isActive,
      }
    });

    return NextResponse.json({ success: true, result: section });
  } catch (error) {
    return handleApiError(error, "Failed to update about section");
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
    const { id } = await params;
    const result = await prisma.aboutSection.delete({
      where: { id }
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return handleApiError(error, "Failed to delete about section");
  }
}
