import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { images } from '../data/images';
import type { IconName } from '../data/icons';
import { IconBadge } from './IconBadge';
import { SectionBackground } from './SectionBackground';
import { Container, SectionHeader } from './SectionLayout';
import { transition } from '../lib/motion';

const stats: readonly { value: number; suffix: string; label: string; icon: IconName }[] = [
  { value: 50, suffix: '+', label: 'International markets', icon: 'Globe2' },
  { value: 24, suffix: '/7', label: 'Facility monitoring', icon: 'Activity' },
  { value: 24, suffix: '–48h', label: 'Loan approval window', icon: 'Clock3' },
  { value: 365, suffix: ' days', label: 'Investment period', icon: 'CalendarClock' },
];
function StatItem({ value, suffix, label, icon }: typeof stats[number]) {
  const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once: true }); const reduced = useReducedMotion(); const [display, setDisplay] = useState(reduced ? value : 0);
  useEffect(() => { if (!inView || reduced) return; const control = animate(0, value, { ...transition, onUpdate: latest => setDisplay(Math.round(latest)) }); return () => control.stop(); }, [inView, reduced, value]);
  return <div className="stat-card-v2" ref={ref}><IconBadge icon={icon} dark /><strong>{display}{suffix}</strong><span>{label}</span></div>;
}
export function Stats() {
  return <SectionBackground image={images.stats} className="stats-section-v2" overlay={.82}><Container><SectionHeader index="05" label="At a glance" icon="BarChart3" title="Capabilities with clear operating parameters." dark /><div className="stats-grid-v2">{stats.map(stat => <StatItem key={stat.label} {...stat} />)}</div></Container></SectionBackground>;
}
