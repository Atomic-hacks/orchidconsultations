import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Reveal, Heading } from './Reveal';
import { IconBadge } from './IconBadge';
import type { IconName } from '../data/icons';

export function Container({ className = '', ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={`site-container ${className}`} {...props} />;
}

export function Section({ className = '', tight = false, children, ...props }: ComponentPropsWithoutRef<'section'> & { tight?: boolean }) {
  return <section className={`site-section${tight ? ' site-section-tight' : ''} ${className}`} {...props}>{children}</section>;
}

export function SectionHeader({ index, label, icon, title, lead, dark = false, aside }: {
  index: string; label: string; icon: IconName; title: string; lead?: string; dark?: boolean; aside?: ReactNode;
}) {
  return <div className={`section-header${dark ? ' section-header-dark' : ''}`}>
    <Reveal className="section-header-mark"><IconBadge icon={icon} dark={dark} /><span>{index} / {label}</span></Reveal>
    <div className="section-header-copy"><Heading>{title}</Heading>{lead && <p>{lead}</p>}</div>
    {aside && <div className="section-header-aside">{aside}</div>}
  </div>;
}
