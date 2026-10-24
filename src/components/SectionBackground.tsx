import type { ReactNode } from 'react';
import type { ImageAsset } from '../data/images';

export function SectionBackground({ image, children, className = '', overlay = .8 }: { image: ImageAsset; children: ReactNode; className?: string; overlay?: number }) {
  return <section className={`section-background ${className}`} style={{ '--section-overlay': overlay } as React.CSSProperties}>
    <img src={image.src} alt="" aria-hidden="true" style={{ objectPosition: image.position }} loading="lazy" />
    <div className="section-background-shade" />
    <div className="section-background-content">{children}</div>
  </section>;
}
