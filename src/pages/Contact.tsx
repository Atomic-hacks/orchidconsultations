import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { Media } from '../components/Media';
import { PageHeader } from '../components/PageHeader';
import { Container, Section, SectionHeader } from '../components/SectionLayout';
import { images } from '../data/images';
import { contact } from '../data/site';
import { services } from '../data/services';

export default function Contact() {
  const [params] = useSearchParams(); const requested = params.get('service') ?? ''; const initialService = services.some(service => service.slug === requested) ? requested : '';
  return <><PageHeader eyebrow="01 / Contact" title="Let's start a conversation." intro="Get in touch with our expert team and let's discuss how we can help you achieve your goals." image={images.pageHeaders.contact} />
    <Section className="contact-section-v2"><Container><SectionHeader index="02" label="Enquiries" icon="Mail" title="Tell us what you are working on." lead="Complete the form or use the contact details below." /><div className="contact-layout-v2"><div className="contact-form-panel"><ContactForm initialService={initialService} /></div><aside><Media {...images.contact} ratio="16/9" /><div className="contact-card-grid">
      <article><Mail size={20} /><h2>Email</h2><a href={`mailto:${contact.email}`}>{contact.email}</a></article>
      <article><Phone size={20} /><h2>Telephone</h2><a href={`tel:${contact.tel}`}>{contact.phone}</a></article>
      <article><MapPin size={20} /><h2>Office</h2><p>{contact.address}</p><a href={contact.maps} target="_blank" rel="noreferrer">Get directions</a></article>
      <article><Clock3 size={20} /><h2>Hours</h2><p>{contact.hours}</p><p>{contact.weekend}</p></article>
    </div></aside></div></Container></Section>
  </>;
}
