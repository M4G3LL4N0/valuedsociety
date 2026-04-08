import { NextResponse } from "next/server";
import { validateEmail } from "@/lib/waitlist";
import { WaitlistResponse } from "@/types/site";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const trimmed = email?.trim();

    const error = validateEmail(trimmed);
    if (error) {
      return NextResponse.json(
        { ok: false, error } satisfies WaitlistResponse,
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Successfully joined the waitlist.",
        email: trimmed,
      } satisfies WaitlistResponse,
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" } satisfies WaitlistResponse,
      { status: 400 }
    );
  }
}
