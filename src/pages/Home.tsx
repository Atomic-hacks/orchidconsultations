import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { Media } from '../components/Media';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { Process } from '../components/Process';
import { SectionBackground } from '../components/SectionBackground';
import { Container, Section, SectionHeader } from '../components/SectionLayout';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { contact, strengths } from '../data/site';
import { images } from '../data/images';
import { services, serviceGroups } from '../data/services';

const pillars = [
  { icon: 'Landmark', title: 'Financial Stability', text: 'To bridge the gap between investors, bankers, entrepreneurs, and opportunities.' },
  { icon: 'HandCoins', title: 'Access to Finance', text: 'We partner with commercial banks and PIND to provide entrepreneurs with finance.' },
  { icon: 'Handshake', title: 'Business Bridge', text: 'Connecting people and creating possibilities for sustainable business growth.' },
] as const;
const whyItems = [
  ...strengths,
  { title: 'Practical Training', text: 'Practical, industry-relevant curriculum with ongoing mentorship beyond training.', icon: 'GraduationCap' },
  { title: 'Implementation Support', text: 'Hands-on implementation support for business transitions and improvement.', icon: 'ListChecks' },
] as const;

export default function Home() {
  const [group, setGroup] = useState('All');
  const visible = group === 'All' ? services : services.filter(service => serviceGroups.find(item => item.title === group)?.slugs.includes(service.slug as never));
  return <><HeroSlideshow /><PartnerMarquee />
    <Section className="home-intro"><Container className="intro-grid-v2"><div className="intro-media"><Media {...images.intro} ratio="4/5" parallax /><div className="intro-stat"><strong>2019</strong><span>Established</span></div></div><div className="intro-copy-v2"><SectionHeader index="02" label="Orchid Consultations" icon="BriefcaseBusiness" title="Practical business support, built around the work." lead="Our goal is to equip founders with practical methodologies and strategies that help them scale sustainably." /><p>Orchiddigital Consulting Limited is a multi-dimensional corporate entity that partners with commercial banks and PIND to provide entrepreneurs with finance, training, and advisory services.</p><div className="pillar-grid">{pillars.map(item => <FeatureCard key={item.title} {...item} />)}</div><Button to="/about" variant="outline">About Orchid</Button></div></Container></Section>
    <Section id="services" className="services-home-v2"><Container><SectionHeader index="03" label="Services" icon="Layers3" title="Twelve disciplines. One operating partner." lead="Discover how we can help your business thrive with our comprehensive solutions." aside={<Button to="/services" variant="outline">All services</Button>} />
      <div className="service-filters" role="tablist" aria-label="Filter services"><button className={group === 'All' ? 'is-active' : ''} onClick={() => setGroup('All')}>All</button>{serviceGroups.map(item => <button key={item.title} className={group === item.title ? 'is-active' : ''} onClick={() => setGroup(item.title)}>{item.title}</button>)}</div>
      <div className="feature-card-grid service-card-grid">{visible.map(service => <FeatureCard key={service.slug} icon={service.icon} number={service.number} title={service.title} text={service.intro} to={`/services/${service.slug}`} />)}</div>
    </Container></Section>
    <Process /><Stats />
    <Section className="why-section-v2"><Container><SectionHeader index="06" label="Why Orchid" icon="BadgeCheck" title="Expertise made useful." lead="Comprehensive expertise and proven methodologies that set us apart in the consulting industry." /><div className="feature-card-grid why-grid-v2">{whyItems.map(item => <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} />)}</div></Container></Section>
    <Testimonials />
    <SectionBackground image={images.cta} className="home-cta-v2" overlay={.8}><Container><SectionHeader index="08" label="Start a conversation" icon="Mail" title="Ready to grow your business?" lead="Let Orchiddigital Consulting help you reach your next milestone." dark aside={<Button to="/contact" variant="light">Schedule a consultation</Button>} /><div className="cta-contact-row"><a href={`mailto:${contact.email}`}><Mail size={18} />{contact.email}</a><a href={`tel:${contact.tel}`}><Phone size={18} />{contact.phone}</a><a href={contact.maps} target="_blank" rel="noreferrer"><MapPin size={18} />Port Harcourt, Rivers State</a></div></Container></SectionBackground>
  </>;
}
