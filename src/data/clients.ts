export interface Client { readonly name: string; readonly image?: string; readonly imageAlt?: string; readonly imageTone?: 'dark'; readonly imageScale?: number; readonly kind: 'organisation' | 'person' }

export const clients: readonly Client[] = [
  { name: 'Mayak Services', image: '/images/organisations/mayak.webp', imageAlt: 'Mayak Services Limited logo', kind: 'organisation' },
  { name: 'Bokolo Group', image: '/images/organisations/bokolo.png', imageAlt: 'Bokolo HSIC Group logo', kind: 'organisation' },
  { name: 'Zaffiro Energy', image: clientImages.zaffiroEnergy.src, imageAlt: clientImages.zaffiroEnergy.alt, imageTone: 'dark', imageScale: 2.4, kind: 'organisation' },
  { name: 'Everyday Supermarket', image: clientImages.everydaySupermarket.src, imageAlt: clientImages.everydaySupermarket.alt, kind: 'organisation' },
  { name: 'Livichun', image: '/images/organisations/livichun.webp', imageAlt: 'Livichun Supermarket logo', kind: 'organisation' },
  { name: 'Megastar', image: '/images/organisations/megastar.webp', imageAlt: 'Megastar logo', kind: 'organisation' },
  { name: 'Ifeoma Chukwuka', image: clientImages.ifeomaChukwuka.src, imageAlt: clientImages.ifeomaChukwuka.alt, kind: 'person' },
];
import { clientImages } from './images';

