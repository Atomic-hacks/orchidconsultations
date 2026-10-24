import { motion, useReducedMotion } from 'motion/react';
import type { IconName } from '../data/icons';
import { iconMap } from '../lib/icons';

export function IconBadge({ icon, dark = false, label }: { icon: IconName; dark?: boolean; label?: string }) {
  const Icon = iconMap[icon];
  const reduced = useReducedMotion();
  return <motion.span
    className={`icon-badge${dark ? ' icon-badge-dark' : ''}`}
    aria-hidden={label ? undefined : true}
    aria-label={label}
    variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: reduced ? 0 : -4, scale: reduced ? 1 : 1.05 } }}
    transition={{ duration: reduced ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
  ><Icon size={21} strokeWidth={1.7} /></motion.span>;
}
