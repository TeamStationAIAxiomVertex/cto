// src/lib/playbook-data.ts

// --- 1. TYPE DEFINITIONS (E-E-A-T Focus) ---

export type Author = {
    name: string;
    title: string;
    credentials: string; // e.g., "Former AWS Principal Engineer, 20+ years in distributed systems"
    imageUrl: string; // For the author profile picture
};

export type TocItem = {
    id: string; // Anchor link ID (e.g., #daylight-flow)
    level: number; // h2 = 2, h3 = 3
    title: string;
};

// The core structure for a single Playbook chapter's data
export type PlaybookFactPack = {
    slug: string;
    title: string;
    meta: string;
    date: string; // ISO 8601 date string for structured data
    author: Author;
    keywords: string[];
    toc: TocItem[];
};

// --- 2. DYNAMIC DATA SIMULATION (Placeholder for Database/CMS Fetch) ---

// Define a set of programmatic slugs for static generation
const MOCK_SLUGS = ['nearshore-vs-offshore', 'bias-free-technical-hiring-axiom-cortex', 'latam-economics'];

// Define the high-authority author for E-E-A-T
const MOCK_AUTHOR_CTO: Author = {
    name: 'Dr. Evelyn Reed',
    title: 'Chief Strategy Officer & Author',
    credentials: 'PhD in Cognitive Computing, Former VP of Engineering at Google X, 20+ patents in AI Vetting.',
    imageUrl: '/authors/evelyn-reed.jpg', // Placeholder image URL
};

// Full data pack simulation for a key pillar chapter
const MOCK_DATA_NEARSHORE: PlaybookFactPack = {
    slug: 'nearshore-vs-offshore',
    title: 'The CTO\'s Guide: Nearshore vs. Offshore Development Strategy',
    meta: 'Analyze the trade-offs of nearshore (LATAM) vs. offshore (Asia/Eastern Europe) engineering talent. Focus on Daylight PR Flow and time-to-productivity.',
    date: '2025-05-01',
    author: MOCK_AUTHOR_CTO,
    keywords: ['Nearshore', 'Offshore', 'LATAM', 'Hiring Strategy', 'Timezone Overlap', 'Productivity'],
    toc: [
        { id: 'introduction', level: 2, title: 'Introduction: The Unspoken Cost of Async' },
        { id: 'daylight-flow', level: 2, title: 'Daylight PR Flow: The Throughput Multiplier' },
        { id: 'latam-advantage', level: 3, title: 'LATAM: A Cultural and Cognitive Fit' },
        { id: 'cost-risk', level: 2, title: 'Cost vs. Risk: Why Cheapest is not Cheapest' },
        { id: 'conclusion', level: 2, title: 'Conclusion: Building a 100% Aligned Pod' },
    ],
};


/**
 * Retrieves all available programmatic slugs for Next.js build configuration (SSG).
 */
export async function getPlaybookSlugs(): Promise<string[]> {
    // In production, this would query a CMS API for all published slugs.
    return MOCK_SLUGS;
}

/**
 * Retrieves the full data pack for a given Playbook chapter slug.
 */
export async function getPlaybookData(slug: string): Promise<PlaybookFactPack | null> {
    // In production, this would query a CMS database with the slug.
    if (slug === 'nearshore-vs-offshore') return MOCK_DATA_NEARSHORE;
    
    // Simple mock for other slugs to ensure SSG works, but returns null if truly not found.
    const isMocked = MOCK_SLUGS.includes(slug);
    if (!isMocked) return null;

    return {
        ...MOCK_DATA_NEARSHORE,
        slug: slug,
        title: `Strategy Deep Dive: ${slug.replace(/-/g, ' ')}`,
    }
}