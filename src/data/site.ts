export const navigation = [
  { label: 'About', to: '/about' }, { label: 'Services', to: '/services' },
  { label: 'Investment Calculator', to: '/investment-calculator' },
  { label: 'Team', to: '/team' }, { label: 'FAQ', to: '/faq' },
  { label: 'Event Gallery', to: '/event-gallery' },
] as const;
export const contact = {
  whatsapp: 'https://wa.me/message/F4SVLZIKATXML1',
  email: 'info@orchiddigitalconsulting.com', phone: '09077251862', tel: '+2349077251862',
  address: 'No. 314, Old Refinery Road, Opposite Genesis Fast Food, Elelenwo, Port Harcourt, Rivers State.',
  hours: 'Monday - Friday: 08:00 AM – 06:00 PM', weekend: 'Saturday & Sunday: Closed',
  maps: 'https://maps.google.com/?q=No.+314,+Old+Refinery+Road,+Opposite+Genesis+Fast+Food,+Elelenwo,+Port+Harcourt,+Rivers+State',
} as const;
export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/orchiddigitaledc/', icon: '/icons/social/instagram.svg' },
  { label: 'LinkedIn', href: '', icon: '' },
  { label: 'Facebook', href: 'https://web.facebook.com/Orchiddigitaledc-635826767038728', icon: '/icons/social/facebook.svg' },
  { label: 'WhatsApp', href: contact.whatsapp, icon: '/icons/social/whatsapp.svg' },
].filter(link => link.href);
export const strengths = [
  { title: 'Expert Team', text: 'Our experienced professionals bring deep industry knowledge and proven expertise to every project.', icon: 'Users' },
  { title: 'Proven Results', text: 'We deliver measurable outcomes that drive business growth and operational efficiency.', icon: 'BadgeCheck' },
  { title: 'Global Reach', text: 'We help businesses expand internationally with our global network and market expertise.', icon: 'Globe2' },
  { title: 'Cost Effective', text: 'Our solutions maximize ROI while minimizing costs through efficient processes and smart technology.', icon: 'ChartNoAxesCombined' },
] as const;
