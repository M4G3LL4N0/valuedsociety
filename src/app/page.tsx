import Link from "next/link";
import { PROOF_ITEMS } from "@/lib/site";

const steps = [
  {
    step: "01",
    title: "Assess your current pattern",
    description:
      "Start with a guided personal evaluation across emotional, relational, and social-value dimensions.",
  },
  {
    step: "02",
    title: "Learn what matters most",
    description:
      "Get concise education on the qualities you need most right now, explained clearly and practically.",
  },
  {
    step: "03",
    title: "Improve through action",
    description:
      "Use daily exercises, reflection, and repetition to become more grounded, trustworthy, and useful over time.",
  },
];

const traits = [
  { name: "Responsibility", cue: "Keep one promise you already made." },
  { name: "Patience", cue: "Wait one extra beat before you react." },
  { name: "Understanding", cue: "Restate their point before yours." },
  { name: "Reliability", cue: "Show up at the time you named." },
  { name: "Compassion", cue: "Do the small kindness you usually skip." },
  { name: "Service", cue: "Do one useful thing that is not about you." },
  { name: "Listening", cue: "Ask one question and let the answer finish." },
  { name: "Humility", cue: "Name one thing you got wrong this week." },
  { name: "Forgiveness", cue: "Drop one score you are still keeping." },
];

const capabilities = [
  {
    eyebrow: "Behavioral education",
    title: "Learn the things most people were never clearly taught.",
    description:
      "ValuedSociety turns patience, understanding, and accountability into practical ideas people can recognize and build.",
  },
  {
    eyebrow: "Personalized growth",
    title: "Focus on your actual weaknesses, not generic self-help.",
    description:
      "Instead of broad motivation, the platform is designed to name where you drift so growth is specific and usable.",
  },
  {
    eyebrow: "Community value",
    title: "Become someone others can trust, respect, and rely on.",
    description:
      "The goal is not abstract positivity. The goal is becoming more useful in family, work, relationships, and community.",
  },
];

