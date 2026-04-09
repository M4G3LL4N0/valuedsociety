import { NextResponse } from "next/server";

type WaitlistRequest = {
  email?: string;
};

export type WaitlistResponse = {
  ok: boolean;
  message?: string;
  error?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistRequest;
    const trimmed = body.email?.trim() ?? "";

    if (!trimmed) {
      return NextResponse.json(
        {
          ok: false,
          error: "Email is required.",
        } satisfies WaitlistResponse,
        { status: 400 }
      );
    }

    if (!isValidEmail(trimmed)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid email address.",
        } satisfies WaitlistResponse,
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Successfully joined the waitlist.",
      } satisfies WaitlistResponse,
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request body.",
      } satisfies WaitlistResponse,
      { status: 400 }
    );
  }
}
