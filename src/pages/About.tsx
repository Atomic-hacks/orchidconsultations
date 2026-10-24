import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import { Media } from '../components/Media';
import { PageHeader } from '../components/PageHeader';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { Container, Section, SectionHeader } from '../components/SectionLayout';
import { images } from '../data/images';

const values = [
  { icon: 'Landmark', title: 'Financial Stability', text: 'To bridge the gap between investors, bankers, entrepreneurs, and opportunities.' },
  { icon: 'HandCoins', title: 'Access to Finance', text: 'Providing entrepreneurs with finance, training, and advisory services.' },
  { icon: 'Handshake', title: 'Business Bridge', text: 'Connecting people and creating possibilities for sustainable growth.' },
] as const;

export default function About() {
  return <><PageHeader eyebrow="01 / About Orchid" title="Your partner in business growth and financial success." intro="A finance-based consulting firm established in 2019. We provide comprehensive business services across production, manufacturing, logistics, agriculture and digital sectors." image={images.pageHeaders.about} />
    <Section className="about-story-v2"><Container className="about-story-grid"><div><SectionHeader index="02" label="Our story" icon="BriefcaseBusiness" title="Connecting people. Creating possibilities." /><p>Our primary aim is to ensure that entrepreneurs are guided and equipped with the right knowledge, feasible business methodologies and strategies that will give them an edge in achieving their set goals.</p><Button to="/services" variant="outline">Explore our services</Button></div><div className="about-story-image"><Media {...images.about[1]} ratio="4/5" parallax /><span><strong>2019</strong>Established</span></div></Container></Section>
    <Section className="about-values-v2"><Container><SectionHeader index="03" label="Mission" icon="Target" title="What we strive for." lead="Our three core mission goals drive how we support entrepreneurs and businesses." /><div className="feature-card-grid">{values.map(value => <FeatureCard key={value.title} {...value} />)}</div></Container></Section>
    <Section className="about-places-v2"><Container><SectionHeader index="04" label="People and place" icon="Users" title="A working environment built for collaboration." lead="Our team brings together finance, business development, operations, technology and project delivery experience." aside={<Button to="/team" variant="outline">Meet our team</Button>} /><div className="about-image-grid"><Media {...images.about[2]} ratio="16/9" /><Media {...images.about[3]} ratio="4/5" /><Media {...images.about[4]} ratio="4/5" /></div></Container></Section>
    <PartnerMarquee directory />
  </>;
}
