
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
  content: string; // This will hold the full HTML content
  challenge: string;
  why: string;
  outcomes: string;
};

// A more robust function to extract a section based on a heading
function extractSection(content: string, heading: string): string {
    const regex = new RegExp(`## ${heading}[\\s\\S]*?((?:\\n(?:- |\\* |\\d+\\.)[\\s\\S]*?)*)(?=\\n##|$)`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const filenames = await fs.readdir(contentDirectory);
    const caseStudies = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(contentDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        // Remove frontmatter from content before parsing sections
        const mainContent = content;

        return {
          slug: data.slug,
          title: data.title,
          clientName: data.clientName,
          industry: data.industry,
          summary: data.summary,
          content: mainContent, // Pass the full content to be rendered as HTML
          challenge: extractSection(mainContent, 'The Challenge'),
          why: extractSection(mainContent, 'Why TeamStation AI'),
          outcomes: extractSection(mainContent, 'Outcomes') || extractSection(mainContent, 'Results'),
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
    const allStudies = await getAllCaseStudies();
    return allStudies.find(study => study.slug === slug) || null;
}
