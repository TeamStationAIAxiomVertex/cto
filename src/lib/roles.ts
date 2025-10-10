
import {
  BrainCircuit,
  Code,
  GanttChartSquare,
  Layers,
  TestTube2,
  ShieldCheck,
  Database,
  Server,
  Wallet,
  Plane,
  Briefcase,
} from "lucide-react";
import type { Icon } from "lucide-react";

export interface RoleCategoryInfo {
    name: string;
    slug: string;
    priority: string;
    priorityTooltip: string;
    pain: string;
    description: string;
    icon: Icon;
    proof: {
        href: string;
        label: string;
    };
}


export const roleCategories: RoleCategoryInfo[] = [
  {
    name: "Platform / Infra / SRE",
    slug: "platform-infra-sre",
    priority: "P0 Critical",
    priorityTooltip:
      "Mission-critical roles that prevent existential risks like major downtime or security breaches.",
    pain: "Are platform issues burning cash and credibility?",
    description:
      "Cloud architecture, IaC, CI/CD, observability, and incident management. The foundation for availability, velocity, and spend.",
    icon: Server,
    proof: {
      href: "/case-studies/rmj-technologies",
      label: "See how we stabilized a monolith at scale.",
    },
  },
  {
    name: "Security & GRC",
    slug: "security-grc",
    priority: "P0 Critical",
    priorityTooltip:
      "Mission-critical roles that prevent existential risks like major downtime or security breaches.",
    pain: "Is your next feature also your next vulnerability?",
    description:
      "Threat modeling, SDLC security, secrets management, identity, and compliance. Reduces existential risk.",
    icon: ShieldCheck,
    proof: {
      href: "/case-studies/parsable",
      label: "See how we solved an enterprise SSO crisis.",
    },
  },
  {
    name: "Backend / Services",
    slug: "backend-services",
    priority: "P1 High",
    priorityTooltip:
      "High-impact roles that directly drive core product value and revenue.",
    pain: "Is your backend a bottleneck or a force multiplier?",
    description:
      "Domain modeling, API design (REST/gRPC/GraphQL), eventing, and performance. The engine of your product.",
    icon: Code,
    proof: {
      href: "/case-studies/atticus",
      label: "See how we delivered a full-stack MVP in <3 months.",
    },
  },
  {
    name: "Frontend / Web",
    slug: "frontend-web",
    priority: "P1 High",
    priorityTooltip:
      "High-impact roles that directly drive core product value and revenue.",
    pain: "Is a poor user experience costing you customers?",
    description:
      "Core Web Vitals, accessibility, modern SSR/CSR patterns, and state management. The core of UX quality.",
    icon: Layers,
    proof: {
      href: "/case-studies/global-ooh-advertising-platform",
      label: "See how we built a high-stakes analytics UI.",
    },
  },
  {
    name: "Data Engineering / Analytics",
    slug: "data-engineering-analytics",
    priority: "P1 High",
    priorityTooltip:
      "High-impact roles that directly drive core product value and revenue.",
    pain: "Is your business flying blind without trusted data?",
    description:
      "ELT, data modeling, governance, streaming, and DataOps. The engine for business intelligence.",
    icon: Database,
    proof: {
      href: "/case-studies/healthcare-revenue-platform",
      label: "See how we built an audit-ready data system.",
    },
  },
  {
    name: "ML/AI & LLM Ops",
    slug: "ml-ai-llm-ops",
    priority: "P1 High",
    priorityTooltip:
      "High-impact roles that directly drive core product value and revenue.",
    pain: "Are you struggling to get AI from notebook to production?",
    description:
      "Feature engineering, RAG, safety guardrails, and performance tuning for AI/ML systems.",
    icon: BrainCircuit,
    proof: {
      href: "/case-studies/global-ooh-advertising-platform",
      label: "See how we accelerated AI feature velocity.",
    },
  },
  {
    name: "Product, Design & Growth",
    slug: "product-design-growth",
    priority: "P1 High",
    priorityTooltip:
      "High-impact roles that directly drive core product value and revenue.",
    pain: "Are you building features or building value?",
    description:
      "Product discovery, roadmapping, user research, and experimentation to drive business outcomes.",
    icon: GanttChartSquare,
    proof: {
      href: "/case-studies/parsable",
      label: "See how our product and design talent helped ship features.",
    },
  },
  {
    name: "QA / Quality Engineering",
    slug: "qa-quality-engineering",
    priority: "P1/P2 Risk-Based",
    priorityTooltip:
      "Priority depends on the product risk profile and release velocity needs.",
    pain: "Does 'shipping fast' mean shipping bugs?",
    description:
      "Shift-left testing, e2e automation, contract testing, and chaos engineering. Your insurance policy for quality.",
    icon: TestTube2,
    proof: {
      href: "/case-studies/global-entertainment-platform",
      label: "See how our QA squad stabilized global releases.",
    },
  },
  {
    name: "Mobile / Cross-Platform",
    slug: "mobile-cross-platform",
    priority: "P2 Medium",
    priorityTooltip:
      "Important roles that support specific business lines or secondary platforms.",
    pain: "Is your mobile experience falling behind?",
    description:
      "React Native, Flutter, Swift, and Kotlin expertise for building high-quality mobile applications.",
    icon: Plane,
    proof: {
      href: "/case-studies/atticus",
      label: "See how we shipped a production iOS app.",
    },
  },
  {
    name: "IT / Enterprise Ops",
    slug: "it-enterprise-ops",
    priority: "P1 Regulated",
    priorityTooltip:
      "High priority in regulated environments or for maintaining enterprise-wide compliance and security.",
    pain: "Is your internal IT a productivity bottleneck?",
    description:
      "Endpoint Management (MDM), ITSM, and corporate security for enterprise-grade operations.",
    icon: Briefcase,
    proof: { href: "/trust", label: "Learn about our secure operations." },
  },
  {
    name: "FinOps / BizTech",
    slug: "finops-biztech",
    priority: "P2 Medium",
    priorityTooltip:
      "Important roles that support specific business lines or secondary platforms.",
    pain: "Are runaway cloud costs eating into your margins?",
    description:
      "Cloud cost optimization, RevOps engineering, and financial data analysis to improve efficiency.",
    icon: Wallet,
    proof: {
      href: "/playbook/latam-economics",
      label: "See how we model Total Cost of Ownership.",
    },
  },
];

export function getAllRoleSlugs(): string[] {
  return roleCategories.map((category) => category.slug);
}
