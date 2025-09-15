
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, GanttChartSquare, Layers, TestTube2, Briefcase, ShieldCheck, Database, Server, Wallet, Plane } from 'lucide-react';
import type { Metadata } from 'next';
import { InfoDropdown } from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'Hire Nearshore Engineers by Role | LATAM Staff Augmentation',
  description: 'Find elite, pre-vetted LATAM talent for your specific needs. Hire by role: Backend, Frontend, SRE, Security, Data, AI/ML, and more.',
  keywords: 'hire by role, nearshore engineers, latam staff augmentation, hire backend developers, hire frontend developers, hire sre, hire security engineer, hire data engineer, hire ai/ml engineer',
};

const roleCategories = [
  {
    name: 'Platform / Infra / SRE',
    slug: 'platform-infra-sre',
    priority: 'P0 Critical',
    priorityTooltip: 'Mission-critical roles that prevent existential risks like major downtime or security breaches.',
    pain: 'Are platform issues burning cash and credibility?',
    description: "Cloud architecture, IaC, CI/CD, observability, and incident management. The foundation for availability, velocity, and spend.",
    icon: <Server className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/rmj-technologies', label: 'See how we stabilized a monolith at scale.'}
  },
  {
    name: 'Security & GRC',
    slug: 'security-grc',
    priority: 'P0 Critical',
    priorityTooltip: 'Mission-critical roles that prevent existential risks like major downtime or security breaches.',
    pain: 'Is your next feature also your next vulnerability?',
    description: "Threat modeling, SDLC security, secrets management, identity, and compliance. Reduces existential risk.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/parsable', label: 'See how we solved an enterprise SSO crisis.'}
  },
   {
    name: 'Backend / Services',
    slug: 'backend-services',
    priority: 'P1 High',
    priorityTooltip: 'High-impact roles that directly drive core product value and revenue.',
    pain: 'Is your backend a bottleneck or a force multiplier?',
    description: "Domain modeling, API design (REST/gRPC/GraphQL), eventing, and performance. The engine of your product.",
    icon: <Code className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/atticus', label: 'See how we delivered a full-stack MVP in <3 months.'}
  },
  {
    name: 'Frontend / Web',
    slug: 'frontend-web',
    priority: 'P1 High',
    priorityTooltip: 'High-impact roles that directly drive core product value and revenue.',
    pain: 'Is a poor user experience costing you customers?',
    description: "Core Web Vitals, accessibility, modern SSR/CSR patterns, and state management. The core of UX quality.",
    icon: <Layers className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/global-ooh-advertising-platform', label: 'See how we built a high-stakes analytics UI.'}
  },
  {
    name: 'Data Engineering / Analytics',
    slug: 'data-engineering-analytics',
    priority: 'P1 High',
    priorityTooltip: 'High-impact roles that directly drive core product value and revenue.',
    pain: 'Is your business flying blind without trusted data?',
    description: "ELT, data modeling, governance, streaming, and DataOps. The engine for business intelligence.",
    icon: <Database className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/healthcare-revenue-platform', label: 'See how we built an audit-ready data system.'}
  },
   {
    name: 'ML/AI & LLM Ops',
    slug: 'ml-ai-llm-ops',
    priority: 'P1 High',
    priorityTooltip: 'High-impact roles that directly drive core product value and revenue.',
    pain: 'Are you struggling to get AI from notebook to production?',
    description: "Feature engineering, RAG, safety guardrails, and performance tuning for AI/ML systems.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/global-ooh-advertising-platform', label: 'See how we accelerated AI feature velocity.'}
  },
  {
    name: 'Product, Design & Growth',
    slug: 'product-design-growth',
    priority: 'P1 High',
    priorityTooltip: 'High-impact roles that directly drive core product value and revenue.',
    pain: 'Are you building features or building value?',
    description: "Product discovery, roadmapping, user research, and experimentation to drive business outcomes.",
    icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/parsable', label: 'See how our product and design talent helped ship features.'}
  },
  {
    name: 'QA / Quality Engineering',
    slug: 'qa-quality-engineering',
    priority: 'P1/P2 Risk-Based',
    priorityTooltip: 'Priority depends on the product risk profile and release velocity needs.',
    pain: 'Does shipping fast mean shipping bugs?',
    description: "Shift-left testing, e2e automation, contract testing, and chaos engineering. Your insurance policy for quality.",
    icon: <TestTube2 className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/global-entertainment-platform', label: 'See how our QA squad stabilized global releases.'}
  },
  {
    name: 'Mobile / Cross-Platform',
    slug: 'mobile-cross-platform',
    priority: 'P2 Medium',
    priorityTooltip: 'Important roles that support specific business lines or secondary platforms.',
    pain: 'Is your mobile experience falling behind?',
    description: "React Native, Flutter, Swift, and Kotlin expertise for building high-quality mobile applications.",
    icon: <Plane className="h-8 w-8 text-primary" />,
    proof: { href: '/case-studies/atticus', label: 'See how we shipped a production iOS app.'}
  },
  {
    name: 'IT / Enterprise Ops',
    slug: 'it-enterprise-ops',
    priority: 'P1 Regulated',
    priorityTooltip: 'High priority in regulated environments or for maintaining enterprise-wide compliance and security.',
    pain: 'Is your internal IT a productivity bottleneck?',
    description: 'Endpoint Management (MDM), ITSM, and corporate security for enterprise-grade operations.',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    proof: { href: '/trust', label: 'Learn about our secure operations.'}
  },
  {
    name: 'FinOps / BizTech',
    slug: 'finops-biztech',
    priority: 'P2 Medium',
    priorityTooltip: 'Important roles that support specific business lines or secondary platforms.',
    pain: 'Are runaway cloud costs eating your margin?',
    description: 'Cloud cost optimization, RevOps engineering, and financial data analysis to improve efficiency.',
    icon: <Wallet className="h-8 w-8 text-primary" />,
    proof: { href: '/playbook/latam-economics', label: 'See how we model Total Cost of Ownership.'}
  }
];


