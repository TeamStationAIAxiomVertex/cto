
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
        return filenames.filter(filename => filename.endsWith('.md'));
    } catch (error) {
        console.error("Error reading playbook directory:", error);
        return [];
    }
}


export async function getAllPlaybookSlugs(): Promise<string[]> {
    const filenames = await getFilenames();
    const markdownSlugs = filenames.map(filename => filename.replace(/\.md$/, ''));
    
    // Add slugs for custom pages. 'security-compliance' is handled as a special case now
    const customPageSlugs = ['build-vs-buy', 'bias-free-technical-hiring-axiom-cortex', 'latam-economics', 'nearshore-vs-offshore', 'security-compliance'];
    
    // Combine and remove duplicates
    return [...new Set([...markdownSlugs, ...customPageSlugs])];
}

export async function getPlaybookBySlug(slug: string): Promise<PlaybookPost | null> {
  // Special handling for security-compliance which is now the Trust page
  if (slug === 'security-compliance') {
      return {
          slug: 'security-compliance',
          title: 'Security & Compliance',
          description: 'The playbook for audit-ready nearshore operations. Learn about our nearshore compliance for GDPR, SSO, MDM & device control for LATAM teams.',
          content: '' // No content needed as it links externally
      }
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
    if (error.code !== 'ENOENT') {
        console.error(`Error reading playbook post ${slug}:`, error);
    }
    // This can be null for custom pages that don't have a backing .md file
    // We'll fetch their metadata manually
     switch(slug) {
        case 'build-vs-buy':
            return { slug, title: 'Build vs. Buy: A CTO’s Framework for Scaling Nearshore Teams', description: 'Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of Total Cost of Ownership (TCO), speed, and risk.', content: '' };
        case 'bias-free-technical-hiring-axiom-cortex':
            return { slug, title: 'Stop Gambling on Resumes. Start De-risking Your Hires.', description: 'A playbook for replacing your broken, high-risk hiring process with a faster, fairer, and more accurate hiring engine powered by cognitive science.', content: '' };
        case 'latam-economics':
            return { slug, title: 'LATAM Economics & TCO for CTOs | Nearshore Software Development Costs', description: 'A CFO-ready framework for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, covering salaries, hidden costs of mis-hires, and security risks.', content: '' };
        case 'nearshore-vs-offshore':
            return { slug, title: 'Nearshore vs. Offshore: The Strategic Choice for CTOs | TeamStation AI', description: 'A framework for CTOs to diagnose the true cost—and risk—of their global talent strategy, moving beyond cost per hour to Total Cost of Ownership.', content: '' };
        default:
            return null;
    }
  }
}
