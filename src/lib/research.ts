
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'research');

export type ResearchPaper = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

async function getFilenames(): Promise<string[]> {
    try {
        const filenames = await fs.readdir(contentDirectory);
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
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      href: `/research/${slug}`,
    } as ResearchPaper;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.error(`Error reading research paper ${slug}:`, error);
    } else {
        // In environments where fs is not fully available or the file doesn't exist,
        // it's better to return null than to crash the build.
        console.warn(`Research paper not found at ${filePath}, returning null.`);
    }
    return null;
  }
}