const faqs = [
  {
    question: "How is ValuedSociety different from therapy?",
    answer:
      "ValuedSociety is an educational platform, not therapy and not medical care. It focuses on practical skill-building for communication, reliability, and community contribution. It does not diagnose or treat mental health conditions.",
  },
  {
    question: "What makes ValuedSociety different from self-help apps?",
    answer:
      "The product is built around a short assessment, trait-based lessons, and one practical action at a time—not generic motivation quotes.",
  },
  {
    question: "Who is it for?",
    answer:
      "Parents, operators, and anyone who wants a clearer weekly practice for patience, understanding, reliability, and service.",
  },
  {
    question: "Do you have customers or outcome metrics yet?",
    answer:
      "No. This is an early product surface. The assessment preview and practice bars are sample product visuals, not live user data.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#f5c19d_0%,#f08d68_55%,#b98cff_100%)] shadow-[0_0_20px_rgba(240,141,104,0.45)]" />
          <span className="text-lg font-semibold tracking-tight text-white">ValuedSociety</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/68 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#how-it-works" className="transition hover:text-white">How it works</a>
          <a href="#product" className="transition hover:text-white">Product</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </nav>
        <Link
          href="/waitlist"
          className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ee7f7d_48%,#ac84ff_100%)] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-5 pt-6 md:px-8 md:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(54,74,125,0.30),rgba(18,25,43,0.90)_36%,rgba(102,63,85,0.34)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
        <div className="relative px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,194,153,0.15),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(180,126,255,0.14),transparent_24%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/65">
              Human betterment platform
            </div>
            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Become someone who
              <span className="block bg-[linear-gradient(90deg,#f7d7c3_0%,#f7b07a_38%,#ef835f_72%,#d8a1ff_100%)] bg-clip-text text-transparent">
                truly matters
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">
              Name the traits that matter, see where you drift, and take one practical step this week. Educational practice—not therapy, not medical care.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/waitlist"
                className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7c_48%,#ad84ff_100%)] px-7 py-3.5 text-sm font-semibold text-white"
              >
                Join waitlist
              </Link>
              <a
                href="#product"
                className="rounded-full border border-white/12 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white/90"
              >
                See the trait system
              </a>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-4">
              {PROOF_ITEMS.map((item) => (
                <div
                  key={item.text}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/72"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  return (
    <section id="about" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.92),rgba(7,12,23,0.98))] p-6 md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Why human betterment matters
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Most people want to be steadier and more useful. Few products turn that into a weekly practice you can actually see.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            { title: "The problem", description: "Growth stays vague: no named trait, no next action, no way to notice drift." },
            { title: "The opportunity", description: "Short education plus one real-world cue can change how you show up this week." },
            { title: "The product", description: "Assessment, trait lessons, and a practice board—clearly labeled as education, not treatment." },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section id="problem" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">The problem</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Most people want to improve but lack a clear path.</h2>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-white/65">
              <li>Key traits stay unnamed.</li>
              <li>Advice stays abstract.</li>
              <li>There is no weekly action to take.</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">The solution</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">A structured system for practical growth.</h2>
            <ul className="mt-5 space-y-3 text-lg leading-8 text-white/65">
              <li>Assessment names the drift.</li>
              <li>Lessons stay short and specific.</li>
              <li>Practice cues live on a weekly board.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(26,34,58,0.92),rgba(38,47,69,0.54))] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-white/42">How it works</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Assess. Learn. Practice.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-semibold text-[#f1a774]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  return (
    <section id="proof" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.92),rgba(7,12,23,0.98))] p-6 md:p-8">
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          More serious than self-help. More practical than inspiration.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#f3bb95]">{item.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreviewSection() {
  return (
    <section id="product" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">This week&apos;s practice</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Build the qualities that show up in real life.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Each trait has one cue. The bars are a preview of the weekly tracker—not live user data.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {traits.map((trait, i) => (
              <article key={trait.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">0{i + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{trait.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{trait.cue}</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-[#f1a774]" style={{ width: `${22 + i * 6}%` }} aria-hidden />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(80,96,170,0.18),rgba(16,23,40,0.88)_42%,rgba(235,138,100,0.12))] p-6 md:p-8">
          <div className="rounded-[1.6rem] border border-white/10 bg-[#090f1c] p-6">
            <p className="text-sm text-white/45">Assessment preview · sample</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">Your growth focus this week</h3>
            <div className="mt-8 space-y-6">
              {[
                { label: "Patience", value: "Needs work", width: "29%" },
                { label: "Understanding", value: "Developing", width: "55%" },
                { label: "Reliability", value: "Strong", width: "79%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-white/85">{item.label}</span>
                    <span className="text-white/55">{item.value}</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 rounded-full bg-[linear-gradient(90deg,#f9c06f_0%,#f49d67_100%)]" style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-white/42">Today&apos;s action</p>
              <p className="mt-3 text-base leading-7 text-white/78">
                Before reacting, pause and ask one clarifying question. Sample cue for the product preview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0b111e] p-6 md:p-8">
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Clear positioning from the start.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-white">{item.question}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="waitlist" className="px-5 pb-10 pt-8 md:px-8 md:pb-12 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,44,72,0.88),rgba(152,86,96,0.28))] p-8 md:p-12">
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Join the waitlist for the first practice cohort.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
          No invented headcount. If you want a weekly character practice that is not therapy, leave an email.
        </p>
        <div className="mt-8">
          <Link
            href="/waitlist"
            className="inline-flex rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7c_48%,#ad84ff_100%)] px-7 py-4 text-sm font-semibold text-white"
          >
            Open waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-16 md:px-8 md:pb-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#0a0f1b]/80 px-6 py-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="text-lg font-semibold text-white">ValuedSociety</span>
          <p className="mt-4 text-sm leading-7 text-white/50">
            Structured human betterment. Education and practice—not therapy and not medical care.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-white/55">
          <Link href="/product" className="hover:text-white">Product</Link>
          <Link href="/how-it-works" className="hover:text-white">How it works</Link>
          <Link href="/waitlist" className="hover:text-white">Waitlist</Link>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(89,107,198,0.18),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(240,140,100,0.16),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070d19_0%,#060b16_40%,#050814_100%)]" />
      </div>
      <Header />
      <Hero />
      <WhyItMattersSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <CapabilitySection />
      <ProductPreviewSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
