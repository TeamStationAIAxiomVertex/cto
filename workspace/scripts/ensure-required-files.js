const fs = require("fs");
const path = require("path");

const files = [
  ["src/lib/markdown-parser.ts", `import { remark } from "remark";
import html from "remark-html";
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown || "");
  return String(result);
}
export default markdownToHtml;`],

  ["src/lib/case-studies.ts", `import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdown-parser";
export type CaseStudy = {
  slug: string; clientName?: string; industry?: string; summary?: string;
  lastModified?: string; ogImage?: { src?: { url?: string }; aiHint?: string };
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
  const dir = findDir(); if (!dir) return [];
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
  const dir = findDir(); if (!dir) return null;
  const file = [".md", ".mdx"].map(ext => path.join(dir, \`\${slug}\${ext}\`)).find(f => fs.existsSync(f));
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  const stat = fs.statSync(file);
  return {
    slug, clientName: data.clientName || data.title, industry: data.industry,
    summary: data.summary || data.description, ogImage: data.ogImage,
    lastModified: stat.mtime.toISOString(), contentHtml: html,
  };
}
export default { getAllCaseStudies, getCaseStudyBySlug };`],

  ["src/components/SpotifyIcon.tsx", `import * as React from "react";
export default function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (<svg viewBox="0 0 168 168" aria-hidden="true" focusable="false" {...props}>
    <path d="M84 0a84 84 0 1 0 0 168 84 84 0 0 0 0-168Zm38.7 121.3a6 6 0 0 1-8.3 2c-22.8-14-51.6-17.2-85.3-9.4a6 6 0 1 1-2.7-11.7c36.7-8.4 68.5-4.7 93 10.7a6 6 0 0 1 2.3 8.4Zm11-24.4a7.4 7.4 0 0 1-10.2 2.4c-26.1-16-65.9-20.7-96.7-11.3a7.4 7.4 0 1 1-4.2-14.2c34.6-10.2 78-5 107.6 13.1a7.4 7.4 0 0 1 3.5 10Zm1.3-25.9c-31-18.4-82.2-20.6-111.7-11.3a9 9 0 1 1-5.3-17.2c34.2-10.5 90.2-7.8 126 13.3a9 9 0 1 1-9 15.2Z" fill="currentColor"/>
  </svg>);
}`],

  ["src/components/ui/tooltip.tsx", `import * as React from "react";
export function TooltipProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Tooltip({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipTrigger({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipContent({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function WithTooltip({ content, children, as: Tag = "span", className }:
  { content: React.ReactNode; children: React.ReactNode; as?: keyof JSX.IntrinsicElements; className?: string }) {
  const title = typeof content === "string" ? content : undefined;
  return <Tag title={title} className={className} data-hint={title}>{children}</Tag>;
}
export default { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, WithTooltip };`],

  ["src/components/ui/accordion.tsx", `import * as React from "react";
export function Accordion({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) { return <div {...rest}>{children}</div>; }
export function AccordionItem({ children, value }: { children: React.ReactNode; value: string }) { return <section data-accordion-item={value}>{children}</section>; }
export function AccordionTrigger({ children }: { children: React.ReactNode }) { return <div role="button" tabIndex={0}>{children}</div>; }
export function AccordionContent({ children }: { children: React.ReactNode }) { return <div>{children}</div>; }
export default { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`],
];

for (const [rel, content] of files) {
  const abs = path.join(process.cwd(), rel);
  if (!fs.existsSync(abs)) {
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content);
    console.log(\`🧩 created \${rel}\`);
  } else {
    // quick sanity: non-empty
    const ok = fs.readFileSync(abs, "utf8").trim().length > 0;
    if (!ok) {
      fs.writeFileSync(abs, content);
      console.log(\`🧩 fixed empty \${rel}\`);
    }
  }
}
