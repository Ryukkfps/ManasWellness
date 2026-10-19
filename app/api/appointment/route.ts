import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { failsHoneypot, getClientIp, isRateLimited } from '@/lib/validation';

// Dormant feature (no public route links here currently) but kept
// functional and hardened so it's cheap to re-enable later.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time, service, message } = body;

    if (failsHoneypot(body.website)) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    if (isRateLimited(`appointment:${getClientIp(req)}`)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    if (!name || !email || !phone || !date || !time || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const appointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        date: new Date(date),
        time,
        service,
        message,
      },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Appointment error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
