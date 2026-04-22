import { Variants } from "motion/react";

export const SLIDE_UP: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: {
    y: "0%",
    opacity: 1,
  },
  close: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const CONATINER_SLIDE_UP_HEADING: Variants = {
  initial: {},
  open: {
    transition: {
      staggerChildren: 0.01, // 👈 delay بين كل كلمة
    },
  },
  close: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1, // 👈 reverse في الخروج
    },
  },
};

export const SCALE_UP_ANIMATION: Variants = {
  initial: { scale: 0 },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
