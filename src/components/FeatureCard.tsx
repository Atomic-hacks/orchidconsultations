import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { IconName } from '../data/icons';
import { IconBadge } from './IconBadge';

export function FeatureCard({ icon, title, text, to, number, dark = false }: {
  icon: IconName; title: string; text: string; to?: string; number?: string; dark?: boolean;
}) {
  const content = <><div className="feature-card-top"><IconBadge icon={icon} dark={dark} />{number && <span>{number}</span>}</div><div><h3>{title}</h3><p>{text}</p></div>{to && <span className="feature-card-link">View service <ArrowUpRight size={17} /></span>}</>;
  const className = `feature-card${dark ? ' feature-card-dark' : ''}`;
  return <article className={className}>{to ? <Link to={to}>{content}</Link> : content}</article>;
}
