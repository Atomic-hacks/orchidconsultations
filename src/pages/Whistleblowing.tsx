import { LegalDocument } from '../components/LegalDocument';
import content from '../data/policies/whistleblowing.md?raw';

export default function Whistleblowing() {
  return <LegalDocument title="Whistleblowing Policy" intro="Reporting concerns with confidence and protection." content={content} />;
}
