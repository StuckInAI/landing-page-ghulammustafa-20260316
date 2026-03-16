import { NextRequest, NextResponse } from "next/server";
import "reflect-metadata";
import { getDataSource } from "@/lib/database";
import { Subscriber } from "@/entities/Subscriber";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email?: string };

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const dataSource = await getDataSource();
    const subscriberRepo = dataSource.getRepository(Subscriber);

    const existing = await subscriberRepo.findOne({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { message: "You are already subscribed!" },
        { status: 200 }
      );
    }

    const subscriber = subscriberRepo.create({ email });
    await subscriberRepo.save(subscriber);

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
