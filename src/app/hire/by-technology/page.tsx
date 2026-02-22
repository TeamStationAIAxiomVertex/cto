import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { techCategories } from "@/lib/tech-categories";
import FurtherReading from "../../../components/seo/FurtherReading";
import allTech from "@/data/technologies";
import CardGuidanceTooltip from "../../../components/ui/card-guidance-tooltip";
import { InfoDropdown } from "../../../components/client/info-dropdown";
import CTOFieldManualBlock from "../../../components/seo/CTOFieldManualBlock";

export const metadata: Metadata = {
  title: "Hire Nearshore Developers by Technology | TS AI",
  description:
    "Hire vetted LATAM engineers with expertise in your stack: React, Node, Python, AWS, Kubernetes, AI/ML, and more.",
  keywords:
    "hire by technology, nearshore developers, latam engineers, react developers, node developers, python developers, aws experts, kubernetes experts, ai/ml engineers",
};

export default function HireByTechnologyPage() {
  const hydratedSlugs = Object.keys(allTech);

  return (
    <main className="content-shell py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/hire" className="hover:text-foreground">
          Hire
        </Link>{" "}
        / <span>By Technology</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Stop Hiring for Keywords. Start Hiring for Mastery.
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          You're here because finding an engineer who has simply "used" a
          technology isn't enough. You need someone who has mastered it to solve
          real-world problems. We provide experts with proven, deeply-rooted
          expertise in the specific technologies that power your business.
        </p>
        <div className="mt-4 flex justify-center">
          <InfoDropdown label="How this page helps">
            <p>This page maps each stack area to delivery risk, then links to vetted technology pages with practical hiring guidance.</p>
          </InfoDropdown>
        </div>
        <nav className="mt-6 flex justify-center gap-4 text-sm">
          <Link href="/playbook/hub" className="text-primary hover:underline">
            CTO Playbook
          </Link>
          <Link href="/comparisons" className="text-primary hover:underline">
            Vendor Comparisons
          </Link>
          <Link href="/hire/by-role" className="text-primary hover:underline">
            Hire by Role
          </Link>
        </nav>
      </header>

      <section className="surface-card my-10 p-6 md:p-8">
        <h2 className="text-2xl font-bold">Technology Selection Snapshot</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Pick technology paths by production risk. Backend and data stacks impact throughput. Cloud and security stacks impact resilience and compliance.
        </p>
        <div className="mt-5 card-grid-tight-3">
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Issue</p>
            <p className="mt-1 text-sm text-muted-foreground">Stack mismatch creates fragile delivery and slow releases.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">How we solve it</p>
            <p className="mt-1 text-sm text-muted-foreground">Stack specific assessment focused on production scenarios not checklist skills.</p>
          </div>
          <div className="rounded-lg border bg-background/60 p-4">
            <p className="text-sm font-semibold text-foreground">Proof signal</p>
            <p className="mt-1 text-sm text-muted-foreground">Higher quality first sprint output and lower rollback rate.</p>
          </div>
        </div>
      </section>

      <div className="card-grid-tight-3 my-12">
        {techCategories.map((category) => (
          <div
            key={category.name}
            className="surface-card group mx-auto w-full max-w-sm p-6 flex flex-col"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-primary">
                {category.pain}
              </p>
              <CardGuidanceTooltip
                issue={category.pain}
                solution={`We provide verified ${category.name.toLowerCase()} specialists with production level assessment.`}
              />
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <category.icon className="h-6 w-6 text-primary" />
              </span>
              <h2 className="text-xl font-bold text-foreground">
                {category.name}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {category.tech.map((tech) => {
                const isHydrated = hydratedSlugs.includes(tech.slug);
                if (isHydrated) {
                  return (
                    <Link
                      href={`/hire/by-technology/${tech.slug}`}
                      key={tech.slug}
                      className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/30 transition-colors"
                    >
                      {tech.name}
                    </Link>
                  );
                }
                return (
                  <span
                    key={tech.slug}
                    className="rounded-full bg-muted/20 text-muted-foreground px-3 py-1 text-xs font-medium cursor-not-allowed"
                  >
                    {tech.name}
                  </span>
                );
              })}
            </div>
            <div className="flex-grow"></div>
            <Link
              href={`/hire/by-role/${category.slug}`}
              className="group mt-4 flex items-center text-sm font-semibold text-primary"
            >
              Related Role: {category.name}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>

      <section className="surface-card my-12 p-6 md:p-8">
        <h2 className="text-2xl font-bold">Technology Depth Framework for CTO teams</h2>
        <div className="mt-4 space-y-5 text-muted-foreground leading-7">
          <h3 className="text-lg font-semibold text-foreground">Evaluate technology by production impact</h3>
          <p>
            Technology hiring should map directly to production risk. Backend and platform choices shape
            system stability. Data choices shape reporting trust and decision quality. Frontend choices shape
            release confidence and user experience consistency. This page clusters technology paths so leaders
            can route hiring by impact domain and keep selection tied to delivery outcomes.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use backend clusters to reduce integration friction and release risk.</li>
            <li>Use platform clusters to strengthen reliability and cost control.</li>
            <li>Use data and AI clusters to improve decision speed and model quality.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">Interlink mesh for stack aligned planning</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/hire/by-role" className="text-primary hover:underline">role guides for capability ownership mapping</Link></li>
            <li><Link href="/playbook/hub" className="text-primary hover:underline">playbook hub for operating model sequencing</Link></li>
            <li><Link href="/playbook/tco-model" className="text-primary hover:underline">total cost model for delivery economics</Link></li>
            <li><Link href="/research/hub" className="text-primary hover:underline">research hub for method and validation standards</Link></li>
            <li><Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity framework for throughput decisions</Link></li>
            <li><a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine for architecture standards</a></li>
            <li><a href="https://research.teamstation.dev/protocols/delivery" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">delivery protocols for execution control</a></li>
            <li><a href="https://hire.teamstation.dev/hire" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cross domain hire index for enterprise planning</a></li>
          </ul>
        </div>
      </section>

      <CTOFieldManualBlock
        title="Technology Selection Field Manual for CTO Teams"
        focus="stack aligned hiring and production reliability controls"
      />

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire for Your Stack?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Let's discuss your specific technology needs. In 15 minutes, we can
          map your stack to our evaluation process and find the right experts
          for your team.
        </p>
        <Link
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button mt-6"
        >
          Book a Strategy Call
        </Link>
      </div>
      <FurtherReading />
    </main>
  );
}
