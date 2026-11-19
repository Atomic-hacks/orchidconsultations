import { BrandLogo } from './BrandLogo';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact, socialLinks } from '../data/site';

export function Footer() {
  return <footer className="footer footer-simple"><div className="wrap">
    <div className="footer-primary">
      <section className="footer-profile" aria-label="About Orchiddigital Consulting">
        <Link className="wordmark footer-brand" to="/" aria-label="Orchiddigital Consulting home"><BrandLogo /></Link>
        <p>A fast-growing integrated financial and consulting services company delivering practical solutions that help businesses build, grow, and create lasting value.</p>
      </section>
      <section aria-labelledby="footer-quick-links"><h2 id="footer-quick-links">Quick Links</h2><nav className="footer-nav-list" aria-label="Quick links">
        <Link to="/about">About Us</Link><Link to="/services">Our Services</Link><Link to="/investment-calculator">Investment Calculator</Link><Link to="/team">Our Team</Link><Link to="/event-gallery">Event Gallery</Link><Link to="/contact">Contact Us</Link>
      </nav></section>
      <section aria-labelledby="footer-policies"><h2 id="footer-policies">Legal &amp; Policies</h2><nav className="footer-nav-list" aria-label="Legal and policies">
        <Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms &amp; Conditions</Link><Link to="/whistleblowing">Whistleblowing Policy</Link><Link to="/feedback">Feedback &amp; Complaints</Link>
      </nav></section>
      <section className="footer-contact-group" aria-labelledby="footer-contact"><h2 id="footer-contact">Contact Us</h2><div className="footer-contact-details">
        <a href={contact.maps} target="_blank" rel="noreferrer"><MapPin size={24} aria-hidden="true" /><span>{contact.address}</span></a>
        <a href={`tel:${contact.tel}`}><Phone size={24} aria-hidden="true" /><span>{contact.phone}</span></a>
        <a href={`mailto:${contact.email}`}><Mail size={24} aria-hidden="true" /><span>{contact.email}</span></a>
      </div>
        <nav className="footer-socials" aria-label="Social media">{socialLinks.map(item => <a key={item.label} href={item.href} aria-label={item.label} title={item.label} className={`footer-social-link social-${item.icon.split('/').pop()?.replace('.svg', '')}`}>
          <span className="footer-social-icon"><span style={{ maskImage: `url(${item.icon})`, WebkitMaskImage: `url(${item.icon})` }} aria-hidden="true" /></span>
        </a>)}</nav>
      </section>
    </div>
    <div className="footer-regulatory">
      <p>Orchiddigital Consulting Limited is licensed by the Securities and Exchange Commission (SEC), Nigeria, as a Fund and Portfolio Manager. It also operates as a licensed money lending company and is SCUML-certified.</p>
    </div>
    <p className="footer-copyright">© {new Date().getFullYear()} Orchiddigital Consulting Limited. All rights reserved.</p>
  </div></footer>;
}
