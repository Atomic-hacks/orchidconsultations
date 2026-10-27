import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { RollingText } from './Button';
import { ease, line } from '../lib/motion';
import type { IconName } from '../data/icons';
import { IconBadge } from './IconBadge';
const MotionLink = motion.create(Link);

export function FeatureCard({ icon, title, text, to, number, dark = false }: {
  icon: IconName; title: string; text: string; to?: string; number?: string; dark?: boolean;
}) {
  const reduced = useReducedMotion();
  const content = <><div className="feature-card-top"><IconBadge icon={icon} dark={dark} />{number && <span>{number}</span>}</div><div><h3>{title}</h3><p>{text}</p></div>{to && <span className="feature-card-link"><span className="card-cta-label"><RollingText>View service</RollingText><motion.span className="interaction-underline" aria-hidden="true" variants={line} /></span><ArrowUpRight size={20} strokeWidth={1.5} /></span>}</>;
  const className = `feature-card${dark ? ' feature-card-dark' : ''}`;
  return <motion.article className={className}
    layout="position"
    initial={reduced ? false : { y: 22, clipPath: 'inset(0% 0% 18% 0%)' }}
    whileInView={{ y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: reduced ? 0 : 0.65, ease, delay: reduced ? 0 : ((Number(number) || 1) - 1) % 3 * 0.055 }}
  >{to ? <MotionLink to={to} initial="rest" whileHover={reduced ? undefined : 'hover'} whileFocus={reduced ? undefined : 'hover'}>{content}</MotionLink> : content}</motion.article>;
}
