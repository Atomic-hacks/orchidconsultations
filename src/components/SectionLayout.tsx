import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Heading, Reveal } from './Reveal';
import type { IconName } from '../data/icons';

export function Container({ className = '', ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={`site-container ${className}`} {...props} />;
}

export function Section({ className = '', tight = false, children, ...props }: ComponentPropsWithoutRef<'section'> & { tight?: boolean }) {
  return <section className={`site-section${tight ? ' site-section-tight' : ''} ${className}`} {...props}>{children}</section>;
}

export function SectionHeader({ title, lead, dark = false, aside }: {
  index: string; label: string; icon: IconName; title: string; lead?: string; dark?: boolean; aside?: ReactNode;
}) {
  return <div className={`section-header${dark ? ' section-header-dark' : ''}`}>
    <div className="section-header-copy"><Heading>{title}</Heading>{lead && <Reveal className="section-lead" delay={0.12}><p>{lead}</p></Reveal>}</div>
    {aside && <Reveal className="section-header-aside" delay={0.18}>{aside}</Reveal>}
  </div>;
}
