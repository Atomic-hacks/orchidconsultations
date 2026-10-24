import { motion } from 'motion/react';
import type { IconFeature } from '../data/icons';
import { rise, stagger } from '../lib/motion';
import { IconBadge } from './IconBadge';

export function FeatureList({ items, dark = false }: { items: readonly IconFeature[]; dark?: boolean }) {
  return <motion.ul className={`feature-list${dark ? ' feature-list-dark' : ''}`} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}>
    {items.map(item => <motion.li key={item.text} variants={rise}><IconBadge icon={item.icon} dark={dark} /><span>{item.text}</span></motion.li>)}
  </motion.ul>;
}
