import { useState } from 'react';
import type { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { transition } from '../lib/motion';
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return reduced ? <>{children}</> : <ReactLenis root options={{ autoRaf: true, duration: 1.1, smoothWheel: true, anchors: true }}>{children}</ReactLenis>;
}
export function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('orchid-introduced'));
  const done = () => { sessionStorage.setItem('orchid-introduced', 'true'); setVisible(false); };
  return <AnimatePresence>{visible && !reduced && <motion.div className="preloader" aria-hidden="true" exit={{ y: '-100%' }} transition={transition}><div className="preloader-mask"><motion.div initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ ...transition, duration: 0.45 }} onAnimationComplete={done}>orchid<span>.</span></motion.div></div></motion.div>}</AnimatePresence>;
}
