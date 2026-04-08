import { NextResponse } from "next/server";

type WaitlistBody = {
  email?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistBody;
    const email = body?.email?.trim();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Successfully joined the waitlist.",
        email,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}
