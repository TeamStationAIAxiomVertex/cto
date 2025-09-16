import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { WithTooltip } from '@/components/ui/tooltip';
import { roleCategories } from '@/lib/roles';

export const metadata: Metadata = {
  title: 'Hire Nearshore Engineers by Role | Staff Augmentation',
  description: 'Find elite, pre-vetted LATAM talent for your specific needs. Hire by role: Backend, Frontend, SRE, Security, Data, and AI/ML.',
  keywords: 'hire by role, nearshore engineers, latam staff augmentation, hire backend developers, hire frontend developers, hire sre, hire security engineer, hire data engineer, hire ai/ml engineer',
};

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
                    <details.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">{details.name}</h2>
                </div>
                <div className="relative z-20">
                   <WithTooltip label={details.priorityTooltip}>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${getPriorityColor(details.priority)}`}>{details.priority}</span>
                   </WithTooltip>
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
