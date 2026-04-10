import Link from "next/link";

const pillars = [
  {
    title: "Foundational human skills",
    description:
      "Learn the qualities that shape trust, maturity, steadiness, compassion, and contribution in everyday life.",
  },
  {
    title: "Personal growth diagnosis",
    description:
      "See which traits most affect your relationships, judgment, reactions, and role in your community.",
  },
  {
    title: "Practical daily application",
    description:
      "Use simple real-world actions to improve how you speak, listen, respond, forgive, and carry responsibility.",
  },
];

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
  "Forgiveness",
  "Acceptance",
  "Understanding",
  "Responsibility",
  "Patience",
  "Compassion",
  "Listening",
  "Humility",
  "Reliability",
  "Service",
  "Self-awareness",
  "Community value",
];

const capabilities = [
  {
    eyebrow: "Behavioral education",
    title: "Learn the things most people were never clearly taught.",
    description:
      "ValuedSociety makes human betterment understandable. It turns difficult traits like patience, understanding, and accountability into practical ideas people can recognize and build.",
  },
  {
    eyebrow: "Personalized growth",
    title: "Focus on your actual weaknesses, not generic self-help.",
    description:
      "Instead of broad motivation, the platform helps identify where you struggle most so growth becomes direct, specific, and useful.",
  },
  {
    eyebrow: "Community value",
    title: "Become someone others can trust, respect, and rely on.",
    description:
      "The goal is not abstract positivity. The goal is becoming more valuable in real life — in family, work, relationships, and community.",
  },
];

import { PROOF_ITEMS } from "@/lib/site";

const testimonials = [
  {
    quote:
      "This feels like the first platform that explains personal growth in a way that is actually actionable and grounded.",
    name: "Early user perspective",
    role: "Mission-aligned tester",
  },
  {
    quote:
      "It takes qualities people vaguely talk about and turns them into something measurable, understandable, and trainable.",
    name: "Product feedback",
    role: "Founding feedback cohort",
  },
  {
    quote:
      "It feels more serious than self-help and more practical than inspiration. That’s the gap.",
    name: "Strategic advisor view",
    role: "Early concept review",
  },
];

