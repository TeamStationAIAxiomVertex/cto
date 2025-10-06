
import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown-parser";

export type CaseStudy = {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  summary: string;
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
  const files = fs.readdirSync(dir).filter(f => /\.mdx?$/.test(f));
  return files.map(file => {
    const abs = path.join(dir, file);
    const raw = fs.readFileSync(abs, "utf8");
    const { data } = matter(raw);
    const stat = fs.statSync(abs);
    return {
      slug: file.replace(/\.mdx?$/, ""),
      title: String(data.title ?? data.clientName ?? "Case Study"),
      clientName: String(data.clientName ?? data.title ?? ""),
      industry: data.industry ?? "",
      summary: String(data.summary ?? data.description ?? ""),
      ogImage: data.ogImage,
      lastModified: stat.mtime.toISOString(),
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
  const file = [".md", ".mdx"].map(ext => path.join(dir, `${slug}${ext}`)).find(f => fs.existsSync(f));
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  const stat = fs.statSync(file);
  return {
    slug,
    title: String(data.title ?? data.clientName ?? "Case Study"),
    clientName: String(data.clientName ?? data.title ?? ""),
    industry: data.industry ?? "",
    summary: String(data.summary ?? data.description ?? ""),
    ogImage: data.ogImage,
    lastModified: stat.mtime.toISOString(),
    contentHtml: html,
    challenge: data.challenge,
    outcomes: data.outcomes,
    techStack: data.techStack,
    canonical: data.canonical,
  };
}
export default { getAllCaseStudies, getCaseStudyBySlug };
