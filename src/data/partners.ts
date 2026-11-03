export interface Partner { readonly name: string; readonly logo?: string; readonly logoTone?: 'dark'; readonly logoScale?: number }

// Verified logo sources are recorded in content-archive/organisation-logo-sources.md.
export const partners: readonly Partner[] = [
  { name: 'Rivers State Government', logo: '/images/organisations/rivers-state.png' },
  { name: 'Parallex Bank', logo: '/images/organisations/parallex.svg' },
  { name: 'NIRSAL Microfinance Bank', logo: '/images/organisations/nirsal-mfb.png', logoScale: 1.6 },
  { name: 'South South Entrepreneurship Development Centre' }, { name: 'Irvin' }, { name: 'PND' },
  { name: 'WakaCare' }, { name: 'Sycamore', logo: '/images/organisations/sycamore.png', logoTone: 'dark', logoScale: .85 }, { name: 'Allianz', logo: '/images/organisations/allianz.svg' },
];
