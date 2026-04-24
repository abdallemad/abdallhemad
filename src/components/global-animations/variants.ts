import { Transition, Variants } from "motion/react";

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
const transition: Transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const MENU_HEIGHT: Variants = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition: transition,
  },
  exit: {
    height: 0,
    transition: transition,
  },
};

export const TRANSLATE_UP_CHARS: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};
