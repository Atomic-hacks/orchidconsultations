import { PageHeader } from '../components/PageHeader';
import { images } from '../data/images';
import { contact } from '../data/site';

const sections = [
  { id: 'scope', title: '1. About this policy', paragraphs: [
    'Orchiddigital Consulting Limited (“Orchid”, “we” or “us”) is responsible for personal information you provide through this website and in enquiries to our team. This policy explains the information involved, how it is used, and how to raise a privacy concern. It applies to website visitors, prospective clients, clients and other people who contact us.',
  ] },
  { id: 'collection', title: '2. Information you provide', paragraphs: [
    'Our enquiry form asks for your name, email address, service of interest, subject and message. Company name and phone number are optional. We also receive information you choose to share by email, telephone or WhatsApp. Please share only what is needed for your enquiry; do not send passwords, payment card details or unnecessary sensitive information.',
    'The investment calculator works in your browser. Entering an amount does not submit an investment application or send that amount to our team.',
  ] },
  { id: 'purpose', title: '3. How and why information is used', paragraphs: [
    'We use enquiry information to respond to your questions, discuss requested services, arrange consultations and manage our relationship with you. Relevant records may also be used to resolve complaints, maintain security and meet applicable legal obligations.',
    'Depending on the activity, processing is based on steps you request before a contract, performance of a contract, a legal obligation, your consent where required, or a legitimate interest such as responding to enquiries and protecting our services, balanced against your rights. Where we rely on consent, you may withdraw it by contacting us; withdrawal does not affect earlier lawful processing.',
  ] },
  { id: 'submission', title: '4. Sending an enquiry', paragraphs: [
    'Where direct form delivery is enabled, submitting the form sends your enquiry to our configured contact service. Otherwise, the form prepares a draft in your email application. A prepared draft is not sent to Orchid until you choose to send it. Your email provider handles that message under its own privacy terms.',
  ] },
  { id: 'sharing', title: '5. Confidentiality and sharing', paragraphs: [
    'Personal information is to be accessed only by people who need it to handle your enquiry, deliver an agreed service or meet a legal duty. Service providers supporting website hosting, communications or enquiry delivery may process relevant information for those purposes. We do not sell your personal information.',
    'Information may be disclosed where required by law, a court or a competent authority, or where necessary to establish or defend a legal claim. Where a provider processes information outside Nigeria, applicable data protection requirements and safeguards must be considered before a transfer.',
  ] },
  { id: 'storage', title: '6. Browser storage and third-party services', paragraphs: [
    'The website uses session storage to remember that its introductory animation has been shown. This preference is not an advertising identifier. The current site does not include advertising trackers or analytics scripts.',
    'Some imagery is loaded from Unsplash, which receives technical request information such as your IP address when an image is requested. Links to WhatsApp, social media, maps and other external websites take you to services with their own privacy practices. Review those services’ notices when you use them.',
  ] },
  { id: 'retention', title: '7. Retention and protection', paragraphs: [
    'Enquiry and client records should be kept only for as long as needed for the purpose for which they were collected, applicable legal requirements and the resolution of disputes. You can contact us to ask about the retention of your specific records or request deletion, subject to any lawful requirement to retain them.',
    'We are committed to appropriate organisational and technical safeguards and confidential handling of personal information. No online transmission or storage method can guarantee complete security. Please tell us promptly if you suspect unauthorised access or misuse involving information you have shared with Orchid.',
  ] },
  { id: 'rights', title: '8. Your privacy rights', paragraphs: [
    'Subject to applicable law and its exceptions, you may request access to your personal information, correction of inaccurate details, deletion, restriction of processing or a portable copy. You may also object to processing and withdraw consent where consent is the basis relied on. Contact us using the details below; we may need proportionate information to verify your identity before acting on a request.',
    'You may raise a complaint with the Nigeria Data Protection Commission if you believe your personal information has been handled unlawfully.',
  ] },
  { id: 'concerns', title: '9. Reporting a privacy concern', paragraphs: [
    'Please describe the information or activity involved and how you would like us to contact you. Do not include unnecessary personal information about other people. Privacy concerns should be handled confidentially on a need-to-know basis. You may raise a concern without providing your name, although this can limit our ability to investigate or reply. Confidentiality may be subject to a legal duty to disclose information.',
    'Orchid supports good-faith reporting of privacy concerns without retaliation. This privacy policy does not create a separate anonymous hotline; the contact channels below are our published routes for enquiries and concerns.',
  ] },
  { id: 'changes', title: '10. Changes to this policy', paragraphs: [
    'We may update this policy when our website, services or privacy practices change. The date above identifies the latest version.',
  ] },
];

export default function Privacy() {
  return <><PageHeader eyebrow="Privacy" title="Privacy Policy" intro="Last updated: 3 November 2026" image={images.pageHeaders.privacy} />
    <div className="wrap privacy-layout">
      <nav className="privacy-contents" aria-label="Privacy policy contents"><h2>In this policy</h2>{sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}<a href="#privacy-contact">11. Contact us</a></nav>
      <article className="privacy-body">{sections.map(section => <section key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.id === 'rights' && <p><a href="https://ndpc.gov.ng/" target="_blank" rel="noreferrer">Visit the Nigeria Data Protection Commission</a></p>}</section>)}
        <section id="privacy-contact"><h2>11. Contact us</h2><p>For privacy questions, requests or concerns, contact Orchiddigital Consulting Limited:</p><address><a href={`mailto:${contact.email}?subject=Privacy%20enquiry`}>{contact.email}</a><a href={`tel:${contact.tel}`}>{contact.phone}</a><p>{contact.address}</p></address></section>
      </article>
    </div>
  </>;
}
