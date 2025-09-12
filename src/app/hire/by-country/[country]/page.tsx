
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, GanttChartSquare, Layers, TestTube2, Briefcase, ShieldCheck, Database, Server, Wallet, Plane } from 'lucide-react';

const countries: { [key: string]: { name: string } } = {
  'mexico': { name: 'Mexico' },
  'colombia': { name: 'Colombia' },
  'brazil': { name: 'Brazil' },
  'argentina': { name: 'Argentina' },
  'chile': { name: 'Chile' },
  'peru': { name: 'Peru' },
  'costa-rica': { name: 'Costa Rica' },
  'uruguay': { name: 'Uruguay' },
  'ecuador': { name: 'Ecuador' },
};

const roleCategories = [
  {
    name: 'Platform / Infra / SRE',
    slug: 'platform-infra-sre',
    description: "Cloud architecture, IaC, CI/CD, observability, cost control, and incident management.",
    icon: <Server className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Security & GRC',
    slug: 'security-grc',
    description: "Threat modeling, SDLC security, secrets management, identity, data protection, and compliance.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Backend / Services',
    slug: 'backend-services',
    description: "Domain modeling, API design (REST/gRPC/GraphQL), event-driven architecture, and performance.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Frontend / Web',
    slug: 'frontend-web',
    description: "Core Web Vitals, accessibility, modern SSR/CSR patterns, state management, and e2e testing.",
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Mobile / Cross-Platform',
    slug: 'mobile-cross-platform',
    description: "React Native, Flutter, Swift, and Kotlin expertise for building high-quality mobile applications.",
    icon: <Plane className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Data Engineering / Analytics',
    slug: 'data-engineering-analytics',
    description: "ELT, data modeling, governance, streaming, DataOps, and experimentation platforms.",
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    name: 'ML/AI & LLM Ops',
    slug: 'ml-ai-llm-ops',
    description: "Feature engineering, RAG, safety guardrails, and performance tuning for AI/ML systems.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
  },
  {
    name: 'Product, Design & Growth',
    slug: 'product-design-growth',
    description: "Product discovery, roadmapping, user research, experimentation, and funnel diagnostics.",
    icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
  },
  {
    name: 'QA / Quality Engineering',
    slug: 'qa-quality-engineering',
    description: "Shift-left testing, e2e automation, contract testing, performance/load analysis, and chaos engineering.",
    icon: <TestTube2 className="h-8 w-8 text-primary" />,
  },
  {
    name: 'IT / Enterprise Ops',
    slug: 'it-enterprise-ops',
    description: 'Endpoint Management (MDM), ITSM, and corporate security for enterprise-grade operations.',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    name: 'FinOps / BizTech',
    slug: 'finops-biztech',
    description: 'Cloud cost optimization, RevOps engineering, and financial data analysis.',
    icon: <Wallet className="h-8 w-8 text-primary" />,
  }
];

export default function CountryRolesPage({ params }: { params: { country: string } }) {
  const country = countries[params.country];

  if (!country) {
    return (
       <main className="container max-w-5xl py-12">
        <p>Country not found.</p>
       </main>
    )
  }

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <Link href="/hire/by-country" className="hover:text-foreground">By Country</Link> / <span>{country.name}</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire Elite Engineers in {country.name}</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Access top-tier, pre-vetted LATAM talent in {country.name} across every major technology domain. Our integrated platform provides the talent, security, and infrastructure you need to scale with confidence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {roleCategories.map((details) => (
          <Link href={`/hire/by-role/${details.slug}`} key={details.slug} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div className='flex justify-between items-start'>
                {details.icon}
              </div>
              <h2 className="mt-4 text-2xl font-bold transition-colors group-hover:text-primary">{details.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-grow">
                {details.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                  Explore {details.name} Roles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
          </Link>
        ))}
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to build your team in {country.name}?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss your specific needs. In a 15-minute call, we can map your roles to our evaluation process for talent in {country.name}.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(countries).map(country => ({ country }));
}
