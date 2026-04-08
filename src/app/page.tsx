const pillars = [
  {
    title: "Learn what actually matters",
    description:
      "Short lessons on everyday human skills like patience, listening, responsibility, forgiveness, and understanding.",
  },
  {
    title: "Discover your real gaps",
    description:
      "Identify the traits and behaviors holding you back so growth becomes personal and meaningful.",
  },
  {
    title: "Become valuable in real life",
    description:
      "Turn knowledge into action with daily practices that improve how you show up for others.",
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
  "Service",
  "Reliability",
  "Self-awareness",
  "Humility",
  "Community value",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.12),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-100 backdrop-blur">
              A better society starts with better people
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Become someone who matters,
              <span className="block bg-gradient-to-r from-blue-300 via-white to-amber-200 bg-clip-text text-transparent">
                to yourself and others.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              ValuedSociety is education for betterment — helping people become
              more reliable, understanding, and valuable in their everyday lives
              and communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02]"
              >
                Join ValuedSociety
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

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Build real value as a person.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Learn the fundamentals. Identify your weaknesses. Then improve
              through real-world actions that actually change how you behave and
              contribute.
            </p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-400/10 via-transparent to-amber-300/10 p-10 md:p-14">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Join ValuedSociety
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Start becoming someone people can rely on, respect, and trust.
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
