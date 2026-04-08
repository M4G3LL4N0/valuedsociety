"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
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

    const result = await submitWaitlist(trimmed);
    
    if (result.ok) {
      setStatus("success");
      setMessage(result.message || "Successfully joined the waitlist.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error || "Something went wrong.");
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-6 md:p-8">
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
          className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7c_48%,#ad84ff_100%)] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.28)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
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
