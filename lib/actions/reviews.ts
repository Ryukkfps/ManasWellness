'use server';

import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth-guard';
import { revalidatePath } from 'next/cache';

export async function approveReview(id: string) {
  await requireAdmin();
  const review = await prisma.review.update({
    where: { id },
    data: { isApproved: true },
  });
  revalidatePath('/');
  revalidatePath('/admin/reviews');
  return review;
}

export async function deleteReview(id: string) {
  await requireAdmin();
  await prisma.review.delete({
    where: { id },
  });
  revalidatePath('/');
  revalidatePath('/admin/reviews');
}
