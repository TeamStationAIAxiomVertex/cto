// src/lib/playbook-data.ts

// --- 1. TYPE DEFINITIONS (E-E-A-T Focus) ---

export type Author = {
    name: string;
    title: string;
    credentials: string;
    imageUrl?: string;
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

// Define a neutral, factual attribution used until real author records are available.
const MOCK_AUTHOR_CTO: Author = {
    name: 'TeamStation AI Research and Editorial Team',
    title: 'Editorial and Research Attribution',
    credentials: 'Content is maintained by the TeamStation AI editorial workflow and reviewed against internal doctrine, operating models, and research references.',
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

const MOCK_DATA_AXIOM_CORTEX: PlaybookFactPack = {
    slug: 'bias-free-technical-hiring-axiom-cortex',
    title: 'Bias-Free Technical Hiring with Axiom Cortex™',
    meta: 'Learn how to eliminate hiring bias and identify top performers with Axiom Cortex™, a cognitive evaluation platform.',
    date: '2025-05-15',
    author: MOCK_AUTHOR_CTO,
    keywords: ['Hiring Bias', 'Axiom Cortex', 'Technical Vetting', 'Cognitive Science', 'Performance Prediction'],
    toc: [
        { id: 'problem-with-interviews', level: 2, title: 'The Flawed Proxy: Why Traditional Interviews Fail' },
        { id: 'cognitive-load-testing', level: 2, title: 'Axiom Cortex™: Measuring What Matters' },
        { id: 'how-it-works', level: 3, title: 'Simulating Real-World Problem Solving' },
        { id: 'validation', level: 2, title: 'Case Study: 6x Reduction in Mis-Hires' },
        { id: 'implementation', level: 2, title: 'Integrating Axiom Cortex™ into Your Workflow' },
    ],
};

const MOCK_DATA_LATAM_ECONOMICS: PlaybookFactPack = {
    slug: 'latam-economics',
    title: 'The Economic Case for LATAM Nearshore Teams',
    meta: 'A data-driven analysis of the total cost of ownership (TCO) for high-performing nearshore teams in Latin America.',
    date: '2025-06-01',
    author: MOCK_AUTHOR_CTO,
    keywords: ['LATAM Economics', 'Total Cost of Ownership', 'Nearshore Value', 'Engineering ROI', 'Global Talent'],
    toc: [
        { id: 'beyond-salary', level: 2, title: 'Beyond Salary: The TCO Equation' },
        { id: 'productivity-index', level: 2, title: 'The Productivity Index: Output per Dollar' },
        { id: 'attrition-costs', level: 3, title: 'Hidden Costs: The Price of Attrition' },
        { id: 'fully-loaded-model', level: 2, title: 'Financial Model: Fully-Loaded Cost Analysis' },
        { id: 'summary', level: 2, title: 'Summary: The Strategic ROI of LATAM' },
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
    if (slug === 'bias-free-technical-hiring-axiom-cortex') return MOCK_DATA_AXIOM_CORTEX;
    if (slug === 'latam-economics') return MOCK_DATA_LATAM_ECONOMICS;

    // Simple mock for other slugs to ensure SSG works, but returns null if truly not found.
    const isMocked = MOCK_SLUGS.includes(slug);
    if (!isMocked) return null;

    return {
        ...MOCK_DATA_NEARSHORE,
        slug: slug,
        title: `Strategy Deep Dive: ${slug.replace(/-/g, ' ')}`,
    }
}
