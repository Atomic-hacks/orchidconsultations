import type { IconFeature, IconName } from './icons';

/** Service catalogue, updated to reflect the current offerings. */
interface RawService {
  readonly number: string;
  readonly slug: string;
  readonly title: string;
  readonly intro: string;
  readonly capabilities: readonly string[];
  readonly benefits: readonly string[];
  readonly source: string;
}

const serviceCopy = [
  {
    "number": "01",
    "slug": "access-to-market",
    "title": "Access to Market",
    "intro": "Practical and strategic strategies to enter and grow in high-value international markets through our direct buyer connections.",
    "capabilities": [
      "International entry strategy development",
      "Direct connections to bulk buyers globally",
      "Cross-border sales and transaction support",
      "Strategic transition to foreign markets",
      "Regulatory and trade documentation guidance",
      "Market insights and competitor analysis"
    ],
    "benefits": [
      "Grow revenue faster in high-value markets",
      "Access 50+ international markets easily",
      "Significantly reduced market entry time",
      "End-to-end regulatory compliance guidance"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/access-to-market"
  },
  {
    "number": "05",
    "slug": "software-development",
    "title": "Enterprise Management Software Development",
    "intro": "Build software that fits the way your business actually works—streamlining operations, improving visibility, and scaling with confidence.",
    "capabilities": [
      "Custom software tailored to your processes",
      "Legacy system modernization and upgrades",
      "Secure cloud migration and integration",
      "API development for tool connectivity",
      "User-friendly interfaces for productivity",
      "Ongoing technical system maintenance"
    ],
    "benefits": [
      "Noticeable team productivity improvements",
      "Purpose-built, non-off-the-shelf tools",
      "Seamless workflow system integration",
      "Reliable, ongoing technical support"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/software-development"
  },
  {
    "number": "06",
    "slug": "access-to-finance",
    "title": "Access to Finance",
    "intro": "Secure the capital you need to scale through our expertise in loan facilitation, investment sourcing, and financial planning.",
    "capabilities": [
      "Business loan and credit facilitation",
      "Investment capital sourcing and preparation",
      "Financial planning and ROI projections",
      "Grant and funding opportunity identification",
      "Banking relationship management",
      "Financial due diligence and compliance"
    ],
    "benefits": [
      "High success rate in funding approvals",
      "Access to diverse capital and grant sources",
      "Professional investment readiness"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/access-to-finance"
  },
  {
    "number": "07",
    "slug": "investment",
    "title": "Orchiddigital Investment Service",
    "intro": "Grow your savings with attractive interest rates. Lock your savings for 365 days and receive competitive returns on your investment.",
    "capabilities": [
      "5% monthly ROI for investments below ₦50M",
      "3.3% monthly ROI for investments ₦50M and above",
      "Fixed 365-day investment period",
      "Monthly interest payments plus capital return",
      "Secure and transparent investment platform",
      "Instant interest calculation and tracking"
    ],
    "benefits": [
      "Up to 60% total annual return",
      "Flexible investment amounts",
      "Monthly ROI payments",
      "Guaranteed capital return"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/investment"
  },
  {
    "number": "08",
    "slug": "loan",
    "title": "Orchiddigital Loan Service",
    "intro": "Access funds when you need them most with our fast and easy loan service. Get the financial support your business needs to thrive.",
    "capabilities": [
      "6-month loan duration",
      "Quick approval process",
      "Competitive interest rates",
      "Flexible repayment terms",
      "Business-focused loan products",
      "Minimal documentation required"
    ],
    "benefits": [
      "Fast approval within 24-48 hours",
      "Transparent fee structure",
      "6-month flexible repayment",
      "Dedicated loan support team"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/loan"
  },
  {
    "number": "09",
    "slug": "sourcing-of-goods-and-services",
    "title": "Business Linkage",
    "intro": "We connect your business with suppliers and partners, helping you build relationships and source the goods and services you need.",
    "capabilities": [
      "Reliable supplier identification and vetting",
      "Negotiation for better pricing and terms",
      "Quality control and inspection services",
      "Logistics and supply chain coordination",
      "Bulk purchasing strategies for cost savings",
      "Vendor relationship management"
    ],
    "benefits": [
      "Significant savings on procurement costs",
      "Access to a verified network of suppliers",
      "Guaranteed quality and delivery timelines",
      "Reduced administrative burden for your team"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/sourcing-of-goods-and-services"
  },
  {
    "number": "10",
    "slug": "support",
    "title": "Business Advisory and Support",
    "intro": "We provide expert guidance and hands-on support to help you solve business challenges, improve performance, and find the clearest path to growth.",
    "capabilities": [
      "General business consulting and problem solving",
      "Strategic advice on scaling and growth",
      "Operational troubleshooting and optimization",
      "Strategic partnership identification",
      "Performance improvement strategies",
      "Expert guidance for business transitions"
    ],
    "benefits": [
      "Practical, actionable real-world advice",
      "Experienced multi-industry consultants",
      "Hands-on implementation support",
      "Measurable business improvements"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/support"
  },
  {
    "number": "11",
    "slug": "hr-training-and-management",
    "title": "Human Resource Training and Management",
    "intro": "We help you build and manage high-performing teams through professional training, recruitment, and structured HR systems.",
    "capabilities": [
      "Staff recruitment and talent placement",
      "Professional skill development training",
      "HR policy and system development",
      "Performance management systems",
      "Team building and culture development",
      "Employee engagement and retention"
    ],
    "benefits": [
      "Improved team productivity and morale",
      "Compliance with latest labor regulations",
      "Lower staff turnover and better hiring",
      "Structured, professional work environment"
    ],
    "source": "https://www.orchiddigitalconsulting.com/services/hr-training-and-management"
  },
  {
    "number": "12",
    "slug": "project-management",
    "title": "Project Management",
    "intro": "We ensure your projects stay on track, on budget, and deliver the results you expect through professional planning and execution.",
    "capabilities": [
      "Comprehensive project planning and scope",
      "Timeline and milestone management",
      "Budget planning and cost control",
      "Risk identification and mitigation",
      "Resource allocation and coordination",
      "Progress tracking and quality assurance"
    ],
    // TODO: Audited source supplied no "Why choose" list for Project Management.
    "benefits": [],
    "source": "https://www.orchiddigitalconsulting.com/services/project-management"
  }
] as const satisfies readonly RawService[];

export type ServiceSlug = typeof serviceCopy[number]['slug'];
export interface Service {
  readonly number: string;
  readonly slug: ServiceSlug;
  readonly title: string;
  readonly intro: string;
  readonly icon: IconName;
  readonly capabilities: readonly IconFeature[];
  readonly benefits: readonly IconFeature[];
  readonly source: string;
}

const serviceIcons: Record<ServiceSlug, IconName> = {
  'access-to-market': 'Globe2',
  'software-development': 'MonitorCog',
  'access-to-finance': 'Landmark',
  investment: 'TrendingUp',
  loan: 'HandCoins',
  'sourcing-of-goods-and-services': 'PackageSearch',
  support: 'Lightbulb',
  'hr-training-and-management': 'Users',
  'project-management': 'ListChecks',
};

const capabilityIcons: readonly IconName[] = ['Compass', 'Handshake', 'Workflow', 'Route', 'FileCheck2', 'BarChart3'];
export const services: readonly Service[] = serviceCopy.map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, '0'),
  icon: serviceIcons[service.slug],
  capabilities: service.capabilities.map((text, index) => ({ text, icon: capabilityIcons[index % capabilityIcons.length] })),
  benefits: service.benefits.map(text => ({ text, icon: 'Check' as const })),
}));

// Compliance review required: the audited investment ROI figures and “Guaranteed capital return” claim must be approved before publication.

export const serviceGroups = [
  { title: 'Market and Growth', slugs: ['access-to-market', 'support'] },
  { title: 'Finance', slugs: ['access-to-finance', 'investment', 'loan'] },
  { title: 'Operations', slugs: ['sourcing-of-goods-and-services', 'project-management'] },
  { title: 'People and Training', slugs: ['hr-training-and-management'] },
  { title: 'Technology', slugs: ['software-development'] },
] as const;
