import { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import { STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works | ValuedSociety",
  description: "Learn how ValuedSociety's three-step system helps you assess, understand, and improve your personal growth.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <PageHero
        title="How It Works"
        description="Our three-step system for practical human improvement"
      />
      
      <section className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-6 md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A Structured Approach to Growth
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              ValuedSociety combines assessment, education, and guided action to help you improve in measurable, realistic ways that matter in everyday life.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7"
              >
                <p className="text-sm font-semibold text-[#f1a774]">{step.step}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
