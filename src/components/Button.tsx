import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { arrowIn, arrowOut, roll, sweep } from '../lib/motion';
const MotionLink = motion.create(Link);
interface Props { children: string; to?: string; href?: string; variant?: 'dark' | 'light' | 'outline'; className?: string; onClick?: () => void; type?: 'button' | 'submit'; disabled?: boolean }
export function RollingText({ children }: { children: ReactNode }) {
  return <span className="roll-window"><motion.span className="roll-track" variants={roll}><span>{children}</span><span aria-hidden="true">{children}</span></motion.span></span>;
}
export function Button({ children, to, href, variant = 'dark', className = '', onClick, type = 'button', disabled }: Props) {
  const reduced = useReducedMotion(); const [active, setActive] = useState(false);
  const reset = () => setActive(false);
  const props = { className: `signature-button button-${variant} ${className}`, initial: 'rest', animate: active && !reduced ? 'hover' : 'rest', onMouseEnter: () => setActive(true), onMouseLeave: reset, onFocus: () => setActive(true), onBlur: reset, whileTap: reduced ? undefined : { scale: 0.99 }, onClick };
  const content = <><motion.span aria-hidden="true" className="button-sweep" variants={sweep} /><RollingText>{children}</RollingText><span className="arrow-window" aria-hidden="true"><motion.span variants={arrowOut}><ArrowUpRight size={18} strokeWidth={1.5} /></motion.span><motion.span className="arrow-copy" variants={arrowIn}><ArrowUpRight size={18} strokeWidth={1.5} /></motion.span></span></>;
  if (to) return <MotionLink to={to} {...props}>{content}</MotionLink>;
  if (href) return <motion.a href={href} {...props}>{content}</motion.a>;
  return <motion.button type={type} disabled={disabled} {...props}>{content}</motion.button>;
}
export function TextLink({ to, children, href }: { to?: string; href?: string; children: string }) {
  const reduced = useReducedMotion();
  const props = { className: 'text-link', initial: 'rest', whileHover: reduced ? undefined : 'hover', whileFocus: reduced ? undefined : 'hover' };
  return to ? <MotionLink to={to} {...props}><RollingText>{children}</RollingText></MotionLink> : <motion.a href={href} {...props}><RollingText>{children}</RollingText></motion.a>;
}