export default function HireByRolePage() {
  const getPriorityColor = (priority: string) => {
    if (priority.includes('P0')) return 'bg-destructive/20 text-destructive';
    if (priority.includes('P1')) return 'bg-primary/20 text-primary';
    return 'bg-secondary';
  };

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Role</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Find the Exact Expertise You Need</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You wouldn't hire a cardiologist to perform brain surgery. Stop searching for generic developers. We provide elite, pre-vetted LATAM talent matched to the specific, high-stakes competencies your business demands.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {roleCategories.map((details) => (
          <div key={details.slug} className="group relative flex flex-col rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 shadow-lg">
              <p className="text-sm font-semibold text-primary">{details.pain}</p>
              <div className='flex justify-between items-start mt-3'>
                <div className="flex items-center gap-3">
                    {details.icon}
                    <h2 className="text-xl font-bold text-foreground">{details.name}</h2>
                </div>
                <div className="relative z-20">
                    <InfoDropdown title={<span className={`rounded-full px-3 py-1 text-xs font-medium ${getPriorityColor(details.priority)}`}>{details.priority}</span>}>
                      <p className="text-sm text-muted-foreground">{details.priorityTooltip}</p>
                    </InfoDropdown>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-grow">
                {details.description}
              </p>
              <div className="mt-6 space-y-4">
                  <Link href={`/hire/by-role/${details.slug}`} className="z-10 relative flex items-center text-sm font-semibold text-primary stretched-link">
                      Explore Roles & Evaluation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                <Link href={details.proof.href} className="z-10 relative flex items-center text-xs font-semibold text-muted-foreground hover:text-primary">
                    {details.proof.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
          </div>
        ))}
      </div>
      
       <div className="my-16 text-center">
        <h2 className="text-3xl font-bold text-foreground">Industry-Specific Expertise</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          We understand that context matters. Our evaluation blueprints are weighted based on your industry's unique demands, whether it's the airtight security of FinTech, the regulatory rigor of Healthtech, or the high-performance demands of E-commerce.
        </p>
         <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Fintech & Payments</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Healthtech & Bio</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">E-commerce & Marketplaces</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">B2B SaaS</span>
             <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Media & Gaming</span>
        </div>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to build your team with confidence?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss your specific needs. In a 15-minute call, we can map your roles to our evaluation process and show you how we de-risk your hiring.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
