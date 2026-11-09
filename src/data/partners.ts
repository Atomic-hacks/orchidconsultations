export interface Partner { readonly name: string; readonly logo?: string; readonly logoTone?: 'dark'; readonly logoScale?: number }

// Verified logo sources are recorded in content-archive/organisation-logo-sources.md.
export const partners: readonly Partner[] = [
  { name: 'PIND', logo: '/images/organisations/pnd.svg' },
  { name: 'Allianz', logo: '/images/organisations/allianz.svg' },
  { name: 'South South Entrepreneurship Development Centre', logo: '/images/organisations/south-south.webp' },
  { name: 'Parallex Bank', logo: '/images/organisations/parallex.svg' },
];
