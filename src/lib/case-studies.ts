
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import placeholderImages from '@/app/lib/placeholder-images.json';
import type { CaseStudy as CaseStudyType } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content', 'case-studies');

type PlaceholderImage = {
    src: {
        url: string;
        width: number;
        height: number;
    };
    aiHint: string;
};

export type CaseStudy = CaseStudyType & {
  ogImage: PlaceholderImage;
};

// A more robust function to extract a section based on a heading
function extractSection(content: string, heading: string): string {
    const regex = new RegExp(`## ${heading}[\\s\\S]*?((?:\\n(?:- |\\* |\\d+\\.)[\\s\\S]*?)*)(?=\\n##|$)`, 'i');
    const match = content.match(regex);
    if (match && match[1]) return match[1].trim();

    // Fallback for sections that are just a single paragraph without lists
    const paraRegex = new RegExp(`## ${heading}\\n\\n([\\s\\S]+?)(?=\\n\\n##|$)`, 'i');
    const paraMatch = content.match(paraRegex);
    return paraMatch ? paraMatch[1].trim() : '';
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const filenames = await fs.readdir(contentDirectory);
    const caseStudies = await Promise.all(
      filenames.map(async (filename) => {
        if (!filename.endsWith('.md')) return null;
        const filePath = path.join(contentDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        const slug = data.slug as keyof typeof placeholderImages.caseStudies;
        const imageInfo = placeholderImages.caseStudies[slug] || { 
            src: { url: 'https://picsum.photos/seed/default/600/400', width: 600, height: 400 },
            aiHint: 'abstract technology'
        };


        return {
          slug: data.slug,
          title: data.title,
          clientName: data.clientName,
          industry: data.industry,
          summary: data.summary,
          content: content, 
          challenge: extractSection(content, 'The Challenge'),
          why: extractSection(content, 'Why TeamStation AI'),
          outcomes: extractSection(content, 'Outcomes') || extractSection(content, 'Results'),
          ogImage: imageInfo,
          techStack: data.techStack || [],
          canonical: data.canonical,
        } as CaseStudy;
      })
    );
    return caseStudies.filter((study): study is CaseStudy => study !== null);
  } catch (error) {
    console.error("Error reading case studies:", error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    try {
        const allStudies = await getAllCaseStudies();
        const study = allStudies.find(study => study.slug === slug);
        return study || null;
    } catch (error) {
        console.error(`Error getting case study by slug ${slug}:`, error);
        return null;
    }
}
