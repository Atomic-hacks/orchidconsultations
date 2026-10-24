import type { Service } from './services';

export type MediaRatio = '16/9' | '4/5' | '1/1' | '21/9';
export interface ImageAsset { readonly src: string; readonly alt: string; readonly position?: string }

const supplied = {
  meeting: { src: '/images/team-collaboration.jpg', alt: 'A professional team collaborating around a conference table', position: 'center 45%' },
  workshop: { src: '/images/strategy-workshop.jpg', alt: 'A consulting team reviewing plans in a workshop', position: 'center 42%' },
  planning: { src: '/images/financial-planning.jpg', alt: 'Business advisers reviewing financial plans together', position: 'center 46%' },
  conference: { src: '/images/professional-team.jpg', alt: 'Business professionals attending a conference', position: 'center 38%' },
  advisory: { src: '/images/business-advisory.jpg', alt: 'A business team in an advisory session', position: 'center 48%' },
  training: { src: '/images/training-session.jpg', alt: 'A facilitator leading a professional training session', position: 'center 42%' },
} as const satisfies Record<string, ImageAsset>;

export const images = {
  // The hero is intentionally preserved per the approved design direction.
  hero: { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85', alt: 'Consulting team reviewing a business plan around a table', position: 'center 42%' },
  intro: supplied.workshop,
  cta: supplied.conference,
  contact: supplied.advisory,
  stats: supplied.meeting,
  testimonials: supplied.planning,
  about: [supplied.conference, supplied.meeting, supplied.workshop, supplied.advisory, supplied.training],
  process: [supplied.workshop, supplied.planning, supplied.advisory, supplied.training],
  pageHeaders: { services: supplied.meeting, about: supplied.conference, team: supplied.advisory, contact: supplied.planning, faq: supplied.training, calculator: supplied.workshop, privacy: supplied.conference },
} as const;

export const clientImages = {
  everydaySupermarket: { src: '/images/everyday-logo.png', alt: 'Everyday Supermarket logo' },
  zaffiroEnergy: { src: '/images/zaffiro-logo.png', alt: 'Zaffiro Energy logo' },
  ifeomaChukwuka: { src: '/ifeomalogo.webp', alt: 'Ifeoma Chukwuka company mark' },
} as const satisfies Record<string, ImageAsset>;

const serviceImageOrder = [supplied.meeting, supplied.workshop, supplied.planning, supplied.conference, supplied.advisory, supplied.training] as const;
export const serviceImages = Object.fromEntries([
  'access-to-market','entrepreneurship-training','facility-management','insurance-audit-tax','software-development','access-to-finance',
  'investment','loan','sourcing-of-goods-and-services','support','hr-training-and-management','project-management',
].map((slug, index) => [slug, serviceImageOrder[index % serviceImageOrder.length]])) as Record<Service['slug'], ImageAsset>;
