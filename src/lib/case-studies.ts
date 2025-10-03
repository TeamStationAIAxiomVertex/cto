import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { CaseStudy } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content/case-studies');

export async function getAllCaseStudySlugs() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy> {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const stats = fs.statSync(fullPath);

  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    lastModified: (data.lastModified || stats.mtime).toISOString(),
    ...data,
  } as CaseStudy;
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const fileNames = fs.readdirSync(contentDirectory);
  const allStudiesData = await Promise.all(fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    return getCaseStudyBySlug(slug);
  }));

  return allStudiesData.sort((a, b) => {
    if (a.clientName && b.clientName) {
        return a.clientName > b.clientName ? 1 : -1;
    }
    return 0;
  });
}
