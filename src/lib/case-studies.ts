
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'case-studies');

export type CaseStudy = {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  summary: string;
  content: string;
  challenge: string;
  why: string;
  outcomes: string;
  insights: string;
};

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const filenames = await fs.readdir(contentDirectory);
    const caseStudies = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(contentDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Simple regex to extract sections. This assumes H2 (##) headings.
        const challenge = content.match(/## The Challenge\s*([\s\S]*?)(?=## )/)?.[1]?.trim() ?? '';
        const why = content.match(/## Why TeamStation AI\s*([\s\S]*?)(?=## )/)?.[1]?.trim() ?? '';
        const outcomes = content.match(/## Outcomes\s*([\s\S]*?)(?=## )/)?.[1]?.trim() ?? '';
        const insights = content.match(/## Product Insights/)?.[0] ? content.split(/## Product Insights/)[1].trim() : '';

        const executiveSummary = content.match(/## Executive Summary\s*([\s\S]*?)(?=## )/)?.[1]?.trim() ?? '';

        return {
          slug: data.slug,
          title: data.title,
          clientName: data.clientName,
          industry: data.industry,
          summary: data.summary,
          content: executiveSummary,
          challenge,
          why,
          outcomes,
          insights,
        } as CaseStudy;
      })
    );
    return caseStudies;
  } catch (error) {
    console.error("Error reading case studies:", error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.find(study => study.slug === slug) || null;
}
