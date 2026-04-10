import type { ReactNode } from "react";

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

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
};

export type WaitlistStatus = "idle" | "loading" | "success" | "error";
