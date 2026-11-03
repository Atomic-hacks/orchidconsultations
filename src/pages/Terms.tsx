import { LegalDocument } from '../components/LegalDocument';
import content from '../data/policies/terms.md?raw';

export default function Terms() {
  return <LegalDocument title="Terms and Conditions" intro="Please read these terms carefully before using our services." content={content} />;
}
