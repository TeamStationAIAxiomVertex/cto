// scripts/ensure-required-files.js
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

function ensureDir(p) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
}

function writeIfMissing(file, content) {
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
  const jsonText = JSON.stringify(payload).replace(/</g, "\\u003c");
  return <script type="application/ld+json" id={id} dangerouslySetInnerHTML={{ __html: jsonText }} suppressHydrationWarning />;
}
export default JsonLdImpl;
export { JsonLdImpl as JsonLd };
`.trim(),

  [path.join(SRC, "components/seo/FurtherReading.tsx")]: `
import * as React from "react";
export type ReadingItem = { href: string; title: string; desc?: string };
export default function FurtherReading({ items = [], title = "Further reading" }:{ items?: ReadingItem[]; title?: string }) {
  if (!items.length) return null;
  return (
    <aside aria-label={title} className="space-y-2">
      <h2 className="text-base font-semibold">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {items.map(({ href, title, desc }, i) => (
          <li key={i}>
            <a href={href} className="underline hover:no-underline">{title}</a>
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

  // --- Optional: stub to avoid surprises if DecisionCard is missing ---
  [path.join(SRC, "components/ui/DecisionCard.tsx")]: `
import * as React from "react";
export function DecisionCard({ problem, stakes, approach, evidence, related = [] as {label:string; href:string}[] }:{
  problem:string; stakes:string; approach:string; evidence:string; related?:{label:string; href:string}[];
}) {
  return (
    <section className="rounded-lg border bg-card p-6 space-y-4">
      <h3 className="text-xl font-bold">Decision Brief</h3>
      <p><strong>Problem:</strong> {problem}</p>
      <p><strong>Stakes:</strong> {stakes}</p>
      <p><strong>Approach:</strong> {approach}</p>
      <p><strong>Evidence:</strong> {evidence}</p>
      {related.length ? (
        <div className="pt-2">
          <div className="font-semibold">Related</div>
          <ul className="list-disc pl-5">
            {related.map((r, i) => <li key={i}><a className="underline" href={r.href}>{r.label}</a></li>)}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
export default DecisionCard;
`.trim(),

  // --- Icons ---
  [path.join(SRC, "components/SpotifyIcon.tsx")]: `
import * as React from "react";
export default function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (<svg viewBox="0 0 168 168" aria-hidden="true" focusable="false" {...props}>
    <path d="M84 0a84 84 0 1 0 0 168 84 84 0 0 0 0-168Zm38.7 121.3a6 6 0 0 1-8.3 2c-22.8-14-51.6-17.2-85.3-9.4a6 6 0 1 1-2.7-11.7c36.7-8.4 68.5-4.7 93 10.7a6 6 0 0 1 2.3 8.4Zm11-24.4a7.4 7.4 0 0 1-10.2 2.4c-26.1-16-65.9-20.7-96.7-11.3a7.4 7.4 0 1 1-4.2-14.2c34.6-10.2 78-5 107.6 13.1a7.4 7.4 0 0 1 3.5 10Zm1.3-25.9c-31-18.4-82.2-20.6-111.7-11.3a9 9 0 1 1-5.3-17.2c34.2-10.5 90.2-7.8 126 13.3a9 9 0 1 1-9 15.2Z" fill="currentColor"/>
  </svg>);
}
`.trim(),

  // --- Markdown helpers ---
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
import markdownToHtml from "./markdown-parser";

export type CaseStudy = {
  slug: string;
  clientName?: string;
  industry?: string;
  summary?: string;
  lastModified?: string;
  ogImage?: { src?: { url?: string }; aiHint?: string };
  contentHtml?: string;
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
    };
  });
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
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
  };
}
export default { getAllCaseStudies, getCaseStudyBySlug };
`.trim(),
};

/** ---------- Write any missing files ---------- */
Object.entries(FILES).forEach(([file, content]) => writeIfMissing(file, content));

/** ---------- Rewrite '@/…' imports to relative paths ---------- */
function rewriteAliases() {
  const exts = [".ts", ".tsx", ".js", ".jsx"];
  const files = [];

  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (exts.includes(path.extname(p))) files.push(p);
    }
  })(SRC);

  const rx = /from\\s+['"]@\\/(.+?)['"]|require\\(\\s*['"]@\\/(.+?)['"]\\s*\\)/g;

  let rewrites = 0;
  for (const file of files) {
    const dir = path.dirname(file);
    let src = fs.readFileSync(file, "utf8");
    let changed = false;

    src = src.replace(rx, (_m, m1, m2) => {
      const sub = (m1 || m2).trim();             // e.g. "components/seo/JsonLd"
      const targetAbs = path.join(SRC, sub);
      const rel = path.relative(dir, targetAbs).replace(/\\\\/g, "/");
      const fixed = rel.startsWith(".") ? rel : "./" + rel;
      changed = true;
      rewrites++;
      return _m.startsWith("from")
        ? `from "${fixed}"`
        : `require("${fixed}")`;
    });

    if (changed) {
      fs.writeFileSync(file, src);
      console.log("🔧 alias → relative:", path.relative(ROOT, file));
    }
  }
  console.log(`✅ alias rewrite complete (${rewrites} updates).`);
}

rewriteAliases();
console.log("✅ ensure-required-files: done");
