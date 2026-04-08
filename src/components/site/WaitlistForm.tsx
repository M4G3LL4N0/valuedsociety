"use client";

import { useState } from "react";
import { WaitlistFormProps } from "@/types/site";

export default function WaitlistForm({
  onSubmit,
  isLoading,
  isSuccess,
  error,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-full border border-white/10 bg-[#0b1324]/80 px-6 py-4 text-white outline-none placeholder:text-white/30"
        required
        disabled={isLoading || isSuccess}
      />
      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7d_48%,#ad84ff_100%)] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.28)] transition hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
      >
        {isLoading ? "Submitting..." : isSuccess ? "Thank you!" : "Request Invite"}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-400/80">
          {error}
        </p>
      )}
    </form>
  );
}
