import type { Variants } from 'motion/react';
export const ease = [0.22, 1, 0.36, 1] as const;
export const durations = { fast: 0.42, base: 0.62, slow: 0.86 } as const;
export const transition = { duration: durations.base, ease };
export const spring = { stiffness: 150, damping: 22, mass: 0.35 };
export const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.065 } } };
export const rise: Variants = {
  hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1, transition },
};
export const word: Variants = {
  hidden: { y: '115%' }, visible: { y: '0%', transition: { ...transition, duration: durations.slow } },
};
export const roll: Variants = { rest: { y: '0%' }, hover: { y: '-100%', transition: { ...transition, duration: 0.5 } } };
export const arrowOut: Variants = { rest: { x: '0%', y: '0%' }, hover: { x: '110%', y: '-110%', transition } };
export const arrowIn: Variants = { rest: { x: '-110%', y: '110%' }, hover: { x: '0%', y: '0%', transition } };
export const sweep: Variants = { rest: { y: '101%' }, hover: { y: '0%', transition } };
export const line: Variants = { rest: { scaleX: 0 }, hover: { scaleX: 1, transition } };
export const menu: Variants = {
  hidden: { y: '-100%' }, visible: { y: '0%', transition: { ...transition, staggerChildren: 0.06, delayChildren: 0.15 } },
  exit: { y: '-100%', transition: { ...transition, duration: 0.5 } },
};
export const curtain: Variants = { initial: { scaleY: 1 }, enter: { scaleY: 0, transition }, exit: { scaleY: 1, transition: { ...transition, duration: 0.35 } } };
export const heroImage: Variants = {
  enter: { scale: 1.08, x: 16, opacity: 0 },
  visible: { scale: 1, x: 0, opacity: 1, transition: { duration: 1.1, ease } },
  exit: { scale: 1.025, opacity: 0, transition: { duration: 0.65, ease } },
};
export const heroCopy: Variants = {
  enter: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease } },
  exit: { y: -16, opacity: 0, transition: { duration: 0.35, ease } },
};
