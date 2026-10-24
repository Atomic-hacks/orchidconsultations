export interface Partner { readonly name: string; readonly logo?: string }

// TODO: Add approved logo files for all nine partners; text wordmarks render until supplied.
export const partners: readonly Partner[] = [
  { name: 'Rivers State Government' }, { name: 'Parallex Bank' }, { name: 'NIRSAL Microfinance Bank' },
  { name: 'South South Entrepreneurship Development Centre' }, { name: 'Irvin' }, { name: 'PND' },
  { name: 'WakaCare' }, { name: 'Sycamore' }, { name: 'Allianz' },
];
