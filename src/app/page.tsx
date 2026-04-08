interface Pillar {
  title: string;
  description: string;
}

interface Trait {
  name: string;
}

const pillars: Pillar[] = [
  {
    title: "Learn the basics most people miss",
    description:
      "Short lessons on everyday human skills like patience, listening, responsibility, generosity, forgiveness, and understanding.",
  },
  {
    title: "Find your real growth gaps",
    description:
      "Identify which traits and behaviors are holding you back most so growth feels personalized, not generic.",
  },
  {
    title: "Practice becoming valuable",
    description:
      "Turn better intentions into better actions with practical daily exercises rooted in real life and community.",
  },
];

const traits: Trait[] = [
  { name: "Forgiveness" },
  { name: "Acceptance" },
  { name: "Understanding" },
  { name: "Responsibility" },
  { name: "Patience" },
  { name: "Compassion" },
  { name: "Listening" },
  { name: "Service" },
  { name: "Reliability" },
  { name: "Self-awareness" },
  { name: "Humility" },
  { name: "Community-mindedness" },
];

import { HeroSection } from '../components/HeroSection';
import { PillarsSection } from '../components/PillarsSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <HeroSection />
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

      <PillarsSection pillars={pillars} />

      <section
        id="how-it-works"
        className="border-y border-white/10 bg-black/20"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              A system for becoming more useful, grounded, and good.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Start with foundational lessons. Discover your weakest areas.
              Then get guided practice that helps you improve how you think,
              act, respond, and contribute.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm text-blue-200">01</div>
              <h3 className="mt-3 text-2xl font-semibold">Assess</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Understand where you struggle most across emotional,
                interpersonal, and community-value traits.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm text-blue-200">02</div>
              <h3 className="mt-3 text-2xl font-semibold">Learn</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Get short lessons designed to make difficult human skills
                easier to understand and practice.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm text-blue-200">03</div>
              <h3 className="mt-3 text-2xl font-semibold">Apply</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Build real-world habits that help you show up better for
                yourself, your family, and your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">
              Core growth areas
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Better traits create better lives.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Virtus is built around the qualities that make people more
              trustworthy, compassionate, stable, and valuable in everyday
              life.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-400/10 via-white/5 to-amber-300/10 p-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1628] p-6 shadow-2xl">
              <p className="text-sm text-slate-400">Example insight</p>
              <h3 className="mt-2 text-2xl font-semibold">
                Your growth focus this week
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Patience</span>
                    <span className="text-blue-200">Needs work</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[28%] rounded-full bg-blue-300" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Understanding</span>
                    <span className="text-amber-200">Developing</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[54%] rounded-full bg-amber-300" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">Reliability</span>
                    <span className="text-emerald-200">Strong</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[76%] rounded-full bg-emerald-300" />
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-7 text-slate-300">
                  Today’s action: before reacting defensively, pause for 10
                  seconds and ask one clarifying question instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="border-t border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-400/10 via-transparent to-amber-300/10 p-10 md:p-14">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">
                Early access
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Build a better self. Strengthen your community.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Join the waitlist for early access to Virtus and help shape a
                new category of education for human betterment.
              </p>

              <form className="mt-8 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-[#0b1628] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-white px-6 py-4 font-medium text-slate-900 transition hover:scale-[1.02]"
                >
                  Request invite
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
