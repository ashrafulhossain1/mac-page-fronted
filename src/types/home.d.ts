// how to works
import { ReactNode } from "react";

export interface HowWorksStep {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  rating: number;
  content: string;
  author: string;
  location: string;
  product: string;
}

export interface TrustFeature {
  id: number;
  text: string;
}
