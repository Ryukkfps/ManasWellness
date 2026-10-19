import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { enquirySchema, failsHoneypot, getClientIp, isRateLimited } from '@/lib/validation';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (failsHoneypot(body.website)) {
      // Pretend success so bots don't learn the honeypot was detected.
      return NextResponse.json({ success: true }, { status: 201 });
    }

    if (isRateLimited(`enquiry:${getClientIp(req)}`)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const { name, email, phone, subject, message } = parsed.data;

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        phone: phone || undefined,
        subject,
        message,
      },
    });

    return NextResponse.json({ success: true, id: enquiry.id }, { status: 201 });
  } catch (error) {
    console.error('Enquiry error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
