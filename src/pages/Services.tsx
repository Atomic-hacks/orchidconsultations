import { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { Search, X } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { PageHeader } from '../components/PageHeader';
import { Process } from '../components/Process';
import { Container, Section, SectionHeader } from '../components/SectionLayout';
import { images, serviceImages } from '../data/images';
import { services, serviceGroups, type Service } from '../data/services';

export default function Services() {
  const [query, setQuery] = useState(''); const [preview, setPreview] = useState<Service | null>(null); const reduced = useReducedMotion();
  const pointerX = useMotionValue(0), pointerY = useMotionValue(0); const x = useSpring(pointerX, { stiffness: 230, damping: 28 }), y = useSpring(pointerY, { stiffness: 230, damping: 28 });
  const filtered = services.filter(service => `${service.title} ${service.intro} ${service.capabilities.map(item => item.text).join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  return <><PageHeader eyebrow="01 / Services" title="Explore our service offerings." intro="Discover how we can help your business thrive with our comprehensive solutions." image={images.pageHeaders.services} />
    <Section className="services-catalog-v2" onPointerMove={event => { pointerX.set(event.clientX + 24); pointerY.set(event.clientY + 24); }}><Container><div className="catalog-toolbar"><p>{String(filtered.length).padStart(2, '0')} services</p><div className="search-field"><Search size={18} /><input aria-label="Search services" placeholder="Search services" value={query} onChange={event => setQuery(event.target.value)} />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={16} /></button>}</div></div>
      {serviceGroups.map((group, groupIndex) => { const items = filtered.filter(service => (group.slugs as readonly string[]).includes(service.slug)); if (!items.length) return null; return <section className="catalog-group-v2" key={group.title}><SectionHeader index={String(groupIndex + 1).padStart(2, '0')} label="Service group" icon="Layers3" title={group.title} /><motion.div className="feature-card-grid service-card-grid" layout={!reduced}>{items.map(service => <motion.div layout key={service.slug} onPointerEnter={() => setPreview(service)} onPointerLeave={() => setPreview(null)}><FeatureCard icon={service.icon} number={service.number} title={service.title} text={service.intro} to={`/services/${service.slug}`} /></motion.div>)}</motion.div></section>; })}
      {!filtered.length && <div className="empty-state"><h2>No results found</h2><p>Try adjusting your search terms or browse different categories.</p><button className="text-button" onClick={() => setQuery('')}>Clear search</button></div>}
      <AnimatePresence>{preview && !reduced && <motion.div className="service-preview-v2" style={{ x, y }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }}><img src={serviceImages[preview.slug].src} alt="" /><span>{preview.title}</span></motion.div>}</AnimatePresence>
    </Container></Section><Process />
  </>;
}
