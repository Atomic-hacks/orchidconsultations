import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { PageHeader } from '../components/PageHeader';
import { Process } from '../components/Process';
import { Container, Section, SectionHeader } from '../components/SectionLayout';
import { images } from '../data/images';
import { services, serviceGroups } from '../data/services';

export default function Services() {
  const [query, setQuery] = useState('');
  const filtered = services.filter(service => `${service.title} ${service.intro} ${service.capabilities.map(item => item.text).join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader eyebrow="01 / Services" title="Explore our service offerings." intro="Discover how we can help your business thrive with our comprehensive solutions." image={images.pageHeaders.services} />
    <Section className="services-catalog-v2"><Container><div className="catalog-toolbar"><p>{String(filtered.length).padStart(2, '0')} services</p><div className="search-field"><Search size={18} /><input aria-label="Search services" placeholder="Search services" value={query} onChange={event => setQuery(event.target.value)} />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={16} /></button>}</div></div>
      {serviceGroups.map((group, groupIndex) => { const items = filtered.filter(service => (group.slugs as readonly string[]).includes(service.slug)); if (!items.length) return null; return <section className="catalog-group-v2" key={group.title}><SectionHeader index={String(groupIndex + 1).padStart(2, '0')} label="Service group" icon="Layers3" title={group.title} /><div className="feature-card-grid service-card-grid">{items.map(service => <div key={service.slug}><FeatureCard icon={service.icon} number={service.number} title={service.title} text={service.intro} to={`/services/${service.slug}`} /></div>)}</div></section>; })}
      {!filtered.length && <div className="empty-state"><h2>No results found</h2><p>Try adjusting your search terms or browse different categories.</p><button className="text-button" onClick={() => setQuery('')}>Clear search</button></div>}
    </Container></Section><Process />
  </>;
}
