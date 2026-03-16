import { NextRequest, NextResponse } from 'next/server';
import 'reflect-metadata';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const { getDataSource } = await import('@/lib/database');
    const { Subscriber } = await import('@/lib/entities/Subscriber');

    const dataSource = await getDataSource();
    const subscriberRepo = dataSource.getRepository(Subscriber);

    const existing = await subscriberRepo.findOne({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'You are already subscribed!' },
        { status: 409 }
      );
    }

    const subscriber = subscriberRepo.create({ email });
    await subscriberRepo.save(subscriber);

    return NextResponse.json(
      { success: true, message: 'Thank you for subscribing!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
