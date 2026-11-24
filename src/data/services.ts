import type { IconFeature, IconName } from "./icons";

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
    number: "01",
    slug: "access-to-market",
    title: "Access to Market",
    intro:
      "We help businesses expand into local and international markets through strategic market-entry solutions and connections with potential buyers, distributors and commercial partners. Our expertise helps businesses identify new opportunities, navigate market requirements and achieve sustainable market growth.",
    capabilities: [
      "International entry strategy development",
      "Direct connections to bulk buyers globally",
      "Cross-border sales and transaction support",
      "Strategic transition to foreign markets",
      "Regulatory and trade documentation guidance",
      "Market insights and competitor analysis",
    ],
    benefits: [
      "Grow revenue faster in high-value markets",
      "Connect with qualified buyers and market opportunities",
      "Significantly reduced market entry time",
      "End-to-end regulatory compliance guidance",
    ],
    source: "https://www.orchiddigitalconsulting.com/services/access-to-market",
  },
  {
    number: "05",
    slug: "software-development",
    title: "Enterprise Management Software Development",
    intro:
      "We develop customised enterprise management software that streamlines operations, automates processes and improves organisational efficiency. Our technology solutions are tailored to your business needs, enhancing productivity, operational visibility and scalability.",
    capabilities: [
      "Custom software tailored to your processes",
      "Legacy system modernization and upgrades",
      "Secure cloud migration and integration",
      "API development for tool connectivity",
      "User-friendly interfaces for productivity",
      "Ongoing technical system maintenance",
    ],
    benefits: [
      "Noticeable team productivity improvements",
      "Purpose-built, non-off-the-shelf tools",
      "Seamless workflow system integration",
      "Reliable, ongoing technical support",
    ],
    source:
      "https://www.orchiddigitalconsulting.com/services/software-development",
  },
  {
    number: "06",
    slug: "access-to-finance",
    title: "Access to Finance",
    intro:
      "We connect businesses, entrepreneurs and individuals with suitable funding institutions, private investors and financial partners through loan facilitation, investment sourcing and financial advisory. We help clients navigate financing opportunities and secure the capital needed to execute projects, strengthen operations and achieve growth.",
    capabilities: [
      "Business loan and credit facilitation",
      "Investment capital sourcing and preparation",
      "Financial planning and ROI projections",
      "Grant and funding opportunity identification",
      "Banking relationship management",
      "Financial due diligence and compliance",
    ],
    benefits: [
      "High success rate in funding approvals",
      "Access to diverse capital and grant sources",
      "Professional investment readiness",
    ],
    source:
      "https://www.orchiddigitalconsulting.com/services/access-to-finance",
  },
  {
    number: "07",
    slug: "investment",
    title: "Orchiddigital Investment Service",
    intro:
      "We provide structured investment opportunities with defined tenures and competitive returns to help individuals and organisations grow their financial resources. Through transparent investment terms and proper documentation, we create opportunities for investors to work towards their financial goals.",
    capabilities: [
      "3% monthly ROI for investments from ₦5M to ₦50M",
      "2.5% monthly ROI for investments above ₦50M",
      "Fixed 365-day investment period",
      "Monthly interest payments plus capital return",
      "Secure and transparent investment platform",
      "Instant interest calculation and tracking",
    ],
    benefits: [
      "Competitive monthly returns",
      "Minimum investment of ₦5M",
      "Monthly ROI payments",
      "Clear investment tracking",
    ],
    source: "https://www.orchiddigitalconsulting.com/services/investment",
  },
  {
    number: "09",
    slug: "sourcing-of-goods-and-services",
    title: "Business Linkage",
    intro:
      "We connect businesses with reliable suppliers, service providers, manufacturers and strategic commercial partners to meet their operational and commercial needs. Through business introductions, procurement facilitation and strategic networking, we create valuable relationships that drive efficiency and growth.",
    capabilities: [
      "Reliable supplier identification and vetting",
      "Negotiation for better pricing and terms",
      "Quality control and inspection services",
      "Logistics and supply chain coordination",
      "Bulk purchasing strategies for cost savings",
      "Vendor relationship management",
    ],
    benefits: [
      "Significant savings on procurement costs",
      "Access to a verified network of suppliers",
      "Guaranteed quality and delivery timelines",
      "Reduced administrative burden for your team",
    ],
    source:
      "https://www.orchiddigitalconsulting.com/services/sourcing-of-goods-and-services",
  },
  {
    number: "10",
    slug: "support",
    title: "Business Advisory and Support",
    intro:
      "We provide strategic business guidance and practical solutions to help organisations overcome challenges, improve performance and achieve their objectives. From business planning and operational improvement to strategic development, we help businesses make informed decisions and build sustainable growth.",
    capabilities: [
      "General business consulting and problem solving",
      "Strategic advice on scaling and growth",
      "Operational troubleshooting and optimization",
      "Strategic partnership identification",
      "Performance improvement strategies",
      "Expert guidance for business transitions",
    ],
    benefits: [
      "Practical, actionable real-world advice",
      "Experienced multi-industry consultants",
      "Hands-on implementation support",
      "Measurable business improvements",
    ],
    source: "https://www.orchiddigitalconsulting.com/services/support",
  },
  {
    number: "12",
    slug: "project-management",
    title: "Project Management",
    intro:
      "We provide professional project management services covering planning, budgeting, resource allocation, coordination and execution to ensure successful project delivery. Through effective monitoring and performance management, we keep projects aligned with agreed timelines, budgets and quality standards.",
    capabilities: [
      "Comprehensive project planning and scope",
      "Timeline and milestone management",
      "Budget planning and cost control",
      "Risk identification and mitigation",
      "Resource allocation and coordination",
      "Progress tracking and quality assurance",
    ],
    benefits: [],
    source:
      "https://www.orchiddigitalconsulting.com/services/project-management",
  },
] as const satisfies readonly RawService[];

export type ServiceSlug = (typeof serviceCopy)[number]["slug"];
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
  "access-to-market": "Globe2",
  "software-development": "MonitorCog",
  "access-to-finance": "Landmark",
  investment: "TrendingUp",
  "sourcing-of-goods-and-services": "PackageSearch",
  support: "Lightbulb",
  "project-management": "ListChecks",
};

const capabilityIcons: readonly IconName[] = [
  "Compass",
  "Handshake",
  "Workflow",
  "Route",
  "FileCheck2",
  "BarChart3",
];
export const services: readonly Service[] = serviceCopy.map(
  (service, index) => ({
    ...service,
    number: String(index + 1).padStart(2, "0"),
    icon: serviceIcons[service.slug],
    capabilities: service.capabilities.map((text, index) => ({
      text,
      icon: capabilityIcons[index % capabilityIcons.length],
    })),
    benefits: service.benefits.map((text) => ({
      text,
      icon: "Check" as const,
    })),
  }),
);

export const serviceGroups = [
  { title: "Market and Growth", slugs: ["access-to-market", "support"] },
  { title: "Finance", slugs: ["access-to-finance", "investment"] },
  {
    title: "Operations",
    slugs: ["sourcing-of-goods-and-services", "project-management"],
  },
  { title: "Technology", slugs: ["software-development"] },
] as const;
