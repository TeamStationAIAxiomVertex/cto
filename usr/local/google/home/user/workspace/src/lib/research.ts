import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', 'content', 'research');

export type ResearchPaper = {
  slug: string;
  title: string;
  description: string;
  href: string;
  lastModified: string;
};

async function getFilenames(): Promise<string[]> {
    try {
        const filenames = fs.readdirSync(contentDirectory);
        return filenames.filter(filename => filename.endsWith('.md'));
    } catch (error) {
        console.error("Error reading research directory. This may be expected in some environments. Returning empty array.", error);
        return [];
    }
}

export async function getAllResearchSlugs(): Promise<string[]> {
    const filenames = await getFilenames();
    return filenames.map(filename => filename.replace(/\.md$/, ''));
}

export async function getResearchBySlug(slug: string): Promise<ResearchPaper | null> {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const stats = fs.statSync(filePath);
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      href: `/research/${slug}`,
      lastModified: (data.lastModified || data.date || stats.mtime).toISOString(),
    } as ResearchPaper;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.error(`Error reading research paper ${slug}:`, error);
    }
    return null;
  }
}
