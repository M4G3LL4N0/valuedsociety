import Link from "next/link";

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

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(89,107,198,0.18),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(240,140,100,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(104,214,188,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070d19_0%,#060b16_40%,#050814_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <section className="px-5 pt-6 md:px-8 md:pt-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(54,74,125,0.30),rgba(18,25,43,0.90)_36%,rgba(102,63,85,0.34)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
          <div className="relative px-6 py-20 md:px-12 md:py-28 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,194,153,0.15),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(180,126,255,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(104,214,188,0.09),transparent_28%)]" />
            <div className="relative mx-auto max-w-5xl text-center">
              <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[6.1rem]">
                Practical tools for
                <span className="block bg-[linear-gradient(90deg,#f7d7c3_0%,#f7b07a_38%,#ef835f_72%,#d8a1ff_100%)] bg-clip-text text-transparent">
                  meaningful human growth
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/68 md:text-xl">
                ValuedSociety provides structured education and practical tools to help you develop the traits that matter most in real life.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/waitlist"
                  className="rounded-full bg-[linear-gradient(135deg,#f5a56b_0%,#ef7d7c_48%,#ad84ff_100%)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(195,119,255,0.26)] transition hover:scale-[1.02]"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-white/12 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/[0.09]"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.92),rgba(7,12,23,0.98))] p-6 md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Build the qualities that improve every part of life
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Our system focuses on developing core traits that shape how you think, act, communicate, and contribute to the world around you.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
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

      <section className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-6 md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Focused on the traits that matter most
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Our system helps you develop core human qualities that improve every aspect of your life and relationships.
            </p>
          </div>

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
      </section>
    </main>
  );
}
