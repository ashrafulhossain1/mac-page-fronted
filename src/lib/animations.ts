import type { Variants } from "framer-motion";

// ─────────────────────────────────────────────
//  Apple-style spring — slow, heavy, premium
//  Used for section headings
// ─────────────────────────────────────────────
export const appleSpring = {
  type: "spring",
  stiffness: 38,
  damping: 22,
  mass: 1.4,
} as const;

// ─────────────────────────────────────────────
//  Fast spring — settles in ≤ 400ms
//  Used for card-by-card entrance
// ─────────────────────────────────────────────
export const fastSpring = {
  type: "spring",
  stiffness: 90,
  damping: 20,
  mass: 0.8,
} as const;

// ─────────────────────────────────────────────
//  Section heading — drifts up from below
// ─────────────────────────────────────────────
export const headingVariants: Variants = {
  hidden: { opacity: 0, y: 90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...appleSpring, delay: 0.05 },
  },
};

// ─────────────────────────────────────────────
//  Sequential stagger container — 200ms gap
//  Cards appear one after another
// ─────────────────────────────────────────────
export const sequentialStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.05,
    },
  },
};

// ─────────────────────────────────────────────
//  Standard stagger container (120ms)
// ─────────────────────────────────────────────
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ─────────────────────────────────────────────
//  Fast card variant — max 400ms, drifts up
// ─────────────────────────────────────────────
export const fastCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...fastSpring },
  },
};

// ─────────────────────────────────────────────
//  Card / row item — drifts up from below (slower)
// ─────────────────────────────────────────────
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...appleSpring },
  },
};

// ─────────────────────────────────────────────
//  Inner content stagger container (top → bottom)
// ─────────────────────────────────────────────
export const innerStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

// ─────────────────────────────────────────────
//  Inner item — drifts down from slightly above
// ─────────────────────────────────────────────
export const innerItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 18,
      mass: 1,
    },
  },
};

// ─────────────────────────────────────────────
//  Shared decent hover — subtle y lift
// ─────────────────────────────────────────────
export const decentHover = {
  y: -4,
  transition: {
    type: "spring" as const,
    stiffness: 200,
    damping: 22,
  },
};

// ─────────────────────────────────────────────
//  Viewport configs — mobile safe
// ─────────────────────────────────────────────
export const defaultViewport = {
  once: true,
  amount: 0.1,
} as const;

export const headingViewport = {
  once: true,
  amount: 0.9,
} as const;
