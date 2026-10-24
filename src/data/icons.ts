export type IconName =
  | 'Activity' | 'BadgeCheck' | 'BarChart3' | 'BriefcaseBusiness' | 'Building2'
  | 'CalendarClock' | 'ChartNoAxesCombined' | 'Check' | 'CircleDollarSign'
  | 'ClipboardCheck' | 'Clock3' | 'CloudCog' | 'Code2' | 'Compass'
  | 'FileCheck2' | 'FileSearch' | 'Gauge' | 'Globe2' | 'GraduationCap'
  | 'HandCoins' | 'Handshake' | 'Landmark' | 'Layers3' | 'Lightbulb'
  | 'ListChecks' | 'Mail' | 'MapPin' | 'MonitorCog' | 'PackageSearch'
  | 'Phone' | 'Presentation' | 'Quote' | 'ReceiptText' | 'RefreshCw' | 'Route'
  | 'SearchCheck' | 'Settings2' | 'ShieldCheck' | 'Sparkles' | 'Target'
  | 'TrendingUp' | 'Users' | 'Workflow';

export interface IconFeature {
  readonly text: string;
  readonly icon: IconName;
}
