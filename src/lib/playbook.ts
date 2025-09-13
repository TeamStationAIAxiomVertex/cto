
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'playbook');

export type PlaybookPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

async function getFilenames(): Promise<string[]> {
    try {
        const filenames = await fs.readdir(contentDirectory);
        // Filter out files that now have custom pages
        return filenames.filter(filename => {
            return filename.endsWith('.md') && 
                   !['build-vs-buy.md', 'security-compliance.md'].includes(filename);
        });
    } catch (error) {
        console.error("Error reading playbook directory:", error);
        return [];
    }
}


export async function getAllPlaybookSlugs(): Promise<string[]> {
    const filenames = await getFilenames();
    return filenames.map(filename => filename.replace(/\.md$/, ''));
}

export async function getPlaybookBySlug(slug: string): Promise<PlaybookPost | null> {
  // If the slug is for a custom page, return null to avoid errors.
  if (['build-vs-buy', 'security-compliance'].includes(slug)) {
    return null;
  }
  const filePath = path.join(contentDirectory, `${slug}.md`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      content,
    } as PlaybookPost;
  } catch (error) {
    console.error(`Error reading playbook post ${slug}:`, error);
    return null;
  }
}
