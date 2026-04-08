const pillars = [
  {
    title: "Learn the foundations",
    description:
      "Master the everyday human qualities that shape trust, respect, stability, and contribution.",
  },
  {
    title: "Find your blind spots",
    description:
      "Identify the traits that hold you back most so growth becomes focused instead of vague.",
  },
  {
    title: "Practice in real life",
    description:
      "Turn insight into action with daily exercises that improve how you respond, communicate, and show up.",
  },
];

const traits = [
  "Forgiveness",
  "Understanding",
  "Acceptance",
  "Patience",
  "Responsibility",
  "Compassion",
  "Listening",
  "Service",
  "Reliability",
  "Humility",
  "Self-awareness",
  "Community value",
];

const steps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Start with a guided evaluation across emotional, relational, and civic-value traits.",
  },
  {
    step: "02",
    title: "Understand",
    description:
      "Get clear, simple education on the specific qualities that matter most for your growth.",
  },
  {
    step: "03",
    title: "Improve",
    description:
      "Use small daily actions and reflection loops to become more trustworthy, grounded, and useful.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050b17] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(78,116,255,0.24),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,134,82,0.22),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(92,226,196,0.10),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#071121_0%,#060c18_40%,#050914_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07101d]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#" className="text-xl font-semibold tracking-tight text-white">
            <span className="bg-gradient-to-r from-[#ffd1b2] to-[#ff8b4d] bg-clip-text text-transparent">
              ValuedSociety
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#mission" className="transition hover:text-white">
              Mission
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How it works
            </a>
            <a href="#traits" className="transition hover:text-white">
              Traits
            </a>
            <a href="#preview" className="transition hover:text-white">
              Product
            </a>
          </nav>

          <a
            href="#waitlist"
            className="rounded-full border border-white/10 bg-[linear-gradient(135deg,#ff9c5a_0%,#ff7f73_45%,#b06cff_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(202,112,255,0.22)] transition hover:scale-[1.02]"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      <section className="px-5 pt-6 md:px-8 md:pt-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(70,98,188,0.24),rgba(23,31,55,0.75)_38%,rgba(93,67,112,0.35)_100%)] px-6 py-20 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:px-12 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
              Human betterment infrastructure
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[6.25rem]">
              Build the traits that make you
              <span className="block bg-gradient-to-r from-[#ffd8c2] via-[#ff9e61] to-[#ff7d49] bg-clip-text text-transparent">
                valuable to yourself and others.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">
              ValuedSociety is not therapy. It is education for betterment —
              designed to help people become more reliable, understanding,
              useful, and community-minded through practical character
              development.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#waitlist"
                className="rounded-full bg-[linear-gradient(135deg,#ff9f5a_0%,#ff8a67_42%,#b06cff_100%)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.28)] transition hover:scale-[1.02]"
              >
                Start Becoming Better
              </a>
              <a
                href="#preview"
                className="rounded-full border border-white/12 bg-white/6 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Explore the Platform
              </a>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                "Foundational human skills",
                "Personalized growth focus",
                "Real-world daily action loops",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/75 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.34)] md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Core mission
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A better society starts with better people.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Most people want to improve, but they are rarely taught how in a
              structured, practical, and personalized way. ValuedSociety turns
              personal growth into a clear system people can actually follow.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,44,0.78),rgba(12,18,31,0.92))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/70">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(27,36,62,0.92),rgba(35,44,66,0.58))] p-6 md:p-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A clear system for building real human value.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Learn what matters. See where you struggle. Improve through
              practical exercises that help you become more trustworthy,
              patient, compassionate, and useful.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7"
              >
                <p className="text-sm font-semibold text-[#ffad73]">{item.step}</p>
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

      <section id="traits" className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,19,34,0.9),rgba(8,13,24,0.95))] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Trait system
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Better traits create better lives and stronger communities.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              ValuedSociety focuses on the qualities that improve how people
              think, relate, contribute, and carry responsibility in everyday
              life.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {traits.map((trait) => (
                <div
                  key={trait}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-medium text-white/82 backdrop-blur"
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>

          <div
            id="preview"
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(78,106,204,0.18),rgba(17,24,42,0.88)_42%,rgba(255,138,96,0.10))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-8"
          >
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,30,0.95),rgba(7,12,23,0.98))] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/45">Assessment preview</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    Your growth focus this week
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/55">
                  Live profile
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {[
                  {
                    label: "Patience",
                    value: "Needs work",
                    width: "30%",
                    tone:
                      "bg-[linear-gradient(90deg,#69a7ff_0%,#5ed0ff_100%)]",
                  },
                  {
                    label: "Understanding",
                    value: "Developing",
                    width: "56%",
                    tone:
                      "bg-[linear-gradient(90deg,#ffc46b_0%,#ff9c5f_100%)]",
                  },
                  {
                    label: "Reliability",
                    value: "Strong",
                    width: "78%",
                    tone:
                      "bg-[linear-gradient(90deg,#64e1bb_0%,#63c0ff_100%)]",
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

              <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                  Today’s action
                </p>
                <p className="mt-3 text-base leading-7 text-white/78">
                  Before reacting defensively, pause for 10 seconds and ask one
                  clarifying question instead.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-white/45">Current focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Communication under stress
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-white/45">Weekly target</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    5 completed growth actions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(26,37,67,0.88),rgba(33,41,58,0.48)_46%,rgba(150,79,94,0.28)_100%)] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Early access
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Join the first generation of ValuedSociety.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Get early access and help shape a platform designed to make human
              betterment more practical, personal, and scalable.
            </p>
          </div>

          <form className="mt-8 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-[#0b1324]/80 px-6 py-4 text-white outline-none placeholder:text-white/30"
            />
            <button
              type="submit"
              className="rounded-full bg-[linear-gradient(135deg,#ff9f5a_0%,#ff8a67_42%,#b06cff_100%)] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.28)] transition hover:scale-[1.02]"
            >
              Request Invite
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
