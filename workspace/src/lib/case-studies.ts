import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownToHtml } from './markdown-parser';

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
  path.join(process.cwd(), 'content', 'case-studies'),
  path.join(process.cwd(), 'src', 'content', 'case-studies'),
];

function findDir(): string | null {
  for (const d of CANDIDATE_DIRS) if (fs.existsSync(d)) return d;
  return null;
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const dir = findDir();
  if (!dir) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  return files.map((file) => {
    const abs = path.join(dir, file);
    const raw = fs.readFileSync(abs, 'utf8');
    const { data } = matter(raw);
    const stat = fs.statSync(abs);
    return {
      slug: file.replace(/\.mdx?$/, ''),
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
  const file = ['.md', '.mdx'].map(ext => path.join(dir, `${slug}${ext}`)).find(f => fs.existsSync(f));
  if (!file) return null;
  const raw = fs.readFileSync(file, 'utf8');
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
