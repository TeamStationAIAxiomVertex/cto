
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { roleCategories } from "../../../lib/roles";
import { WithTooltip } from "../../../components/ui/tooltip";
import FurtherReading from "../../../components/seo/FurtherReading";
import CardGuidanceTooltip from "../../../components/ui/card-guidance-tooltip";
import { InfoDropdown } from "../../../components/client/info-dropdown";
import CTOFieldManualBlock from "../../../components/seo/CTOFieldManualBlock";

export const metadata: Metadata = {
  title: 'Hire Vetted Nearshore Engineers by Role | TeamStation AI',
  description: 'Hire elite LATAM engineers by role. We provide pre-vetted experts for SRE, AppSec, Data, AI/ML, and more, all under a single, compliant SLA.',
  keywords: 'hire by role, nearshore engineers, latam engineers, sre, appsec, data engineer, ai engineer, qa engineer',
};

export default function HireByRolePage() {
  return (
    <main className="manual-page content-shell py-10">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Role</span>
      </div>
      <header className="glass-panel hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Stop Hiring for Titles. Start Hiring for Competencies.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You don't need a "backend developer." You need someone who can solve your database scaling issues. Our role-based hiring focuses on the specific, high-stakes competencies that drive business value, ensuring you get the right expert for the right problem.
        </p>
        <div className="mt-4 flex justify-center">
          <InfoDropdown label="How this page helps">
            <p>This role map shows the issue each role solves, proof paths, and how to choose the right role for the current delivery bottleneck.</p>
          </InfoDropdown>
        </div>
         <nav className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
            <Link href="/hire/by-technology" className="text-primary hover:underline">Hire by Technology</Link>
        </nav>
      </header>

      <section className="glass-panel my-10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold">Role Selection Snapshot</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Choose role paths by constraint first. Platform roles reduce outage risk. Security roles reduce compliance and access risk. Product and delivery roles reduce roadmap delay.
        </p>
        <div className="mt-5 card-grid-tight-3">
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Issue</p>
            <p className="mt-1 text-sm text-muted-foreground">Unclear ownership and slow delivery decisions.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">How we solve it</p>
            <p className="mt-1 text-sm text-muted-foreground">Role specific vetting and role to KPI mapping before onboarding.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Validation cue</p>
            <p className="mt-1 text-sm text-muted-foreground">Faster onboarding fit and lower rework in the first 90 days.</p>
          </div>
        </div>
      </section>

      <div className="card-grid-tight-3 my-12">
        {roleCategories.map((category) => (
          <div key={category.slug} className="glass-panel rounded-2xl group relative mx-auto w-full max-w-sm flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
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
                 <p className="text-xs text-primary font-bold">Validation:</p>
                 <Link href={category.proof.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{category.proof.label}</Link>
            </div>
            <Link href={`/hire/by-role/${category.slug}`} className="mt-4 flex items-center text-sm font-semibold text-primary stretched-link">
              Explore {category.name} Roles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>

      <section className="glass-panel my-10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold">Role Architecture for Executive Buyers</h2>
        <div className="mt-4 space-y-5 text-muted-foreground leading-7">
          <h3 className="text-lg font-semibold text-foreground">Choose roles by system pressure points</h3>
          <p>
            The right role is the one that removes your highest execution drag first. Platform and reliability
            roles reduce outage risk and change failure recovery speed. Security and governance roles reduce
            exposure and audit friction. Data and product roles improve decision quality and roadmap coherence.
            This page is structured so CTO and CIO teams can choose sequence, not just titles.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Prioritize roles that remove recurring operational incidents.</li>
            <li>Then prioritize roles that improve release flow and decision speed.</li>
            <li>Then add specialist roles to strengthen scale and resilience.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">Interlink mesh for role based planning</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/hire/by-technology" className="text-primary hover:underline">technology guides aligned to each role family</Link></li>
            <li><Link href="/hire/by-team-topologies" className="text-primary hover:underline">team topology map for ownership boundaries</Link></li>
            <li><Link href="/playbook/hub" className="text-primary hover:underline">CTO playbook for sequencing and execution controls</Link></li>
            <li><Link href="/playbook/latam-economics" className="text-primary hover:underline">economics guide for cost and velocity tradeoffs</Link></li>
            <li><Link href="/research/hub" className="text-primary hover:underline">research archive for hiring methodology depth</Link></li>
            <li><a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine for operating standards</a></li>
            <li><a href="https://research.teamstation.dev/protocols/evaluation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">evaluation protocols for interview consistency</a></li>
            <li><a href="https://hire.teamstation.dev/roles" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">full role index for enterprise coverage planning</a></li>
          </ul>
        </div>
      </section>

      <CTOFieldManualBlock
        title="Role Based Field Manual for CTO Hiring Decisions"
        focus="role architecture and competency based delivery outcomes"
      />
      
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
