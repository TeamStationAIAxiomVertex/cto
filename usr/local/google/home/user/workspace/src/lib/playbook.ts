
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', 'content', 'playbook');

// Statically define the slugs for the existing playbook pages.
// This prevents the build process from trying to find markdown files that no longer exist.
const playbookSlugs = [
    'bias-free-technical-hiring-axiom-cortex',
    'build-vs-buy',
    'latam-economics',
    'nearshore-vs-offshore',
    'tco-model'
];

export async function getAllPlaybookSlugs(): Promise<string[]> {
    return playbookSlugs;
}

export async function getPlaybookBySlug(slug: string) {
    try {
        const filePath = path.join(contentDirectory, `${slug}.mdx`); // Assuming .mdx, adjust if needed
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const stats = fs.statSync(filePath);
        const { data } = matter(fileContents);
        
        return {
            slug,
            title: data.title,
            description: data.description,
            lastModified: (data.lastModified || data.date || stats.mtime).toISOString(),
        };
    } catch (error) {
        console.error(`Could not get playbook for slug: ${slug}`, error);
        return null;
    }
}
