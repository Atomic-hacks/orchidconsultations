import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Heading } from './Reveal';
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
    <div className="section-header-copy"><Heading>{title}</Heading>{lead && <p>{lead}</p>}</div>
    {aside && <div className="section-header-aside">{aside}</div>}
  </div>;
}
