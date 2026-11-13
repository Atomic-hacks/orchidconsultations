import { Button } from '../components/Button';
import { Media } from '../components/Media';
import { PageHeader } from '../components/PageHeader';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { Container, Section, SectionHeader } from '../components/SectionLayout';
import { images } from '../data/images';

const strategicPhases = [
  {
    number: '01',
    title: 'Evaluate',
    summary: 'Understand the need, establish trust and manage risk before action.',
    principles: [
      { letter: 'S', title: 'Solutions', text: 'Practical responses to real business challenges.' },
      { letter: 'T', title: 'Trust', text: 'Transparent, reliable and responsible guidance.' },
      { letter: 'R', title: 'Risk', text: 'Careful evaluation that protects client interests.' },
    ],
  },
  {
    number: '02',
    title: 'Enable',
    summary: 'Connect clients to resources and strengthen their ability to move forward.',
    principles: [
      { letter: 'A', title: 'Access', text: 'Connections to finance, resources and support.' },
      { letter: 'T', title: 'Transformation', text: 'Stronger operations and financial capacity.' },
      { letter: 'E', title: 'Empowerment', text: 'Knowledge and support for better decisions.' },
    ],
  },
  {
    number: '03',
    title: 'Grow',
    summary: 'Turn sound decisions into sustainable business and financial progress.',
    principles: [
      { letter: 'G', title: 'Growth', text: 'Expanded capacity and stronger operations.' },
      { letter: 'I', title: 'Investment', text: 'Productive use of capital toward long-term goals.' },
      { letter: 'C', title: 'Consulting', text: 'Advice tailored to each client’s needs and goals.' },
    ],
  },
] as const;

export default function About() {
  return <>
    <PageHeader
      eyebrow="01 / About Orchid"
      title="Financial insight. Practical support. Long-term growth."
      intro="Orchiddigital helps businesses access finance, strengthen operations and pursue sustainable growth through integrated financial and consulting services."
      image={images.pageHeaders.about}
    />

    <section className="about-trust-v2" aria-labelledby="about-trust-title">
      <Container className="about-trust-grid">
        <div className="about-trust-copy">
          <h2 id="about-trust-title">Licensed. Verified. Accountable.</h2>
          <p>Orchiddigital operates in full regulatory compliance as a licensed money lending company and SCUML-certified business.</p>
        </div>
        <figure className="about-trust-license">
          <img src="/liscence.jpg" alt="Licensed Money Lender and SCUML Certified" width="1080" height="1080" />
          <figcaption>Money Lending &amp; SCUML</figcaption>
        </figure>
        <div className="about-trust-actions" aria-label="Choose how to work with Orchid">
          <Button to="/contact?service=access-to-finance">Discuss funding needs</Button>
          <Button to="/services" variant="outline">Explore consulting services</Button>
        </div>
      </Container>
    </section>

    <Section className="about-story-v2">
      <Container className="about-story-grid">
        <div>
          <SectionHeader index="02" label="Who we are" icon="BriefcaseBusiness" title="Built to connect capital, businesses and opportunity." />
          <div className="about-story-copy">
            <p>Orchiddigital Consulting Limited provides financial, wealth management and consulting solutions to a diverse clientele, including corporate organisations, government institutions, financial institutions, affluent individuals, high-net-worth clients and institutional investors.</p>
            <p>As a growing participant in Nigeria's financial and consulting industry, we are strategically positioned to create sustainable value by combining practical expertise with the proven market experience, reputation and networks of our partners in Nigeria and around the world.</p>
            <p>Our work is professional, transparent and centred on each client's goals—helping individuals and institutions build, grow, manage and preserve wealth over the long term.</p>
          </div>
        </div>
        <div className="about-story-image">
          <Media {...images.about[1]} ratio="4/5" parallax />
          <span><strong>2019</strong>Established</span>
        </div>
      </Container>
    </Section>

    <Section className="about-direction-v2">
      <Container>
        <SectionHeader index="03" label="Mission &amp; vision" icon="Target" title="A clear purpose. A long-term view." lead="Our direction is grounded in responsible access to finance, practical business support and enduring client relationships." />
        <div className="about-direction-grid">
          <article>
            <span>Mission</span>
            <h3>Tailored finance for structured growth.</h3>
            <p>To provide tailored financial and consulting services to structured companies that meet the eligibility criteria for funding, helping them access capital and pursue sustainable growth.</p>
          </article>
          <article>
            <span>Vision</span>
            <h3>A trusted bridge to opportunity.</h3>
            <p>To be a foremost financial and consulting services provider—connecting businesses, people and organisations to finance, markets and resources through innovative, transparent and client-focused solutions.</p>
          </article>
        </div>
      </Container>
    </Section>

    <Section className="about-strategic-v2">
      <Container>
        <SectionHeader index="04" label="How we work" icon="Compass" title="We are S.T.R.A.T.E.G.I.C." lead="Nine commitments, organised into three practical phases, guide how we create long-term value." dark />
        <div className="strategic-phases">
          {strategicPhases.map((phase) => <article key={phase.title} className="strategic-phase">
            <div className="strategic-phase-heading">
              <span>{phase.number}</span>
              <h3>{phase.title}</h3>
              <p>{phase.summary}</p>
            </div>
            <ul>
              {phase.principles.map((principle) => <li key={`${principle.letter}-${principle.title}`}>
                <span className="strategic-letter">{principle.letter}</span>
                <div><h4>{principle.title}</h4><p>{principle.text}</p></div>
              </li>)}
            </ul>
          </article>)}
        </div>
      </Container>
    </Section>

    <PartnerMarquee directory />
  </>;
}
