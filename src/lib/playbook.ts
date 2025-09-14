import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'playbook');

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
