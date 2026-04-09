import { Metadata } from "next";
import PageHero from "@/components/site/PageHero";

import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about ValuedSociety's mission to help people become more valuable members of their communities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(89,107,198,0.18),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(240,140,100,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(104,214,188,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070d19_0%,#060b16_40%,#050814_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>
      <PageHero
        title="About ValuedSociety"
        description="Education for betterment - helping people become more grounded, trustworthy, and community-minded."
      />
      
      <section className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-6 md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Our Mission
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              ValuedSociety exists to make personal betterment more practical, more structured, and more meaningful. We believe that better people create better outcomes - in families, communities, and society at large.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Our platform provides education for betterment - not therapy, not generic self-help, but structured guidance for becoming more mature, responsible, understanding, and valuable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
