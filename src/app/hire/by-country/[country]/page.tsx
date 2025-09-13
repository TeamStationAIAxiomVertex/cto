
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, GanttChartSquare, Layers, TestTube2, Briefcase, ShieldCheck, Database, Server, Wallet, Plane, UserCheck, School, Languages, Zap, Users, Clock } from 'lucide-react';
import type { Metadata } from 'next';

const countries: { [key: string]: { name: string; flag: React.ReactNode; psp: { pain: string; solution: string; proof: string; icon: React.ReactNode }[] } } = {
  'mexico': { 
    name: 'Mexico',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#006847" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h2v2H1z"/><path fill="#ce1126" d="M2 0h1v2H2z"/></svg>,
    psp: [
      { pain: "Need perfect time-zone sync?", solution: "Engineers work in your time zone (CST/PST), enabling real-time pairing that eliminates communication delays.", proof: "4-8 hour daily overlap", icon: <Clock className="h-8 w-8 text-primary" /> },
      { pain: "Struggling to find a deep talent pool?", solution: "Access a massive, mature tech market fueled by top universities like Tec de Monterrey, providing a stream of enterprise-level talent.", proof: "LATAM's largest nearshore market", icon: <Users className="h-8 w-8 text-primary" /> },
      { pain: "Facing communication barriers?", solution: "Benefit from strong US cultural alignment and a large pool of bilingual engineers with excellent communication skills.", proof: "High English proficiency in tech hubs", icon: <Languages className="h-8 w-8 text-primary" /> },
    ]
  },
  'colombia': { 
    name: 'Colombia',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#fcd116" d="M0 0h3v2H0z"/><path fill="#003893" d="M0 1h3v.5H0z"/><path fill="#ce1126" d="M0 1.5h3v.5H0z"/></svg>,
    psp: [
       { pain: "Looking for a rapidly growing hub?", solution: "Tap into the vibrant ecosystems of Bogotá and Medellín, known for their adaptable, resilient, and fast-growing workforce.", proof: "Strong government support for tech", icon: <Zap className="h-8 w-8 text-primary" /> },
       { pain: "Need strong soft skills?", solution: "Hire from a talent pool known for its high concentration of bilingual professionals with excellent communication and problem-solving abilities.", proof: "Top 5 in LATAM English proficiency", icon: <Languages className="h-8 w-8 text-primary" /> },
       { pain: "Is your team adaptable enough?", solution: "Leverage a workforce renowned for its resilience and ability to thrive in fast-paced, agile environments.", proof: "Proven problem-solving mindset", icon: <BrainCircuit className="h-8 w-8 text-primary" /> },
    ]
  },
  'brazil': { 
    name: 'Brazil',
    flag: <svg width="24" height="24" viewBox="0 0 10 7"><path fill="#009b3a" d="M0 0h10v7H0z"/><path fill="#fedf00" d="M5 1L1 3.5 5 6l4-2.5z"/><circle cx="5" cy="3.5" r="1.75" fill="#002776"/></svg>,
    psp: [
        { pain: "Need talent for complex systems?", solution: "Access the largest talent pool in LATAM, with world-class expertise in FinTech, Data Science, and large-scale backend systems.", proof: "LATAM's #1 market by volume", icon: <Users className="h-8 w-8 text-primary" /> },
        { pain: "Struggling with innovation?", solution: "Tap into a vibrant startup scene and world-class universities that foster a culture of creativity and continuous innovation.", proof: "Hub for FinTech & Data Science", icon: <BrainCircuit className="h-8 w-8 text-primary" /> },
        { pain: "Are your systems built to scale?", solution: "Hire engineers known for their creativity and proven ability to design, build, and handle highly complex, scalable systems.", proof: "Deep expertise in large-scale architecture", icon: <Layers className="h-8 w-8 text-primary" /> },
    ]
   },
  'argentina': { 
    name: 'Argentina',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#74acdf" d="M0 0h3v2H0z"/><path fill="#fff" d="M0 .67h3v.66H0z"/></svg>,
    psp: [
        { pain: "Frustrated with language barriers?", solution: "Benefit from the highest English proficiency in LATAM, ensuring clear, nuanced communication and reducing misunderstandings.", proof: "Highest English proficiency in LATAM", icon: <Languages className="h-8 w-8 text-primary" /> },
        { pain: "Need more than just junior talent?", solution: "Tap into a mature tech market with a deep pool of senior and lead-level engineers ready to take ownership and mentor others.", proof: "Deep pool of senior-level talent", icon: <Users className="h-8 w-8 text-primary" /> },
        { pain: "Is your team globally aware?", solution: "Engage with a workforce shaped by strong European cultural ties, fostering a diverse, open, and globally-minded perspective.", proof: "Strong educational system", icon: <School className="h-8 w-8 text-primary" /> },
    ]
  },
  'chile': { 
    name: 'Chile',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#fff" d="M0 0h3v2H0z"/><path fill="#d52b1e" d="M0 1h3v1H0z"/><path fill="#0039a6" d="M0 0h1v1H0z"/><path fill="#fff" d="M.5.3l.1.3h.3L.6.8l.1.3-.2-.2-.3.2.1-.3L.3.6h.3z"/></svg>,
    psp: [
        { pain: "Worried about instability?", solution: "Hire from one of the most stable and economically advanced countries in the region, ensuring a reliable and predictable business environment.", proof: "Region's most stable economy", icon: <ShieldCheck className="h-8 w-8 text-primary" /> },
        { pain: "Need enterprise-grade skills?", solution: "Access a talent pool with a strong emphasis on engineering and data science, making it a hub for enterprise B2B and financial technology.", proof: "Leader in B2B/financial tech", icon: <Briefcase className="h-8 w-8 text-primary" /> },
        { pain: "Is your data strategy robust?", solution: "Leverage talent from top universities with a strong focus on data science and rigorous engineering principles.", proof: "Strong focus on data science", icon: <Database className="h-8 w-8 text-primary" /> },
    ]
   },
  'peru': { 
    name: 'Peru',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#d91023" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/></svg>,
    psp: [
        { pain: "Budget stretched thin?", solution: "Tap into a rising tech scene that offers a significant cost advantage without compromising on the quality of mobile and web development talent.", proof: "Excellent cost/quality ratio", icon: <Wallet className="h-8 w-8 text-primary" /> },
        { pain: "Need a stronger work ethic?", solution: "Engage with engineers known for their dedication and strong work ethic, combined with a high cultural affinity for North American business practices.", proof: "High cultural affinity", icon: <UserCheck className="h-8 w-8 text-primary" /> },
        { pain: "Looking for emerging talent?", solution: "Access a growing pool of skilled mobile and web developers in a tech scene that is rapidly expanding and eager to adopt new technologies.", proof: "Rising tech ecosystem", icon: <Zap className="h-8 w-8 text-primary" /> },
    ]
  },
  'costa-rica': { 
    name: 'Costa Rica',
    flag: <svg width="24" height="24" viewBox="0 0 5 3"><path fill="#002b7f" d="M0 0h5v3H0z"/><path fill="#fff" d="M0 1h5v1H0z"/><path fill="#ce1126" d="M0 1.2h5v.6H0z"/></svg>,
    psp: [
        { pain: "Need a proven U.S. tech hub?", solution: "Hire from a major hub for U.S. tech companies, with a highly educated, bilingual workforce accustomed to enterprise-level expectations.", proof: "Major hub for US tech companies", icon: <Briefcase className="h-8 w-8 text-primary" /> },
        { pain: "Is political risk a concern?", solution: "Operate in a politically stable country with significant foreign investment in technology and education, ensuring a secure long-term partnership.", proof: "Politically stable & secure", icon: <ShieldCheck className="h-8 w-8 text-primary" /> },
        { pain: "Need specialized expertise?", solution: "Access a talent pool with deep expertise in specialized, high-stakes domains like life sciences, medical devices, and enterprise software.", proof: "Expertise in life sciences", icon: <BrainCircuit className="h-8 w-8 text-primary" /> },
    ]
  },
  'uruguay': { 
    name: 'Uruguay',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><g fill="#fff"><path d="M0 0h3v2H0z"/><path fill="#0038a8" d="M0 .2h3v.2H0zm0 .4h3v.2H0zm0 .8h3v.2H0zm0 .4h3v.2H0z"/></g><path fill="#fcd116" d="M.3.2c.1-.1.3-.1.4 0 .1.1.1.3 0 .4-.1.1-.3.1-.4 0-.1-.1-.1-.3 0-.4z"/></svg>,
    psp: [
        { pain: "Is poor infrastructure a bottleneck?", solution: "Leverage one of the most digitally advanced countries in LATAM, with excellent internet and power infrastructure ensuring high uptime.", proof: "LATAM's most advanced digital infrastructure", icon: <Server className="h-8 w-8 text-primary" /> },
        { pain: "Need specialized, high-skill talent?", solution: "Access a highly skilled and specialized talent pool with a strong focus on software exports and complex application development.", proof: "Top software exporter per capita", icon: <Zap className="h-8 w-8 text-primary" /> },
        { pain: "Worried about business friction?", solution: "Partner with a stable, business-friendly environment that has a high quality of life, leading to better talent retention.", proof: "High-retention, stable environment", icon: <UserCheck className="h-8 w-8 text-primary" /> },
    ]
  },
  'ecuador': {
    name: 'Ecuador',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#fcd116" d="M0 0h3v2H0z"/><path fill="#003893" d="M0 1h3v.5H0z"/><path fill="#ce1126" d="M0 1.5h3v.5H0z"/></svg>,
    psp: [
        { pain: "Need a significant cost advantage?", solution: "Access an emerging talent market that offers one of the best cost-to-quality ratios in the region for skilled engineers.", proof: "Significant cost advantage", icon: <Wallet className="h-8 w-8 text-primary" /> },
        { pain: "Is talent engagement a problem?", solution: "Hire from a pool of engineers with a strong desire to work with U.S. companies, leading to higher engagement, motivation, and retention.", proof: "High motivation & retention", icon: <UserCheck className="h-8 w-8 text-primary" /> },
        { pain: "Want to get in on a growing market?", solution: "Invest in an emerging tech ecosystem with a growing number of skilled engineers in hubs like Quito and Guayaquil.", proof: "Emerging talent market", icon: <Zap className="h-8 w-8 text-primary" /> },
    ]
  },
  'guatemala': {
    name: 'Guatemala',
    flag: <svg width="24" height="24" viewBox="0 0 3 2"><path fill="#4997d0" d="M0 0h3v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/></svg>,
    psp: [
        { pain: "Need perfect Central Time Zone alignment?", solution: "Collaborate in real-time with a large, young talent pool that shares the Central Time Zone, eliminating all communication lag.", proof: "Perfect CST alignment", icon: <Clock className="h-8 w-8 text-primary" /> },
        { pain: "Are cultural gaps causing friction?", solution: "Partner with a workforce that has strong cultural affinity with the U.S. and a service-oriented mindset, ensuring smoother collaboration.", proof: "Strong U.S. cultural affinity", icon: <Users className="h-8 w-8 text-primary" /> },
        { pain: "Is budget a primary constraint?", solution: "Leverage a cost-effective environment that allows you to scale your team more efficiently without sacrificing quality or time-zone alignment.", proof: "Highly cost-effective", icon: <Wallet className="h-8 w-8 text-primary" /> },
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
        <h1 className="flex items-center justify-center gap-4 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          <span className="h-10 w-10 rounded-sm overflow-hidden flex-shrink-0">{country.flag}</span>
          Hire Elite Engineers in {country.name}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You're here because you need world-class talent without the world-class time zone headaches. Access top-tier, pre-vetted engineers in {country.name}, fully aligned with your working hours.
        </p>
      </header>

      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {country.psp.map((card) => (
            <div key={card.pain} className="rounded-lg border bg-card p-6 flex flex-col">
                <p className="text-sm font-semibold text-primary">{card.pain}</p>
                <div className="flex items-center gap-3 mt-3">
                    {card.icon}
                    <h3 className="text-lg font-semibold text-foreground">The Solution</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex-grow">{card.solution}</p>
                <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                    <span className='font-bold'>Proof:</span> {card.proof}
                </p>
            </div>
        ))}
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

    