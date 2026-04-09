"use client";

import { useState } from "react";
import { validateEmail } from "@/lib/waitlist";

import type { WaitlistStatus } from "@/types/site";

type WaitlistFormProps = {
  className?: string;
};

export default function WaitlistForm({ className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = email.trim();
    const error = validateEmail(trimmed);

    if (error) {
      setStatus("error");
      setMessage(error);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Successfully joined the waitlist.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Unable to submit right now.");
    }
  }

  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-6 md:p-8 ${className}`.trim()}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-[#0b1324]/80 px-6 py-4 text-white outline-none placeholder:text-white/30"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7c_48%,#ad84ff_100%)] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.28)] transition hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting..." : "Request Invite"}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
