'use server';

import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth-guard';
import { revalidatePath } from 'next/cache';

export async function updateContactInfo(id: string | undefined, data: { address: string; phone: string; email: string; workingHours?: string }) {
  await requireAdmin();
  let contact;
  if (id) {
    contact = await prisma.contactInfo.update({
      where: { id },
      data,
    });
  } else {
    contact = await prisma.contactInfo.create({
      data,
    });
  }
  revalidatePath('/');
  revalidatePath('/admin/contact');
  return contact;
}
