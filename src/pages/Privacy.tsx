import { LegalDocument } from '../components/LegalDocument';
import content from '../data/policies/privacy.md?raw';

export default function Privacy() {
  return <LegalDocument title="Privacy Policy" intro="How we collect, use, and protect your information." content={content} />;
}
