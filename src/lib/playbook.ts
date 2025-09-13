
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
            return filename.endsWith('.md');
        });
    } catch (error) {
        console.error("Error reading playbook directory:", error);
        return [];
    }
}


export async function getAllPlaybookSlugs(): Promise<string[]> {
    const filenames = await getFilenames();
    // Add slugs for custom pages
    const customPageSlugs = ['build-vs-buy', 'bias-free-technical-hiring-axiom-cortex', 'latam-economics', 'nearshore-vs-offshore'];
    const markdownSlugs = filenames.map(filename => filename.replace(/\.md$/, ''));
    
    // Combine and remove duplicates
    return [...new Set([...markdownSlugs, ...customPageSlugs])];
}

export async function getPlaybookBySlug(slug: string): Promise<PlaybookPost | null> {
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
    // This is expected for custom pages, so we don't log an error
    if (error.code !== 'ENOENT') {
        console.error(`Error reading playbook post ${slug}:`, error);
    }
    return null;
  }
}
