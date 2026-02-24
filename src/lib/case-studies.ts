
import "server-only";
import { promises as fsp } from "fs";
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

async function findDir(): Promise<string | null> {
  for (const d of CANDIDATE_DIRS) {
    try {
      await fsp.access(d);
      return d;
    } catch {
      // directory not accessible, try next
    }
  }
  return null;
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const dir = await findDir();
  if (!dir) return [];
  try {
    const files = (await fsp.readdir(dir)).filter(f => /\.mdx?$/.test(f));
    return Promise.all(
      files.map(async (file) => {
        const abs = path.join(dir, file);
        const [raw, stat] = await Promise.all([fsp.readFile(abs, "utf8"), fsp.stat(abs)]);
        const { data } = matter(raw);
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
      })
    );
  } catch (error) {
    console.error("Error reading case studies directory:", error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string | undefined): Promise<CaseStudy | null> {
  if (!slug) return null;
  const dir = await findDir();
  if (!dir) return null;

  const extensions = [".md", ".mdx"];
  let file: string | undefined;
  for (const ext of extensions) {
    const candidateFile = path.join(dir, `${slug}${ext}`);
    try {
      await fsp.access(candidateFile);
      file = candidateFile;
      break;
    } catch {
      // file not found, try next extension
    }
  }

  if (!file) return null;

  const [raw, stat] = await Promise.all([fsp.readFile(file, "utf8"), fsp.stat(file)]);
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);

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
