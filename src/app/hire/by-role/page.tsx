
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, GanttChartSquare, Layers, TestTube2, Briefcase } from 'lucide-react';

const roleCategories = {
  "Data, AI & Quantum": {
    slug: 'data-ai-quantum',
    description: "Quantum Software Engineers, Artificial Intelligence Engineers, Data Scientists, Data Engineers, DBA Engineers and Analysts, Business Intelligence, Data Testers",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    cta: "Explore Data & AI Roles"
  },
  "Software Engineering": {
    slug: 'software-engineering',
    description: "Architects, Salesforce Architects, Machine Learning, Full Stack, Front End, Back End",
    icon: <Code className="h-8 w-8 text-primary" />,
    cta: "Explore Software Roles"
  },
  "Product Management": {
    slug: 'product-management',
    description: "Product Managers, Product Designers, Product Owners, UX / UI Designers, Scrum Masters, Business Analysts",
    icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
    cta: "Explore Product Roles"
  },
  "Mobile Development": {
    slug: 'mobile-development',
    description: "Architects, Technical Leads, Engineers, Testers, Cross-Platform, Designers",
    icon: <Layers className="h-8 w-8 text-primary" />,
    cta: "Explore Mobile Roles"
  },
  "DevOps & Cloud": {
    slug: 'devops',
    description: "Evangelist, Engineers & Testers, DevSec, Cloud Engineers, Release Managers",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    cta: "Explore DevOps Roles"
  },
  "Quality Assurance": {
    slug: 'quality-assurance',
    description: "QA Automation Engineers, QA Manual Testers, QA Lead, Test Lead, SDET, Usability Test Engineers",
    icon: <TestTube2 className="h-8 w-8 text-primary" />,
    cta: "Explore QA Roles"
  }
};

export default function HireByRolePage() {
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
        {Object.entries(roleCategories).map(([category, details]) => (
          <Link href={`/hire/by-role/${details.slug}`} key={category} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              {details.icon}
              <h2 className="mt-4 text-2xl font-bold transition-colors group-hover:text-primary">{category}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-grow">
                {details.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-primary">
                  {details.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
          </Link>
        ))}
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
