
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
        // Ensure we don't try to process the new React page as a markdown file
        return filenames.filter(filename => filename.endsWith('.md'));
    } catch (error) {
        console.error("Error reading playbook directory:", error);
        return [];
    }
}

export async function getAllPlaybookSlugs(): Promise<string[]> {
    const filenames = await getFilenames();
    const markdownSlugs = filenames.map(filename => filename.replace(/\.md$/, ''));
    
    // Add slugs for custom React pages manually
    const customPageSlugs = ['build-vs-buy', 'bias-free-technical-hiring-axiom-cortex', 'latam-economics', 'tco-model'];
    
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
        // ENOENT means file not found. This is expected for custom pages.
        // We'll manually return metadata for them.
        if (error.code === 'ENOENT') {
            switch(slug) {
                case 'build-vs-buy':
                    return { slug, title: 'Build vs. Buy: A CTO’s Framework for Scaling Nearshore Teams', description: 'Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of Total Cost of Ownership (TCO), speed, and risk.', content: '' };
                case 'bias-free-technical-hiring-axiom-cortex':
                    return { slug, title: 'Stop Gambling on Resumes. Start De-risking Your Hires.', description: 'A playbook for replacing your broken, high-risk hiring process with a faster, fairer, and more accurate hiring engine powered by cognitive science.', content: '' };
                case 'latam-economics':
                    return { slug, title: 'LATAM Economics & TCO for CTOs | Nearshore Software Development Costs', description: 'A CFO-ready framework for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, covering salaries, hidden costs of mis-hires, and security risks.', content: '' };
                case 'tco-model':
                    return { slug: 'tco-model', title: 'The Computational Cost & TCO Playbook | TeamStation AI', description: 'A CFO-grade analysis of the true Total Cost of Ownership (TCO) of engineering teams, presented in Sandler-style "Computational Cost" cards.', content: '' };
                default:
                    return null;
            }
        }
        // For other errors, log them
        console.error(`Error reading playbook post ${slug}:`, error);
        return null;
    }
}
