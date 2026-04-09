export type NavLink = {
  label: string;
  href: string;
};

export type ProofItem = {
  text: string;
};

export type StepItem = {
  step: string;
  title: string;
  description: string;
};

export const SITE_NAME = "ValuedSociety";

export const SITE_DESCRIPTION =
  "ValuedSociety is a premium platform for structured human betterment — helping people become more grounded, trustworthy, responsible, compassionate, and useful in real life.";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
  { label: "Waitlist", href: "/waitlist" },
];

export const PROOF_ITEMS: ProofItem[] = [
  { text: "Education for betterment, not therapy" },
  { text: "Short-form practical lessons" },
  { text: "Trait-based personal development" },
  { text: "Real-world action loops" },
];

export const steps: StepItem[] = [
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
