import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { ImageAsset } from '../data/images';

export function SectionBackground({ image, children, className = '', overlay = .8 }: { image: ImageAsset; children: ReactNode; className?: string; overlay?: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  return <section ref={ref} className={`section-background ${className}`} style={{ '--section-overlay': overlay } as React.CSSProperties}>
    <motion.img src={image.src} alt="" aria-hidden="true" style={{ y: reduced ? 0 : y }} loading="lazy" />
    <div className="section-background-shade" />
    <div className="section-background-content">{children}</div>
  </section>;
}
