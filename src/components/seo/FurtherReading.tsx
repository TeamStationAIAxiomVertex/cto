import * as React from "react";
import Link from "next/link";
import { allTech } from "@/lib/tech";

export type ReadingItem = { href: string; title: string; desc?: string };

type Props = {
  items?: ReadingItem[];
  title?: string;
  comparison?: string;
  country?: string;
  techSlug?: string;
};

// --- Link Definitions (VERIFIED & CORRECTED) ---
const PLAYBOOK_LINKS: ReadingItem[] = [
    { href: "/playbook/hub", title: "CTO Playbook Hub" },
    { href: "/playbook/nearshore-vs-offshore", title: "The CTO\'s Guide: Nearshore vs. Offshore Development Strategy" },
    { href: "/playbook/build-vs-buy", title: "Build vs. Buy: The Definitive CTO Framework for Scaling Nearshore Teams" },
    { href: "/playbook/bias-free-technical-hiring-axiom-cortex", title: "Bias-Free Technical Hiring: A Playbook for CTOs | TeamStation AI" },
];

const HIRE_LINKS: ReadingItem[] = [
    { href: "/hire/by-country/mexico", title: "Hire Developers in Mexico" },
    { href: "/hire/by-role/platform-infra-sre", title: "Hire Platform/SRE Engineers" },
    { href: "/hire/by-technology/react", title: "Hire React Developers" },
];

const COMPARISON_LINKS: ReadingItem[] = [
    { href: "/comparisons", title: "All Vendor Comparisons" },
    { href: "/comparisons/bairesdev", title: "vs. BairesDev" },
];

const RESEARCH_LINKS: ReadingItem[] = [
    { href: "/research/hub", title: "Research Hub" },
    { href: "/research/axiom-cortex-scientific-report", title: "AxiomCortex™ Scientific Report" },
];

function getTechInterlinks(slug: string | undefined): ReadingItem[] {
  if (!slug) return [];
  const tech = allTech[slug as keyof typeof allTech];
  const interlinks = tech?.interlink_slugs?.map(s => ({
    href: `/hire/by-technology/${s}`,
    title: `Learn about ${allTech[s as keyof typeof allTech]?.name || s}`
  })) || [];
  const comparisons = tech?.comparison_slugs?.map(s => ({
    href: `/comparisons/${s}`,
    title: `vs. ${s.charAt(0).toUpperCase() + s.slice(1)}`
  })) || [];
  return [...interlinks, ...comparisons];
}

export default function FurtherReading({ items = [], title = "Further Reading", comparison, country, techSlug }: Props) {
  const generatedLinks = React.useMemo(() => {
    let pool: ReadingItem[] = [];

    // Add context-specific links
    if (techSlug) {
      pool.push(...getTechInterlinks(techSlug));
    }
    if (comparison) {
      pool.push({ href: '/comparisons', title: `Why We\'re a Better ${comparison} Alternative` });
    }
    if (country) {
      pool.push({ href: '/hire/by-country', title: `More Nearshore Country Options` });
    }

    // Add general high-value links
    pool.push(...PLAYBOOK_LINKS, ...HIRE_LINKS, ...COMPARISON_LINKS, ...RESEARCH_LINKS);
    
    // Remove duplicates based on href
    const uniqueLinks = Array.from(new Map(pool.map(item => [item.href, item])).values());
    
    // Keep deterministic ordering to avoid client/server render drift.
    return uniqueLinks.slice(0, Math.max(4, items.length));
    
  }, [items, comparison, country, techSlug]);

  const list = items.length ? items : generatedLinks;

  if (list.length === 0) return null;

  return (
    <aside
      aria-label={title}
      className="space-y-2 my-16 border-t border-border pt-8"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {list.map(({ href, title, desc }, i) => (
          <li key={i}>
            <Link href={href} className="text-primary hover:underline">
              {title}
            </Link>
            {desc ? (
              <div className="text-sm text-muted-foreground">{desc}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </aside>
  );
}
