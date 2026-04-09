import { Metadata } from "next";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "About | ValuedSociety",
  description: "Learn about ValuedSociety's mission to help people become more valuable members of their communities.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
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
