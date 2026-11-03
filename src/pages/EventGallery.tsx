import { ArrowUpRight } from 'lucide-react';
import { Container, Section } from '../components/SectionLayout';
import { images } from '../data/images';

const gallery = [
  { image: images.about[4], title: 'Learning together', caption: 'Training and skills development' },
  { image: images.about[1], title: 'Ideas in conversation', caption: 'Team collaboration' },
  { image: images.about[2], title: 'Planning the next step', caption: 'Strategy workshops' },
  { image: images.about[3], title: 'A shared perspective', caption: 'Business advisory' },
  { image: images.about[0], title: 'Connecting with people', caption: 'Professional gatherings' },
  { image: images.testimonials, title: 'From insight to action', caption: 'Financial planning' },
];

export default function EventGallery() {
  return <Section className="event-gallery-page"><Container>
    <header className="gallery-heading"><h1>Event Gallery</h1><p>Learning, collaboration and new possibilities.</p></header>
    <p className="gallery-notice">A visual introduction to our work. These stock photographs are illustrative and do not depict Orchid events or clients.</p>
    <div className="event-gallery-grid">{gallery.map(({ image, title, caption }) => <figure key={title}>
      <a href={image.src} target="_blank" rel="noreferrer" aria-label={`View ${title.toLowerCase()} image (opens in a new tab)`}>
        <img src={image.src} alt={`${image.alt} — illustrative stock photograph`} loading="lazy" width="1200" height="900" style={{ objectPosition: 'position' in image ? image.position : 'center' }} />
        <figcaption><div><h2>{title}</h2><p>{caption}</p></div><ArrowUpRight size={20} aria-hidden="true" /></figcaption>
      </a>
    </figure>)}</div>
  </Container></Section>;
}
