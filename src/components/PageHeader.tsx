import type { ImageAsset } from '../data/images';
import { Heading } from './Reveal';
import { SectionBackground } from './SectionBackground';
import { Container } from './SectionLayout';

export function PageHeader({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image: ImageAsset }) {
  return <SectionBackground image={image} className="page-hero-v2" overlay={.8}><Container><div className="page-hero-copy"><span className="page-kicker">{eyebrow}</span><Heading as="h1">{title}</Heading>{intro && <p className="page-intro">{intro}</p>}</div></Container></SectionBackground>;
}
