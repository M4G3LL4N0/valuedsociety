import { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import WaitlistForm from "@/components/site/WaitlistForm";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Waitlist | ValuedSociety",
  description: "Join the waitlist for early access to ValuedSociety's premium platform for human betterment.",
};

export default function WaitlistPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (email: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Here you would normally make an API call to your backend
      // For now, we'll just simulate success
      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <PageHero
        title="Join the Waitlist"
        description="Be among the first to experience ValuedSociety's premium platform for structured human betterment."
      />
      
      <section className="px-5 pt-8 md:px-8 md:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.94),rgba(8,13,24,0.98))] p-6 md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Early Access
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Join the first generation of ValuedSociety and help shape a platform built to make personal betterment more practical, more personal, and more meaningful.
            </p>
          </div>

          <WaitlistForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isSuccess={isSuccess}
            error={error}
          />
        </div>
      </section>
    </main>
  );
}
