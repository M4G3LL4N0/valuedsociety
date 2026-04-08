import { WaitlistResponse } from "@/types/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): string | null => {
  if (!email) return "Email is required";
  if (!EMAIL_REGEX.test(email)) return "Invalid email address";
  return null;
};

export const submitWaitlist = async (email: string): Promise<WaitlistResponse> => {
  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      return { ok: false, error: "Failed to submit" };
    }

    return await response.json();
  } catch {
    return { ok: false, error: "Network error" };
  }
};
