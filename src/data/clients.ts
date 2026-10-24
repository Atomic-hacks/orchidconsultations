export interface Client { readonly name: string; readonly image?: string; readonly imageAlt?: string; readonly kind: 'organisation' | 'person'; readonly quote: string }

export const clients: readonly Client[] = [
  // TODO: replace with real client quote.
  { name: 'Mayak Services', kind: 'organisation', quote: 'Professional support from the first conversation through delivery.' },
  // TODO: replace with real client quote.
  { name: 'Bokolo Group', kind: 'organisation', quote: 'A clear, practical approach to our business requirements.' },
  // TODO: replace with real client quote.
  { name: 'Zaffiro Energy', image: clientImages.zaffiroEnergy.src, imageAlt: clientImages.zaffiroEnergy.alt, kind: 'organisation', quote: 'Responsive guidance and a well-managed consulting process.' },
  // TODO: replace with real client quote.
  { name: 'Everyday Supermarket', image: clientImages.everydaySupermarket.src, imageAlt: clientImages.everydaySupermarket.alt, kind: 'organisation', quote: 'A dependable team with a practical understanding of business operations.' },
  // TODO: replace with real client quote.
  { name: 'Livichun', kind: 'organisation', quote: 'Thoughtful advice, communicated clearly and delivered professionally.' },
  // TODO: replace with real client quote.
  { name: 'Megastar', kind: 'organisation', quote: 'Structured support that helped our team move forward with confidence.' },
  // TODO: replace with real client quote. TODO: replace supplied company logo with an approved portrait of Ifeoma Chukwuka.
  { name: 'Ifeoma Chukwuka', image: clientImages.ifeomaChukwuka.src, imageAlt: clientImages.ifeomaChukwuka.alt, kind: 'person', quote: 'An attentive consulting partner throughout the engagement.' },
];
import { clientImages } from './images';

