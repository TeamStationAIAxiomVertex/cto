
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { roleCategories } from "../../../lib/roles";
import { WithTooltip } from "../../../components/ui/tooltip";
import FurtherReading from "../../../components/seo/FurtherReading";
import CardGuidanceTooltip from "../../../components/ui/card-guidance-tooltip";

export const metadata: Metadata = {
  title: 'Hire Vetted Nearshore Engineers by Role | TeamStation AI',
  description: 'Hire elite LATAM engineers by role. We provide pre-vetted experts for SRE, AppSec, Data, AI/ML, and more, all under a single, compliant SLA.',
  keywords: 'hire by role, nearshore engineers, latam engineers, sre, appsec, data engineer, ai engineer, qa engineer',
};

export default function HireByRolePage() {
  return (
    <main className="container py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Role</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Stop Hiring for Titles. Start Hiring for Competencies.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You don't need a "backend developer." You need someone who can solve your database scaling issues. Our role-based hiring focuses on the specific, high-stakes competencies that drive business value, ensuring you get the right expert for the right problem.
        </p>
         <nav className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
            <Link href="/hire/by-technology" className="text-primary hover:underline">Hire by Technology</Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {roleCategories.map((category) => (
          <div key={category.slug} className="group relative flex flex-col rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 shadow-lg">
             <div className="flex justify-between items-start gap-2">
              <div className="flex items-center gap-2">
                <WithTooltip content={category.priorityTooltip}>
                  <span className="text-xs font-semibold text-destructive px-2 py-1 bg-destructive/10 rounded-full">{category.priority}</span>
                </WithTooltip>
              </div>
              <CardGuidanceTooltip
                issue={category.pain}
                solution={category.description}
                proof={category.proof.label}
              />
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <category.icon className="h-6 w-6 text-primary" />
              </span>
              <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
            </div>
             <p className="text-sm font-semibold text-primary mt-4">{category.pain}</p>
            <p className="mt-2 text-sm text-muted-foreground flex-grow">{category.description}</p>
            <div className="flex-grow"></div>
            <div className="mt-6 border-t border-border pt-4">
                 <p className="text-xs text-primary font-bold">Proof:</p>
                 <Link href={category.proof.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{category.proof.label}</Link>
            </div>
            <Link href={`/hire/by-role/${category.slug}`} className="mt-4 flex items-center text-sm font-semibold text-primary stretched-link">
              Explore {category.name} Roles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire for a Specific Competency?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss the specific roles and competencies you need to accelerate your roadmap.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
      <FurtherReading />
    </main>
  );
}
