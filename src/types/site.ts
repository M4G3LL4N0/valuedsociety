export interface NavItem {
  href: string;
  label: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export interface Capability {
  eyebrow: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProofItem {
  text: string;
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

export interface WaitlistFormState {
  status: WaitlistStatus;
  message: string;
}

export interface WaitlistResponse {
  ok: boolean;
  message?: string;
  error?: string;
}
