import { BrandLogo } from './BrandLogo';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { contact, navigation, socialLinks } from '../data/site';
import { TextLink } from './Button';

export function Footer() {
  const reduced = useReducedMotion();
  const lenis = useLenis();
  const top = () => {
    if (lenis && !reduced) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return <footer className="footer footer-simple"><div className="wrap">
    <div className="footer-identity">
      <Link className="wordmark footer-brand" to="/" aria-label="Orchid Consultations home"><BrandLogo /></Link>
      <p>Empowering businesses for global growth through technology, training, and enterprise transformation.</p>
    </div>
    <div className="footer-link-groups">
      <section aria-labelledby="footer-company"><h3 id="footer-company">Company</h3><nav aria-label="Company">{navigation.map(item => <TextLink key={item.to} to={item.to}>{item.label}</TextLink>)}<TextLink to="/contact">Contact</TextLink></nav></section>
      <section aria-labelledby="footer-policies"><h3 id="footer-policies">Legal &amp; Policies</h3><nav aria-label="Legal and policies"><TextLink to="/privacy">Privacy Policy</TextLink><TextLink to="/terms">Terms &amp; Conditions</TextLink><TextLink to="/whistleblowing">Whistleblowing Policy</TextLink><TextLink to="/feedback">Feedback &amp; Complaints</TextLink></nav></section>
      <section className="footer-contact-group" aria-labelledby="footer-contact"><h3 id="footer-contact">Contact info</h3><div className="footer-contact-details">
        <a href={`mailto:${contact.email}`}><Mail size={16} aria-hidden="true" /><span>{contact.email}</span></a>
        <a href={`tel:${contact.tel}`}><Phone size={16} aria-hidden="true" /><span>{contact.phone}</span></a>
        <p><MapPin size={16} aria-hidden="true" /><span>{contact.address}</span></p>
      </div></section>
    </div>
    <nav className="footer-socials" aria-label="Social media">{socialLinks.map(item => <a key={item.label} href={item.href} className={`footer-social-link social-${item.icon.split('/').pop()?.replace('.svg', '')}`}>
      <span className="footer-social-icon"><span style={{ maskImage: `url(${item.icon})`, WebkitMaskImage: `url(${item.icon})` }} aria-hidden="true" /></span><span>{item.label}</span>
    </a>)}</nav>
    <div className="footer-base">
      <div className="footer-license"><img src="/liscence.jpg" alt="Licensed — Money Lending and SCUML Certified" width="1080" height="1080" loading="lazy" /><span>Money Lending &amp; SCUML</span></div>
      <p>© {new Date().getFullYear()} Orchiddigital Consulting. All rights reserved.</p>
      <button onClick={top} className="back-top">Back to top <ArrowUp size={16} strokeWidth={1.5} /></button>
    </div>
  </div></footer>;
}
