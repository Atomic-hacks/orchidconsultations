import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { rise, stagger, word } from '../lib/motion';
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={rise} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function Heading({ children, as = 'h2', className = '' }: { children: string; as?: 'h1' | 'h2' | 'h3'; className?: string }) {
  const reduced = useReducedMotion();
  const Tag = as;
  return <Tag className={className} aria-label={children}><motion.span aria-hidden="true" variants={stagger} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={{ once: true }} className="heading-words">{children.split(' ').map((text, i) => <span className="word-mask" key={`${text}-${i}`}><motion.span variants={word}>{text}</motion.span></span>)}</motion.span></Tag>;
}
export function SectionHeading({ title, text }: { title: string; text?: string; number?: string; label?: string }) {
  return <div className="section-heading"><div><Heading>{title}</Heading></div>{text && <Reveal><p className="measure muted">{text}</p></Reveal>}</div>;
}
