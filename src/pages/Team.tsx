import { team } from '../data/team';
import { staff } from '../data/staff';
import { Heading, Reveal } from '../components/Reveal';
import { Accordion } from '../components/Accordion';
import { PageHeader } from '../components/PageHeader';
import { images } from '../data/images';
export default function Team() {
  return <><PageHeader eyebrow="01 / Our team" title="Meet our executive team." intro="Our experienced leadership team brings together decades of expertise in digital transformation, business strategy, and innovative solutions." image={images.pageHeaders.team} />
    <section className="wrap team-grid">{team.map((person, i) => <Reveal key={person.name} className="team-person"><span className="index-label">{String(i + 1).padStart(2, '0')} / Team</span><h2>{person.fullName}</h2><p className="team-role">{person.role}</p><Accordion title="Biography"><p>{person.bio}</p></Accordion>{i === 0 && <a className="profile-read-more" href="/documents/david-okoh-profile.pdf" target="_blank" rel="noopener noreferrer">Read more <span aria-hidden="true">↗</span><span className="sr-only"> about Mr. David (PDF, opens in a new tab)</span></a>}</Reveal>)}</section>
    <section className="section wrap"><Heading>Other Staffs</Heading><p className="muted measure mt-6">Our dedicated support team that ensures smooth operations and excellent service delivery.</p><div className="staff-list">{staff.map(person => <div key={person.name}><h3>{person.fullName}</h3><span>{person.role}</span><p>{person.bio}</p></div>)}</div></section></>;
}
