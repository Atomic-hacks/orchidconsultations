import type { ServiceSlug } from './services';

export interface ServiceMediaItem {
  readonly src: string;
  readonly alt: string;
}

const serviceImage = (file: string, alt: string): ServiceMediaItem => ({ src: `/images/services/${file}`, alt });

export const serviceMedia: Record<ServiceSlug, readonly ServiceMediaItem[]> = {
  'access-to-market': [serviceImage('PHOTO-2026-11-17-19-11-36.jpg', 'Import and international market-access financing graphic')],
  'software-development': [serviceImage('PHOTO-2026-11-17-19-11-35 3.jpg', 'Connected business workflow and document requirements diagram')],
  'access-to-finance': [
    serviceImage('PHOTO-2026-11-17-19-11-36 2.jpg', 'Access to finance service highlights'),
    serviceImage('PHOTO-2026-11-17-19-11-37 2.jpg', 'Purchase order financing information'),
    serviceImage('PHOTO-2026-11-17-19-11-37.jpg', 'Business financing document requirements'),
  ],
  investment: [serviceImage('PHOTO-2026-11-17-19-11-36 4.jpg', 'Orchiddigital investment rates and service overview')],
  'sourcing-of-goods-and-services': [serviceImage('PHOTO-2026-11-17-19-11-36 3.jpg', 'Business linkage consultation and product introduction process')],
  support: [serviceImage('PHOTO-2026-11-17-19-11-35.jpg', 'Business strategy meeting around a key-shaped table')],
  'project-management': [serviceImage('PHOTO-2026-11-17-19-11-35 2.jpg', 'Four-step consultation, payment, assessment and client profiling workflow')],
};
