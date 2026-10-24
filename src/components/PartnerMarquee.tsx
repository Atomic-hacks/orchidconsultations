import MarqueeImport from 'react-fast-marquee';
import { useReducedMotion } from 'motion/react';
import { partners } from '../data/partners';
import { clients } from '../data/clients';

const Marquee = (MarqueeImport as unknown as { default: typeof MarqueeImport }).default;
type Mark = { readonly name: string; readonly image?: string; readonly imageAlt?: string };

function LogoBox({ item }: { item: Mark }) {
  return <div className="logo-box" aria-label={item.name}>{item.image
    ? <img src={item.image} alt={item.imageAlt ?? `${item.name} logo`} width="144" height="48" loading="lazy" />
    : <span>{item.name}</span>}</div>;
}
function LogoSet({ items }: { items: readonly Mark[] }) {
  return <div className="logo-set">{items.map(item => <LogoBox item={item} key={item.name} />)}</div>;
}
export function PartnerMarquee({ compact = false }: { compact?: boolean }) {
  const reduced = useReducedMotion();
  const partnerMarks = partners.map(({ name, logo }) => ({ name, image: logo }));
  const clientMarks = clients.map(({ name, image, imageAlt }) => ({ name, image, imageAlt }));
  if (reduced) return <section className={`partners partners-static-mode${compact ? ' partners-compact' : ''}`} aria-label="Partners and clients"><div className="site-container"><p className="marquee-label">Partners</p><div className="logo-static"><LogoSet items={partnerMarks} /></div>{!compact && <><p className="marquee-label">Clients</p><div className="logo-static"><LogoSet items={clientMarks} /></div></>}</div></section>;
  return <section className={`partners${compact ? ' partners-compact' : ''}`} aria-label="Partners and clients">
    <div className="marquee-line"><p className="marquee-label">Partners</p><Marquee speed={28} pauseOnHover autoFill gradient={false}><LogoSet items={partnerMarks} /></Marquee></div>
    {!compact && <div className="marquee-line"><p className="marquee-label">Clients</p><Marquee speed={24} direction="right" pauseOnHover autoFill gradient={false}><LogoSet items={clientMarks} /></Marquee></div>}
  </section>;
}
