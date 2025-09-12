
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, GanttChartSquare, Layers, TestTube2, Briefcase, ShieldCheck, Database, Server, Wallet, Code2, Plane } from 'lucide-react';

const roleCategories = [
  {
    name: 'Platform / Infra / SRE',
    slug: 'platform-infra-sre',
    priority: 'P0 Critical',
    description: "Cloud architecture, IaC, CI/CD, observability, cost control, and incident management. The foundation for availability, velocity, and spend.",
    icon: <Server className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Security & GRC',
    slug: 'security-grc',
    priority: 'P0 Critical',
    description: "Threat modeling, SDLC security, secrets management, identity, data protection, and compliance operations. Reduces existential risk.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Backend / Services',
    slug: 'backend-services',
    priority: 'P1 High',
    description: "Domain modeling, API design (REST/gRPC/GraphQL), event-driven architecture, performance, caching, and robust testing.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Frontend / Web',
    slug: 'frontend-web',
    priority: 'P1 High',
    description: "Core Web Vitals, accessibility, modern SSR/CSR patterns, state management, and end-to-end testing. The core of UX quality.",
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Mobile / Cross-Platform',
    slug: 'mobile-cross-platform',
    priority: 'P2 Medium',
    description: "React Native, Flutter, Swift, and Kotlin expertise for building high-quality mobile applications.",
    icon: <Plane className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Data Engineering / Analytics',
    slug: 'data-engineering-analytics',
    priority: 'P1 High',
    description: "ELT, data modeling, governance, streaming, DataOps, and experimentation platforms. The engine for business intelligence.",
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    name: 'ML/AI & LLM Ops',
    slug: 'ml-ai-llm-ops',
    priority: 'P1 High',
    description: "Feature engineering, offline/online evaluation, RAG, safety guardrails, and performance tuning for AI/ML systems.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Product, Design & Growth',
    slug: 'product-design-growth',
    priority: 'P1 High',
    description: "Product discovery, roadmapping, user research, experimentation, and funnel diagnostics to drive business outcomes.",
    icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
  },
  {
    name: 'QA / Quality Engineering',
    slug: 'qa-quality-engineering',
    priority: 'P1/P2 Risk-Based',
    description: "Shift-left testing, e2e automation, contract testing, performance/load analysis, and chaos engineering. Your insurance policy for quality.",
    icon: <TestTube2 className="h-8 w-8 text-primary" />,
  },
  {
    name: 'IT / Enterprise Ops',
    slug: 'it-enterprise-ops',
    priority: 'P1 Regulated',
    description: 'Endpoint Management (MDM), ITSM, and corporate security for enterprise-grade operations.',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    name: 'FinOps / BizTech',
    slug: 'finops-biztech',
    priority: 'P2 Medium',
    description: 'Cloud cost optimization, RevOps engineering, and financial data analysis to improve efficiency and revenue operations.',
    icon: <Wallet className="h-8 w-8 text-primary" />,
  }
];


export default function HireByRolePage() {
  const getPriorityColor = (priority: string) => {
    if (priority.includes('P0')) return 'bg-red-500/20 text-red-400';
    if (priority.includes('P1')) return 'bg-amber-500/20 text-amber-400';
    return 'bg-blue-500/20 text-blue-400';
  }

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
          <Link href={`/hire/by-role/${details.slug}`} key={details.slug} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div className='flex justify-between items-start'>
                {details.icon}
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${getPriorityColor(details.priority)}`}>{details.priority}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold transition-colors group-hover:text-primary">{details.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-grow">
                {details.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                  Explore Roles & Evaluation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
          </Link>
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

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to build your team with confidence?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss your specific needs. In a 15-minute call, we can map your roles to our evaluation process and show you how we de-risk your hiring.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}

    