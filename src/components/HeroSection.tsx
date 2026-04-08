import React from 'react';

export const HeroSection = () => (
  <section className="relative overflow-hidden border-b border-white/10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.12),transparent_25%)]" />
    <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="max-w-4xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-100 backdrop-blur">
          Character development for real life
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Become a better person,
          <span className="block bg-gradient-to-r from-blue-300 via-white to-amber-200 bg-clip-text text-transparent">
            one practical step at a time.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          Virtus is not therapy. It is education for betterment — helping
          people learn the simple things that make them stronger, kinder,
          more trustworthy, and more valuable to their communities.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#waitlist"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02]"
          >
            Join the waitlist
          </a>
          <a
            href="#how-it-works"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            See how it works
          </a>
        </div>
      </div>
    </div>
  </section>
);
