import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { contact, navigation, socialLinks } from '../data/site';
import { Button, TextLink } from './Button';
import { Heading } from './Reveal';
import { services } from '../data/services';
import { images } from '../data/images';
export function Footer() {
  const reduced = useReducedMotion(); const lenis = useLenis();
  const { pathname } = useLocation();
  const top = () => { if (lenis && !reduced) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: 'instant' }); };
  return <footer className="footer">{pathname !== '/' && <div className="footer-cta-band" style={{ backgroundImage: `linear-gradient(rgb(24 28 44 / 82%), rgb(24 28 44 / 82%)), url(${images.cta.src})` }}><div className="wrap footer-cta"><div><span className="small-caps">Next steps / Contact</span><Heading>Ready to grow your business?</Heading><p>Let Orchiddigital Consulting help you reach your next milestone.</p></div><Button to="/contact" variant="light">Schedule a consultation</Button></div></div>}<div className="wrap">
    <div className="footer-grid"><div><Link className="wordmark footer-brand" to="/" aria-label="Orchid Consultations home"><img src="/logo-dark.svg" alt="Orchid Consultations" width="300" height="60" /></Link><p className="footer-description">Empowering businesses for global growth through technology, training, and enterprise transformation.</p><span className="small-caps">Limitless possibilities</span></div>
      <div><h3>Company</h3>{navigation.map(n => <TextLink key={n.to} to={n.to}>{n.label}</TextLink>)}<TextLink to="/contact">Contact</TextLink></div>
      <div className="footer-services"><h3>Services</h3>{services.map(s => <TextLink key={s.slug} to={`/services/${s.slug}`}>{s.title}</TextLink>)}</div>
      <div><h3>Contact info</h3><a className="footer-contact-link footer-email" href={`mailto:${contact.email}`}><Mail size={15} />{contact.email}</a><a className="footer-contact-link" href={`tel:${contact.tel}`}><Phone size={15} />{contact.phone}</a><p className="footer-contact-link"><MapPin size={15} />{contact.address}</p><div className="footer-socials">{socialLinks.map(l => <TextLink key={l.label} href={l.href}>{l.label}</TextLink>)}</div></div>
    </div>{/* TODO: audited copy needed — approved compliance and regulatory statement. */}<p className="compliance-placeholder">Compliance information — pending review.</p><div className="footer-bottom"><p>© {new Date().getFullYear()} Orchiddigital Consulting. All rights reserved.</p><TextLink to="/privacy">Privacy Policy</TextLink><button onClick={top} className="back-top">Back to top <ArrowUp size={16} strokeWidth={1.5} /></button></div></div></footer>;
}
