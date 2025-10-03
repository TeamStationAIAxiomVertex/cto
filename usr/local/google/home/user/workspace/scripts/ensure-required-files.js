
// scripts/ensure-required-files.js
/* eslint-disable no-console */
console.log("🔎 ensure-required-files: start");
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

function ensureDir(p) {
  if (!fs.existsSync(path.dirname(p))) {
    fs.mkdirSync(path.dirname(p), { recursive: true });
  }
}

function writeIfMissing(file, content) {
    if (process.env.FORCE_WRITE === "1") {
        ensureDir(file);
        fs.writeFileSync(file, content);
        console.log("🧩 overwrote", path.relative(ROOT, file));
        return;
    }
  if (!fs.existsSync(file) || !fs.readFileSync(file, "utf8").trim()) {
    ensureDir(file);
    fs.writeFileSync(file, content);
    console.log("🧩 wrote", path.relative(ROOT, file));
  }
}

/** ---------- File contents (kept minimal but valid) ---------- */
const FILES = {
  // --- SEO ---
  [path.join(SRC, "components/seo/JsonLd.tsx")]: `
import * as React from "react";
type JsonLdProps = { data?: Record<string, any>; json?: Record<string, any>; id?: string };
function JsonLdImpl({ data, json, id }: JsonLdProps) {
  const payload = json ?? data ?? {};
  const jsonText = JSON.stringify(payload).replace(/</g, "\\\\u003c");
  return <script type="application/ld+json" id={id} dangerouslySetInnerHTML={{ __html: jsonText }} suppressHydrationWarning />;
}
export default JsonLdImpl;
export { JsonLdImpl as JsonLd };
`.trim(),

  [path.join(SRC, "components/seo/FurtherReading.tsx")]: `
import * as React from "react";
import Link from 'next/link';

export type ReadingItem = { href: string; title: string; desc?: string };

type Props = {
  items?: ReadingItem[];
  title?: string;
  comparison?: string;
  role?: string;
  technology?: string;
  country?: string;
};

const PRESETS: Record<string, ReadingItem[]> = {
  andela: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  bairesdev: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  coderslink: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  deel: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  devlane: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  globant: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  howdy: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  kms: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  nearsure: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  parallelstaff: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  revelo: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  tecla: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  terminal: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  toptal: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  unosquare: [{ href: "/technical-interview-evaluation", title: "Our Vetting Process" }, { href: "/trust", title: "Security & Compliance posture" }, { href: "/case-studies", title: "Customer case studies" }],
  default: [{ href: "/playbook/hub", title: "CTO Playbook" }, { href: "/comparisons", title: "Vendor Comparisons" }, { href: "/hire/by-country/mexico", title: "Hire in Mexico" }],
};

export default function FurtherReading({ items = [], title = "Further reading", comparison, role, technology, country }: Props) {
  let list = items;
  if (!items.length) {
      if(comparison && PRESETS[comparison]) {
        list = PRESETS[comparison];
      } else {
        list = PRESETS['default'];
      }
  }
  
  if (!list.length) return null;

  return (
    <aside aria-label={title} className="space-y-2 my-16 border-t border-border pt-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {list.map(({ href, title, desc }, i) => (
          <li key={i}>
            <Link href={href} className="text-primary hover:underline">
              {title}
            </Link>
            {desc ? <div className="text-sm text-muted-foreground">{desc}</div> : null}
          </li>
        ))}
      </ul>
    </aside>
  );
}
`.trim(),

  // --- UI shims (SSR-safe, no 'use client') ---
  [path.join(SRC, "components/ui/tooltip.tsx")]: `
import * as React from "react";
export function TooltipProvider({ children }:{children:React.ReactNode}){ return <>{children}</>; }
export function Tooltip({ children }:{children:React.ReactNode}){ return <>{children}</>; }
export function TooltipTrigger({ children }:{children:React.ReactNode}){ return <>{children}</>; }
export function TooltipContent({ children }:{children:React.ReactNode}){ return <>{children}</>; }
/** Accept both 'content' and 'label' for compatibility */
export function WithTooltip(props:{content?:React.ReactNode; label?:React.ReactNode; children:React.ReactNode; as?:keyof JSX.IntrinsicElements; className?:string}) {
  const { content, label, children, as:Tag="span", className } = props as any;
  const title = typeof (content ?? label) === "string" ? (content ?? label) : undefined;
  return <Tag title={title} className={className} data-hint={title}>{children}</Tag>;
}
export default { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, WithTooltip };
`.trim(),

  [path.join(SRC, "components/ui/accordion.tsx")]: `
import * as React from "react";
export function Accordion(props:React.HTMLAttributes<HTMLDivElement>){ return <div {...props}/>; }
export function AccordionItem({children,value}:{children:React.ReactNode; value:string}){ return <section data-accordion-item={value}>{children}</section>; }
export function AccordionTrigger({children}:{children:React.ReactNode}){ return <div role="button" tabIndex={0}>{children}</div>; }
export function AccordionContent({children}:{children:React.ReactNode}){ return <div>{children}</div>; }
export default { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
`.trim(),

  [path.join(SRC, "components/ui/DecisionCard.tsx")]: `
import * as React from "react";
import Link from 'next/link';
export function DecisionCard({ problem, stakes, approach, evidence, related = [] as {label:string; href:string}[] }:{
  problem:string; stakes:string; approach:string; evidence:string; related?:{label:string; href:string}[];
}) {
  return (
    <section className="rounded-lg border bg-card p-6 space-y-4 my-16">
      <h3 className="text-xl font-bold">Decision Brief</h3>
      <p><strong className="text-destructive">Problem:</strong> {problem}</p>
      <p><strong>Stakes:</strong> {stakes}</p>
      <p><strong className="text-primary">Approach:</strong> {approach}</p>
      <p dangerouslySetInnerHTML={{ __html: "<strong>Evidence:</strong> " + evidence.replace(/\\[(.*?)\\]\\((.*?)\\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>') }}></p>
      {related.length ? (
        <div className="pt-2">
          <div className="font-semibold">Related</div>
          <ul className="list-disc pl-5">
            {related.map((r, i) => <li key={i}><Link className="text-primary hover:underline" href={r.href}>{r.label}</Link></li>)}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
export default DecisionCard;
`.trim(),

  [path.join(SRC, "components/SpotifyIcon.tsx")]: `
import * as React from "react";
export function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (<svg viewBox="0 0 168 168" aria-hidden="true" focusable="false" {...props}>
    <path d="M84 0a84 84 0 1 0 0 168 84 84 0 0 0 0-168Zm38.7 121.3a6 6 0 0 1-8.3 2c-22.8-14-51.6-17.2-85.3-9.4a6 6 0 1 1-2.7-11.7c36.7-8.4 68.5-4.7 93 10.7a6 6 0 0 1 2.3 8.4Zm11-24.4a7.4 7.4 0 0 1-10.2 2.4c-26.1-16-65.9-20.7-96.7-11.3a7.4 7.4 0 1 1-4.2-14.2c34.6-10.2 78-5 107.6 13.1a7.4 7.4 0 0 1 3.5 10Zm1.3-25.9c-31-18.4-82.2-20.6-111.7-11.3a9 9 0 1 1-5.3-17.2c34.2-10.5 90.2-7.8 126 13.3a9 9 0 1 1-9 15.2Z" fill="currentColor"/>
  </svg>);
}
export default SpotifyIcon;
`.trim(),

  [path.join(SRC, "lib/markdown-parser.ts")]: `
import { remark } from "remark";
import html from "remark-html";
/** Markdown → HTML (server only) */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown || "");
  return String(result);
}
export default markdownToHtml;
`.trim(),

  [path.join(SRC, "lib/case-studies.ts")]: `
import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown-parser";

export type CaseStudy = {
  slug: string;
  title: string;
  clientName?: string;
  industry?: string;
  summary?: string;
  lastModified?: string;
  ogImage?: { src?: { url?: string }; aiHint?: string };
  contentHtml?: string;
  challenge?: string;
  outcomes?: string;
  techStack?: { name: string; link: string }[];
  canonical?: string;
};

const CANDIDATE_DIRS = [
  path.join(process.cwd(), "content", "case-studies"),
  path.join(process.cwd(), "src", "content", "case-studies"),
];

function findDir(): string | null {
  for (const d of CANDIDATE_DIRS) if (fs.existsSync(d)) return d;
  return null;
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const dir = findDir();
  if (!dir) return [];
  const files = fs.readdirSync(dir).filter(f => /\\.mdx?$/.test(f));
  return files.map(file => {
    const abs = path.join(dir, file);
    const raw = fs.readFileSync(abs, "utf8");
    const { data } = matter(raw);
    const stat = fs.statSync(abs);
    return {
      slug: file.replace(/\\.mdx?$/, ""),
      clientName: data.clientName || data.title,
      industry: data.industry,
      summary: data.summary || data.description,
      ogImage: data.ogImage,
      lastModified: stat.mtime.toISOString(),
      title: data.title,
      challenge: data.challenge,
      outcomes: data.outcomes,
      techStack: data.techStack,
      canonical: data.canonical
    };
  });
}

export async function getCaseStudyBySlug(slug: string | undefined): Promise<CaseStudy | null> {
  if (!slug) return null;
  const dir = findDir();
  if (!dir) return null;
  const file = [".md", ".mdx"].map(ext => path.join(dir, \`\${slug}\${ext}\`)).find(f => fs.existsSync(f));
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  const stat = fs.statSync(file);
  return {
    slug,
    clientName: data.clientName || data.title,
    industry: data.industry,
    summary: data.summary || data.description,
    ogImage: data.ogImage,
    lastModified: stat.mtime.toISOString(),
    contentHtml: html,
    title: data.title,
    challenge: data.challenge,
    outcomes: data.outcomes,
    techStack: data.techStack,
    canonical: data.canonical,
  };
}
export default { getAllCaseStudies, getCaseStudyBySlug };
`.trim(),

  // --- Comparison helpers ---
  [path.join(SRC, "lib/comparisonFaqs.ts")]: `
export type Faq = { q: string; a: string };

/** Default FAQs for a competitor page; safe fallback if none provided */
export function defaultComparisonFaqs(vendor: string): Faq[] {
  return [
    {
      q: \`Why choose TeamStation AI vs. \${vendor}?\`,
      a: "TeamStation AI bundles scientific vetting, secure MDM devices, EOR/compliance, and insurance under one SLA to reduce risk and lower TCO."
    },
    {
      q: "How do you vet engineers?",
      a: "We use our Axiom Cortex™ cognitive AI to measure problem-solving ability and learning orientation, providing evidence-based signals—beyond resumes."
    },
    {
      q: "What about compliance and security?",
      a: "We’re aligned to SOC 2/ISO practices, devices are MDM-managed with encryption and remote wipe, and all work is covered by Cyber & E&O insurance."
    }
  ];
}
export default { defaultComparisonFaqs };
`.trim(),

  [path.join(SRC, "lib/comparisonSchema.ts")]: `
import type { Faq } from "./comparisonFaqs";

type Args = { name: string; url?: string; slug?: string; faqs?: Faq[] };
const SITE = "https://cto.teamstation.dev";

/** Minimal, valid JSON-LD for comparison pages with optional FAQ */
export function generateComparisonSchema({ name, url, slug, faqs = [] }: Args) {
  const canonical = \`\${SITE}/comparisons/\${slug ?? name.toLowerCase()}\`;

  const faqBlock = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a }
        }))
      }
    : null;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": \`TeamStation AI vs. \${name}\`,
    "url": canonical,
    "about": { "@type": "Organization", "name": name, "url": url },
    ...(faqBlock ? { faqBlock } : {})
  };
}
export default { generateComparisonSchema };
`.trim(),
};

