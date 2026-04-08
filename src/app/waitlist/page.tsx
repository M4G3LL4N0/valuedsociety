import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import WaitlistForm from "@/components/site/WaitlistForm";

export const metadata: Metadata = {
  title: "Waitlist | ValuedSociety",
  description:
    "Join the ValuedSociety waitlist and get early access to a platform designed to help you become more valuable in real life.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <PageHero
        eyebrow="Early access"
        title="Join ValuedSociety"
        subtitle="Be part of the first group shaping a platform focused on real human betterment."
      />

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