const faqs = [
  {
    question: "Is this therapy?",
    answer:
      "No. ValuedSociety is educational. It helps people understand and practice better human qualities, but it is not a clinical or therapeutic service.",
  },
  {
    question: "What makes this different from self-help apps?",
    answer:
      "Most self-help products are motivational or habit-focused. ValuedSociety is centered on character, behavior, judgment, and contribution — helping people become more valuable to themselves and others.",
  },
  {
    question: "Who is this for?",
    answer:
      "Anyone who wants structured personal betterment, especially people who want to become more reliable, understanding, mature, and community-minded.",
  },
  {
    question: "What does the product actually do?",
    answer:
      "It evaluates growth areas, teaches core human qualities in short lessons, and gives practical daily actions that help users improve in real life.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#f5c19d_0%,#f08d68_55%,#b98cff_100%)] shadow-[0_0_20px_rgba(240,141,104,0.45)]" />
          <span className="text-lg font-semibold tracking-tight text-white">
            ValuedSociety
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/68 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#product" className="transition hover:text-white">
            Product
          </a>
          <a href="#proof" className="transition hover:text-white">
            Value
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#waitlist"
            className="rounded-full border border-white/12 bg-[linear-gradient(135deg,#f5a56b_0%,#ee7f7d_48%,#ac84ff_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(201,122,255,0.22)] transition hover:scale-[1.02]"
          >
            Join Waitlist
          </a>
        </div>

        <a
          href="#waitlist"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 md:hidden"
        >
          Join
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-5 pt-6 md:px-8 md:pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(54,74,125,0.30),rgba(18,25,43,0.90)_36%,rgba(102,63,85,0.34)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
        <div className="relative px-6 py-20 md:px-12 md:py-28 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,194,153,0.15),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(180,126,255,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(104,214,188,0.09),transparent_28%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/65 backdrop-blur">
              Human betterment platform
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[6.1rem]">
              Become more valuable
              <span className="block bg-[linear-gradient(90deg,#f7d7c3_0%,#f7b07a_38%,#ef835f_72%,#d8a1ff_100%)] bg-clip-text text-transparent">
                to yourself, to others, and to society.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">
              ValuedSociety is education for betterment — a premium platform
              built to help people understand, strengthen, and practice the
              traits that make them more grounded, trustworthy, compassionate,
              and useful in real life.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#waitlist"
                className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7c_48%,#ad84ff_100%)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.26)] transition hover:scale-[1.02]"
              >
                Start Becoming Better
              </a>
              <a
                href="#product"
                className="rounded-full border border-white/12 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/[0.09]"
              >
                Explore the Product
              </a>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-4">
              {PROOF_ITEMS.map((item) => (
                <div
                  key={item.text}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/72 backdrop-blur"
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

function MissionSection() {
  return (
    <section id="about" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              Why this exists
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Better people create better outcomes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Most people are never given a structured system for becoming more
              mature, responsible, forgiving, understanding, and useful. They
              want to improve, but they lack a clear framework.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/65">
              ValuedSociety turns personal betterment into something clearer,
              calmer, more practical, and more scalable — so people can grow in
              ways that matter beyond themselves.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,21,36,0.90),rgba(10,16,29,0.96))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-semibold text-[#f0aa79]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {pillar.description}
                </p>
              </div>
            ))}
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
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            A premium system for practical human improvement.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            The platform combines assessment, education, and guided action so
            users can improve in ways that are measurable, realistic, and useful
            in everyday life.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7"
            >
              <p className="text-sm font-semibold text-[#f1a774]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {item.description}
              </p>
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
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            Platform value
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            More serious than self-help. More practical than inspiration.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            ValuedSociety is designed to occupy a distinct category: structured
            education for becoming a more valuable human being.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-7"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#f3bb95]">
                {item.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {item.description}
              </p>
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
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            Trait system
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Build the qualities that improve every part of life.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
            The product is built around the core traits that shape how people
            think, act, communicate, repair, contribute, and carry themselves in
            the world.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {traits.map((trait) => (
              <div
                key={trait}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-white/82"
              >
                {trait}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(80,96,170,0.18),rgba(16,23,40,0.88)_42%,rgba(235,138,100,0.12))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.36)] md:p-8">
          <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,28,0.96),rgba(6,11,22,0.99))] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/45">Assessment preview</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  Your growth focus this week
                </h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/52">
                Personal profile
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {[
                {
                  label: "Patience",
                  value: "Needs work",
                  width: "29%",
                  tone:
                    "bg-[linear-gradient(90deg,#6ea6ff_0%,#66c9ff_100%)]",
                },
                {
                  label: "Understanding",
                  value: "Developing",
                  width: "55%",
                  tone:
                    "bg-[linear-gradient(90deg,#f9c06f_0%,#f49d67_100%)]",
                },
                {
                  label: "Reliability",
                  value: "Strong",
                  width: "79%",
                  tone:
                    "bg-[linear-gradient(90deg,#69ddb7_0%,#65bfff_100%)]",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-white/85">{item.label}</span>
                    <span className="text-white/55">{item.value}</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/8">
                    <div
                      className={`h-3 rounded-full ${item.tone}`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-white/45">Current focus</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Communication under stress
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-white/45">Weekly target</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  5 completed growth actions
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-white/42">
                Today’s action
              </p>
              <p className="mt-3 text-base leading-7 text-white/78">
                Before reacting defensively, pause for 10 seconds and ask one
                clarifying question instead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(30,39,61,0.9),rgba(31,35,48,0.52)_48%,rgba(108,69,83,0.22)_100%)] p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            Early signal
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            A category people immediately understand once they see it.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            The strongest response to ValuedSociety is that it feels obvious in
            retrospect: people need better frameworks for becoming better humans.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.quote}
              className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7"
            >
              <p className="text-base leading-8 text-white/78">“{item.quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-white/45">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="px-5 pt-8 md:px-8 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,17,30,0.94),rgba(8,13,24,0.98))] p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            Frequently asked questions
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Clear positioning from the start.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            The category matters. The language matters. The product must be
            understood quickly and trusted easily.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {item.answer}
              </p>
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
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,44,72,0.88),rgba(28,34,47,0.52)_46%,rgba(152,86,96,0.28)_100%)] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.36)] md:p-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/42">
            Early access
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Join the first generation of ValuedSociety.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/68">
            Get early access and help shape a platform built to make personal
            betterment more practical, more personal, and more meaningful.
          </p>
        </div>

        <form 
          className="mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-[#0b1324]/80 px-6 py-4 text-white outline-none placeholder:text-white/30"
          />
          <button
            type="submit"
            className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7c_48%,#ad84ff_100%)] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.28)] transition hover:scale-[1.02]"
          >
            Request Invite
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-16 md:px-8 md:pb-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#0a0f1b]/80 px-6 py-8 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#f5c19d_0%,#f08d68_55%,#b98cff_100%)] shadow-[0_0_20px_rgba(240,141,104,0.45)]" />
            <span className="text-lg font-semibold text-white">
              ValuedSociety
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/50">
            A premium platform for structured human betterment — helping people
            become more grounded, trustworthy, useful, and community-minded.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-white/55 md:flex md:items-center md:gap-8">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#product" className="transition hover:text-white">
            Product
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(89,107,198,0.18),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(240,140,100,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(104,214,188,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070d19_0%,#060b16_40%,#050814_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <Header />
      <Hero />
      <MissionSection />
      <HowItWorksSection />
      <CapabilitySection />
      <ProductPreviewSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}