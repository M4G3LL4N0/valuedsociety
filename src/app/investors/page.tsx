import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Investors | ValuedSociety",
  description:
    "Investor overview for ValuedSociety, a premium platform for structured human betterment.",
};

const sections = [
  {
    eyebrow: "Category",
    title: "Education for betterment",
    description:
      "ValuedSociety is building a new category focused on structured human betterment. It is not therapy, and it is not generic self-help. It is a productized system for helping people become more trustworthy, grounded, responsible, and useful in real life.",
  },
  {
    eyebrow: "Problem",
    title: "People want to improve, but lack structure",
    description:
      "Most people are never given a clear framework for developing maturity, patience, forgiveness, understanding, reliability, and contribution. They may want growth, but they lack a practical system for identifying weaknesses and improving consistently.",
  },
  {
    eyebrow: "Product",
    title: "A premium digital platform for trait-based growth",
    description:
      "The product combines assessment, education, reflection, and action loops. Users identify growth gaps, learn the human qualities that matter most, and practice daily actions that improve behavior and contribution over time.",
  },
  {
    eyebrow: "Why now",
    title: "A cultural and technological opening",
    description:
      "There is growing demand for products that help people live better, relate better, and carry themselves better. At the same time, modern product infrastructure makes personalization, education delivery, and progress tracking far more practical than before.",
  },
  {
    eyebrow: "Expansion",
    title: "From consumer platform to broader infrastructure",
    description:
      "ValuedSociety can expand from consumer growth tooling into schools, organizations, communities, and enterprise-facing behavior development systems. Over time, the platform can become a broader operating layer for human betterment and social value development.",
  },
  {
    eyebrow: "Long-term vision",
    title: "A platform that helps strengthen society through stronger people",
    description:
      "The long-term vision is to make betterment more structured, practical, and scalable. As the platform matures, it can become a trusted system for helping people improve in ways that create healthier relationships, stronger communities, and better life outcomes.",
  },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <PageHero
        eyebrow="Investors"
        title="ValuedSociety investor overview"
        subtitle="A premium platform building the category of structured human betterment."
      />

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-8 md:p-10"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                {section.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {section.title}
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-white/62 md:text-lg">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
