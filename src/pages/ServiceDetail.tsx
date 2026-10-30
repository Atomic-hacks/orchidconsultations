import { ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import { IconBadge } from '../components/IconBadge';
import { SectionBackground } from '../components/SectionBackground';
import { Container, Section, SectionHeader } from '../components/SectionLayout';
import { contact } from '../data/site';
import { serviceImages } from '../data/images';
import { services } from '../data/services';
import NotFound from './NotFound';

const delivery = [
  // TODO: Confirm this generic delivery framework against the audited Orchid process.
  { title: 'Consult', icon: 'Handshake', text: 'Discovery & Assessment' },
  { title: 'Assess', icon: 'SearchCheck', text: 'Strategy Development' },
  { title: 'Deliver', icon: 'ListChecks', text: 'Implementation' },
  { title: 'Support', icon: 'RefreshCw', text: 'Optimization' },
] as const;

export default function ServiceDetail() {
  const { slug } = useParams();
  const index = services.findIndex(service => service.slug === slug);
  if (index < 0) return <NotFound />;
  const service = services[index];
  const previous = services[(index + services.length - 1) % services.length];
  const next = services[(index + 1) % services.length];
  const related = [1, 2, 3].map(offset => services[(index + offset) % services.length]);
  const anchors = [['overview', 'Overview'], ['scope', 'Scope of work'], ...(service.benefits.length ? [['outcomes', 'Why choose this service']] : []), ['next-steps', 'Next steps']];
  return <>
    <SectionBackground image={serviceImages[service.slug]} className="service-detail-hero" overlay={.82}><Container><Link className="detail-breadcrumb" to="/services"><ArrowLeft size={16} />All services</Link><div className="service-detail-title"><IconBadge icon={service.icon} dark /><span>Service {service.number} / {services.length}</span><h1>{service.title}</h1><p>{service.intro}</p><Button to={`/contact?service=${service.slug}`} variant="light">Schedule a consultation</Button></div></Container></SectionBackground>
    <Container className="service-detail-layout-v2"><main className="service-detail-main">
      {/* Compliance review required before publishing investment terms or return figures. */}
      <Section id="overview" tight><SectionHeader index="01" label="Overview" icon={service.icon} title="Service overview" lead={service.intro} /><div className="quick-facts"><div><strong>{service.number}</strong><span>Service number</span></div><div><strong>{service.capabilities.length}</strong><span>Scope areas</span></div><div><strong>{service.benefits.length || '—'}</strong><span>Published benefits</span></div></div>{service.slug === 'investment' && <p className="compliance-note">Returns are not guaranteed. Terms apply.</p>}</Section>
      <Section id="scope" tight><SectionHeader index="02" label="Scope" icon="ListChecks" title="Scope of work" /><div className="feature-card-grid capability-grid">{service.capabilities.map(item => <FeatureCard key={item.text} icon={item.icon} title={item.text} text={service.title} />)}</div></Section>
      {service.benefits.length > 0 ? <Section id="outcomes" tight><SectionHeader index="03" label="Benefits" icon="BadgeCheck" title="Why choose this service" /><div className="feature-card-grid benefit-grid">{service.benefits.map(item => <FeatureCard key={item.text} icon={item.icon} title={item.text} text={service.title} />)}</div></Section> : null}
      <Section tight><SectionHeader index="04" label="Delivery" icon="Workflow" title="How the engagement moves" /><div className="delivery-strip">{delivery.map((item, itemIndex) => <div key={item.title}><span>0{itemIndex + 1}</span><IconBadge icon={item.icon} /><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></Section>
      <Section id="next-steps" tight><SectionHeader index="05" label="Next steps" icon="CalendarClock" title="Schedule a consultation" lead="Let's discuss your specific needs and create a customized solution that drives real results." /><div className="service-actions"><Button to={`/contact?service=${service.slug}`}>Schedule a consultation</Button><Button href="#scope" variant="outline">Learn more</Button></div></Section>
    </main><aside className="service-side-v2"><IconBadge icon={service.icon} /><span>Service {service.number}</span><h2>{service.title}</h2><nav aria-label="On this page">{anchors.map(([id, label]) => <a href={`#${id}`} key={id}>{label}<ArrowRight size={14} /></a>)}</nav><Button to={`/contact?service=${service.slug}`}>Schedule a consultation</Button><a href={`mailto:${contact.email}`}><Mail size={16} />{contact.email}</a><a href={`tel:${contact.tel}`}><Phone size={16} />{contact.phone}</a></aside></Container>
    <Section className="related-services"><Container><SectionHeader index="06" label="Related services" icon="Layers3" title="Continue exploring" /><div className="feature-card-grid">{related.map(item => <FeatureCard key={item.slug} icon={item.icon} number={item.number} title={item.title} text={item.intro} to={`/services/${item.slug}`} />)}</div></Container></Section>
    <Container className="service-pagination-v2"><Link to={`/services/${previous.slug}`}><span><ArrowLeft size={17} />Previous service</span><strong>{previous.title}</strong></Link><Link to={`/services/${next.slug}`}><span>Next service<ArrowRight size={17} /></span><strong>{next.title}</strong></Link></Container>
  </>;
}
