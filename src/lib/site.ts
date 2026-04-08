import { NavItem, Pillar, Step, Capability, Testimonial, FAQ, ProofItem } from "@/types/site";

export const SITE_NAME = "ValuedSociety";
export const SITE_DESCRIPTION = "A premium platform for structured human betterment — helping people become more grounded, trustworthy, useful, and community-minded.";

export const NAV_ITEMS: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/product", label: "Product" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS: NavItem[] = [
  ...NAV_ITEMS,
  { href: "/waitlist", label: "Waitlist" },
];

export const PROOF_ITEMS: ProofItem[] = [
  { text: "Education for betterment, not therapy" },
  { text: "Short-form practical lessons" },
  { text: "Trait-based personal development" },
  { text: "Real-world action loops" },
];

export const pillars: Pillar[] = [
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

export const steps: Step[] = [
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

export const capabilities: Capability[] = [
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

export const testimonials: Testimonial[] = [
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
      "It feels more serious than self-help and more practical than inspiration. That's the gap.",
    name: "Strategic advisor view",
    role: "Early concept review",
  },
];

export const faqs: FAQ[] = [
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
