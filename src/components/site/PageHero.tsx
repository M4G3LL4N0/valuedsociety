import type { ReactNode } from "react";

import { PageHeroProps } from "@/types/site";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  children,
}: PageHeroProps) {
  const bodyText = subtitle ?? description;

  return (
    <section className="px-5 pt-6 md:px-8 md:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(54,74,125,0.30),rgba(18,25,43,0.90)_36%,rgba(102,63,85,0.34)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
        <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,194,153,0.15),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(180,126,255,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(104,214,188,0.09),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            {eyebrow ? (
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/65 backdrop-blur">
                {eyebrow}
              </div>
            ) : null}

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight text-white md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {bodyText ? (
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">
                {bodyText}
              </p>
            ) : null}

            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
