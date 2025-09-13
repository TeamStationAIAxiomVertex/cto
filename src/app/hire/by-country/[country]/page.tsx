
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, GanttChartSquare, Layers, TestTube2, Briefcase, ShieldCheck, Database, Server, Wallet, Plane, UserCheck, School, Languages } from 'lucide-react';
import type { Metadata } from 'next';

const countries: { [key: string]: { name: string; highlights: string[] } } = {
  'mexico': { 
    name: 'Mexico',
    highlights: [
        'Top engineering universities like Tec de Monterrey and UNAM produce thousands of skilled graduates annually.',
        'Strong cultural alignment with the U.S. and significant English proficiency in tech hubs.',
        'Central Time Zone overlap enables seamless real-time collaboration with U.S. teams.'
    ]
  },
  'colombia': { 
    name: 'Colombia',
    highlights: [
        'A rapidly growing tech ecosystem, especially in Medellín and Bogotá, with strong government support.',
        'High concentration of bilingual talent with excellent communication skills.',
        'A resilient and adaptable workforce known for its strong problem-solving abilities.'
    ]
  },
  'brazil': { 
    name: 'Brazil',
    highlights: [
        'The largest talent pool in Latin America, with deep expertise in complex domains like FinTech and Data Science.',
        'World-class universities and a vibrant startup scene foster continuous innovation.',
        'Engineers are known for their creativity and ability to handle large-scale, complex systems.'
    ]
   },
  'argentina': { 
    name: 'Argentina',
    highlights: [
        'Exceptionally high English proficiency and a strong educational system.',
        'A mature tech market with a deep pool of senior and lead-level engineers.',
        'Strong European cultural ties foster a diverse and globally-minded workforce.'
    ]
  },
  'chile': { 
    name: 'Chile',
    highlights: [
        'Considered one of the most stable and economically advanced countries in the region.',
        'A strong emphasis on engineering and data science in its top universities.',
        'A hub for enterprise-level B2B and financial services technology.'
    ]
   },
  'peru': { 
    name: 'Peru',
    highlights: [
        'A rising tech scene with a growing pool of skilled mobile and web developers.',
        'Strong work ethic and cultural affinity with North American business practices.',
        'A cost-effective location without compromising on technical quality.'
    ]
  },
  'costa-rica': { 
    name: 'Costa Rica',
    highlights: [
        'A major hub for U.S. tech companies, with a highly educated and bilingual workforce.',
        'Politically stable with significant investment in technology and education.',
        'Expertise in life sciences, medical devices, and enterprise software.'
    ]
  },
  'uruguay': { 
    name: 'Uruguay',
    highlights: [
        'One of the most digitally advanced countries in LATAM with excellent infrastructure.',
        'A strong focus on software exports and a highly skilled, specialized talent pool.',
        'A stable, business-friendly environment with a high quality of life.'
    ]
  },
  'ecuador': {
    name: 'Ecuador',
    highlights: [
        'An emerging talent market with a growing number of skilled engineers in Quito and Guayaquil.',
        'Strong desire to work with U.S. companies, leading to high engagement and retention.',
        'Offers a significant cost advantage while developing a strong tech ecosystem.'
    ]
  },
};

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  const countryName = countries[params.country]?.name || 'LATAM';
  return {
    title: `Hire Nearshore Developers in ${countryName} | TeamStation AI`,
    description: `Access elite, pre-vetted software engineers in ${countryName}. TeamStation AI provides a fully compliant platform for hiring nearshore talent in your time zone.`,
  };
}

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
            You're here because you need world-class talent without the world-class time zone headaches. Access top-tier, pre-vetted engineers in {country.name}, fully aligned with your working hours.
        </p>
      </header>

      <div className="my-16 rounded-lg border bg-card p-8">
        <h2 className="text-3xl font-bold text-center">Why {country.name} for Top Engineering Talent?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-muted-foreground">
            <div className='flex items-start gap-4'>
                <School className='h-8 w-8 text-primary shrink-0 mt-1'/>
                <div>
                    <h3 className='font-semibold text-foreground'>Strong Educational Foundation</h3>
                    <p className='text-sm'>{country.highlights[0]}</p>
                </div>
            </div>
            <div className='flex items-start gap-4'>
                <Languages className='h-8 w-8 text-primary shrink-0 mt-1'/>
                <div>
                    <h3 className='font-semibold text-foreground'>Language & Cultural Alignment</h3>
                    <p className='text-sm'>{country.highlights[1]}</p>
                </div>
            </div>
            <div className='flex items-start gap-4'>
                <UserCheck className='h-8 w-8 text-primary shrink-0 mt-1'/>
                <div>
                    <h3 className='font-semibold text-foreground'>Professional & Collaborative</h3>
                    <p className='text-sm'>{country.highlights[2]}</p>
                </div>
            </div>
        </div>
      </div>


      <h2 className="text-center text-3xl font-bold mb-8">Explore Available Roles in {country.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {roleCategories.map((details) => (
          <Link href={`/hire/by-role/${details.slug}`} key={details.slug} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div className='flex justify-between items-start'>
                {details.icon}
              </div>
              <h2 className="mt-4 text-xl font-bold transition-colors group-hover:text-primary">{details.name}</h2>
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