/** ---------- Write any missing files ---------- */
Object.entries(FILES).forEach(([file, content]) => writeIfMissing(file, content));

/** ---------- Rewrite '@/…' imports to relative paths ---------- */
function rewriteAliases() {
  const exts = [".ts", ".tsx", ".js", ".jsx"];
  const files = [];

  (function walk(dir) {
    if (!fs.existsSync(dir)) {
      console.error(`❌ src directory missing: ${dir}`);
      process.exit(1);
    }
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (exts.includes(path.extname(p))) files.push(p);
    }
  })(SRC);

  let rewrites = 0;

  for (const file of files) {
    const dir = path.dirname(file);
    let src = fs.readFileSync(file, "utf8");
    let changed = false;

    const mk = (sub) => {
      const targetAbs = path.join(SRC, sub);
      const rel = path
        .relative(dir, targetAbs)
        .replace(/\\/g, "/");
      return rel.startsWith(".") ? rel : "./" + rel;
    };

    // 1) ESM/CJS: import/export ... from '@/...'
    src = src.replace(/from\s+['"]@\/([^'"]+)['"]/g, (_m, sub) => {
      changed = true; rewrites++;
      return `from "${mk(sub.trim())}"`;
    });

    // 2) CJS: require('@/...')
    src = src.replace(/require\(\s*['"]@\/([^'"]+)['"]\s*\)/g, (_m, sub) => {
      changed = true; rewrites++;
      return `require("${mk(sub.trim())}")`;
    });

    // 3) Dynamic: import('@/...')
    src = src.replace(/import\(\s*['"]@\/([^'"]+)['"]\s*\)/g, (_m, sub) => {
      changed = true; rewrites++;
      return `import("${mk(sub.trim())}")`;
    });

    if (changed) {
      fs.writeFileSync(file, src);
      console.log("🔧 alias → relative:", path.relative(ROOT, file));
    }
  }

  const STRICT = process.env.STRICT_ALIAS_REWRITE === "1";
  const leftovers = files.filter(f => fs.readFileSync(f, "utf8").includes("@/"));
  if (leftovers.length) {
    const msg =
      `Found ${leftovers.length} remaining "@/…" imports:\n` +
      leftovers.map(f => " - " + path.relative(ROOT, f)).join("\n");
    STRICT ? console.error("❌ " + msg) : console.warn("⚠️  " + msg);
    if (STRICT) process.exit(1);
  }

  console.log(`✅ alias rewrite complete (${rewrites} updates).`);
}


rewriteAliases();
console.log("✅ ensure-required-files: done");
