import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { ease } from '../lib/motion';
import type { ReactNode } from 'react';
import type { ImageAsset } from '../data/images';

export function SectionBackground({ image, children, className = '', overlay = .8 }: { image: ImageAsset; children: ReactNode; className?: string; overlay?: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return <section ref={ref} className={`section-background ${className}`} style={{ '--section-overlay': overlay } as React.CSSProperties}>
    <motion.img initial={reduced ? false : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.04 }} animate={inView || reduced ? { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 } : undefined} transition={{ duration: reduced ? 0 : 0.95, ease }} src={image.src} alt="" aria-hidden="true" style={{ objectPosition: image.position }} loading={inView ? 'eager' : 'lazy'} />
    <div className="section-background-shade" />
    <div className="section-background-content">{children}</div>
  </section>;
}
