import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { clients } from '../data/clients';
import { images } from '../data/images';
import { SectionBackground } from './SectionBackground';
import { Container, SectionHeader } from './SectionLayout';

export function Testimonials() {
  const [viewport, embla] = useEmblaCarousel({ align: 'start', loop: true });
  const [selected, setSelected] = useState(0);
  const select = useCallback(() => { if (embla) setSelected(embla.selectedScrollSnap()); }, [embla]);
  useEffect(() => { if (!embla) return; embla.on('select', select); return () => { embla.off('select', select); }; }, [embla, select]);
  return <SectionBackground image={images.testimonials} className="testimonials-v2" overlay={.84}><Container>
    <SectionHeader index="07" label="Client perspectives" icon="Quote" title="Trusted by businesses with work to do." lead="Client names and supplied imagery are shown below. Approved testimonial copy is pending." dark aside={<div className="carousel-controls"><button onClick={() => embla?.scrollPrev()} aria-label="Previous testimonial"><ArrowLeft size={19} /></button><span>{String(selected + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')}</span><button onClick={() => embla?.scrollNext()} aria-label="Next testimonial"><ArrowRight size={19} /></button></div>} />
    <div className="testimonial-viewport" ref={viewport}><div className="testimonial-track">{clients.map(client => <article className={`testimonial-card${client.kind === 'person' ? ' testimonial-person' : ''}`} key={client.name}>
      <Quote size={26} strokeWidth={1.4} aria-hidden="true" /><blockquote>“{client.quote}”</blockquote>
      <div className="testimonial-client">{client.image ? <img src={client.image} alt={client.imageAlt ?? ''} loading="lazy" /> : <span className="client-wordmark">{client.name}</span>}<strong>{client.name}</strong></div>
    </article>)}</div></div>
  </Container></SectionBackground>;
}
