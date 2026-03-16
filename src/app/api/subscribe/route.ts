import "reflect-metadata";
import { NextRequest, NextResponse } from "next/server";
import { getDataSource } from "@/lib/database";
import { Subscriber } from "@/lib/entities/Subscriber";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const dataSource = await getDataSource();
    const subscriberRepository = dataSource.getRepository(Subscriber);

    const existing = await subscriberRepository.findOne({
      where: { email: email.toLowerCase().trim() }
    });

    if (existing) {
      return NextResponse.json(
        { message: "You are already subscribed!" },
        { status: 200 }
      );
    }

    const subscriber = subscriberRepository.create({
      email: email.toLowerCase().trim()
    });

    await subscriberRepository.save(subscriber);

    return NextResponse.json(
      { message: "Successfully subscribed! Welcome aboard." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
