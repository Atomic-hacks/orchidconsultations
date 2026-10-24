import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { Service } from '../data/services';
import { transition } from '../lib/motion';
const MotionLink = motion.create(Link);
export function ServiceRow({ service, compact = false, onPreview }: { service: Service; compact?: boolean; onPreview?: (service: Service | null) => void }) {
  const [hovered, setHovered] = useState(false); const reduced = useReducedMotion();
  return <MotionLink layout={!reduced} to={`/services/${service.slug}`} className={`service-row ${compact ? 'compact' : ''}`} initial="rest" animate={hovered && !reduced ? 'hover' : 'rest'} onFocus={() => { setHovered(true); onPreview?.(service); }} onBlur={() => { setHovered(false); onPreview?.(null); }} onMouseEnter={() => { setHovered(true); onPreview?.(service); }} onMouseLeave={() => { setHovered(false); onPreview?.(null); }} transition={transition}>
    <span className="service-number">{service.number}</span>
    <div className="service-title"><h3>{service.title}</h3></div>
    <p className="service-summary">{service.intro}</p>
    <motion.span aria-hidden="true" className="service-arrow" animate={{ x: hovered && !reduced ? 4 : 0 }} transition={transition}><ArrowUpRight size={21} strokeWidth={1.5} /></motion.span>
  </MotionLink>;
}
