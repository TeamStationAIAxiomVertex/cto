// src/components/ProgrammaticContent.tsx
import React from "react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { allTech, TechEntry } from "@/lib/tech";

interface ProgrammaticContentProps {
  tech: TechEntry;
  slug: string;
}

/**
 * Renders the primary prose content for programmatic pages.
 */
export const ProgrammaticContent: React.FC<ProgrammaticContentProps> = ({
  tech,
  slug,
}) => {
  const siteUrl = "https://cto.teamstation.dev";
  const relatedTech = (tech.interlink_slugs || [])
    .map((s) => ({ slug: s, entry: (allTech as Record<string, TechEntry>)[s] }))
    .filter(
      (item): item is { slug: string; entry: TechEntry } => Boolean(item.entry)
    )
    .slice(0, 16);

  const comparisonLinks = (tech.comparison_slugs || []).slice(0, 8);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Hire", item: `${siteUrl}/hire` },
      {
        "@type": "ListItem",
        position: 3,
        name: "By Technology",
        item: `${siteUrl}/hire/by-technology`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: tech.name,
        item: `${siteUrl}/hire/by-technology/${slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Hire ${tech.name} Engineers`,
    serviceType: "Nearshore IT Staff Augmentation",
    provider: {
      "@type": "Organization",
      name: "TeamStation AI",
      url: siteUrl,
    },
    areaServed: "United States",
    description: tech.meta_description || tech.intro,
    keywords: `${tech.name}, nearshore ${tech.name}, hire ${tech.name} engineers, latam ${tech.name}`,
    url: `${siteUrl}/hire/by-technology/${slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Why hire nearshore ${tech.name} engineers?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Nearshore ${tech.name} teams improve delivery velocity with daylight overlap, faster feedback loops, and stronger engineering accountability.`,
        },
      },
      {
        "@type": "Question",
        name: `How does TeamStation evaluate ${tech.name} talent?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Candidates are assessed through practical technical scenarios, role-specific evaluation criteria, and production-readiness review aligned to the target stack.`,
        },
      },
      {
        "@type": "Question",
        name: `What work is this ${tech.name} team typically responsible for?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: tech.technical_analysis,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <div className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /
          <Link href="/hire" className="hover:text-foreground">
            Hire
          </Link>{" "}
          /
          <Link href="/hire/by-technology" className="hover:text-foreground">
            By Technology
          </Link>{" "}
          /<span>{tech.name}</span>
        </div>
        <header className="my-12">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Hire for {tech.name} Mastery
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{tech.intro}</p>
        </header>

        {tech.pains && tech.pains.length > 0 && (
          <section className="my-16">
            <h2 className="text-center text-3xl font-bold">Sound Familiar?</h2>
            <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
              Common problems we solve by providing true {tech.name} experts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {tech.pains.map((item) => (
                <div
                  key={item.pain}
                  className="rounded-lg border bg-card p-6 flex flex-col"
                >
                  <p className="text-sm font-semibold text-primary">
                    {item.pain}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    {React.createElement(item.icon, {
                      className: "mr-2 h-8 w-8 text-primary",
                    })}
                    <h3 className="text-lg font-semibold text-foreground">
                      The Problem
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground ">
                    {item.problem}
                  </p>
                  <div className="mt-4 border-t border-border pt-4">
                    <h4 className="font-semibold text-primary">
                      The TeamStation AI Solution
                    </h4>
                    <p className="text-sm text-foreground m-0">{item.solution}</p>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="mt-6">
                    <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                      Proof: {item.kpi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tech.evaluation?.length > 0 && (
          <section className="my-16 rounded-lg border bg-card p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center">
              Evaluation Criteria for {tech.name} Roles
            </h2>
            <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
              Every candidate is measured against production-grade expectations before shortlist delivery.
            </p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {tech.evaluation.map((item, idx) => (
                <li key={`${slug}-eval-${idx}`} className="rounded border bg-background px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {tech.technical_analysis && (
          <section className="my-16 rounded-lg border bg-card p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center">
              Technical Delivery Analysis: {tech.name}
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              {tech.technical_analysis}
            </p>
          </section>
        )}

        <section className="my-16 rounded-lg border bg-card p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center">Interlinking Mesh</h2>
          <p className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
            Use these anchor paths to navigate role strategy, technical hiring, and delivery economics.
          </p>

          {relatedTech.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Related Technology Hiring Guides</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedTech.map(({ slug: relatedSlug, entry }) => (
                  <Link
                    key={`${slug}-related-${relatedSlug}`}
                    href={`/hire/by-technology/${relatedSlug}`}
                    className="rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/30 transition-colors"
                  >
                    hire {entry.name} engineers
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Strategy and Framework Paths</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Connect this page to our{" "}
              <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook hub</Link>,{" "}
              <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics model</Link>,{" "}
              <Link href="/research/hub" className="text-primary hover:underline">research hub</Link>, and{" "}
              <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity measurement framework</Link>.
            </p>
          </div>

          {comparisonLinks.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Vendor Comparison Links</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {comparisonLinks.map((cmp) => (
                  <Link
                    key={`${slug}-cmp-${cmp}`}
                    href={`/comparisons/${cmp}`}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    comparison: {cmp}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-xl font-semibold">TeamStation Subdomain Network</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              For cross-site navigation use{" "}
              <a href="https://hire.teamstation.dev/roles" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hire.teamstation.dev roles index</a>,{" "}
              <a href="https://hire.teamstation.dev/nearshore-software-development" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nearshore software development overview</a>,{" "}
              <a href="https://research.teamstation.dev/research" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">research.teamstation.dev research archive</a>, and{" "}
              <a href="https://research.teamstation.dev/protocols/evaluation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">evaluation protocols</a>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
