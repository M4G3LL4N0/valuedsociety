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

export interface WaitlistFormProps {
  onSubmit: (email: string) => Promise<void>;
  isLoading: boolean;
  isSuccess: boolean;
  error?: string;
}
