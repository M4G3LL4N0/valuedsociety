import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Contact | ValuedSociety",
  description:
    "Contact ValuedSociety for partnerships, early access, and general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <PageHero
        eyebrow="Contact"
        title="Get in touch with ValuedSociety"
        subtitle="For early access, partnerships, and mission-aligned conversations."
      />

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                General inquiries
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Reach out
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                ValuedSociety is being built as a premium platform for structured
                human betterment. Reach out for partnerships, strategic
                conversations, or early interest.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                Contact
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Email
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                hello@valuedsociety.com
              </p>
              <p className="mt-6 text-sm leading-7 text-white/45">
                Replace this placeholder with your preferred email when ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
