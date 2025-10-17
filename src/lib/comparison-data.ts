// src/lib/comparison-data.ts
import { VerdictRow } from '@/components/VerdictTable';

// --- 1. TYPE DEFINITIONS ---

export interface ComparisonClaim {
    metric: string;
    teamstationValue: string;
    competitorValue: string;
    context: string;
}

export interface ComparisonFaq {
    question: string;
    answer: string;
}

export interface ComparisonFactPack {
    vendorSlug: string;
    competitorName: string;
    title: string;
    meta: string;
    h1: string;
    keywords: string[];
    comparison_claims: ComparisonClaim[];
    faqs: ComparisonFaq[];
    internal_links: { text: string; url: string; }[];
}

// --- 2. DYNAMIC DATA SIMULATION ---

const MOCK_SLUGS = ['bairesdev', 'toptal', 'revelo'];

const MOCK_BAIREDEV_DATA: ComparisonFactPack = {
    vendorSlug: 'bairesdev',
    competitorName: 'BairesDev',
    title: 'TeamStation AI vs. BairesDev: The CTO’s Definitive Verdict',
    meta: 'A rigorous analysis for CTOs comparing TeamStation AI\'s Axiom Cortex™ Vetting against BairesDev\'s staff augmentation model. Optimize for throughput, not headcount.',
    h1: 'TeamStation AI vs. BairesDev: Why Cognitive Alignment Beats Staff Augmentation',
    keywords: ['BairesDev alternative', 'TeamStation vs BairesDev', 'nearshore vs staff aug', 'Axiom Cortex'],
    internal_links: [],
    faqs: [
        { question: "What is the core difference between TeamStation and BairesDev?", answer: "TeamStation focuses on cognitive-first vetting to build high-throughput, aligned teams. BairesDev uses a traditional staff augmentation model focused on headcount." },
        { question: "How does Axiom Cortex vetting work?", answer: "Axiom Cortex is a proprietary evaluation platform that measures problem-solving and learning agility, which are leading indicators of on-the-job success." },
    ],
    comparison_claims: [
        {
            metric: 'Vetting Methodology',
            teamstationValue: 'Cognition-First (Axiom Cortex™)',
            competitorValue: 'Traditional Resume/Interview Screen',
            context: 'Axiom Cortex measures problem-solving and learning agility, reducing mis-hire risk by 6x compared to screens reliant on cultural fit or trivia. BairesDev uses standard, volume-based vetting.'
        },
    ]
};

const MOCK_TOPTAL_DATA: ComparisonFactPack = {
    vendorSlug: 'toptal',
    competitorName: 'Toptal',
    title: 'TeamStation AI vs. Toptal: A Data-Driven Comparison',
    meta: 'Explore how TeamStation AI\'s cognitive vetting and team-based model provides a strategic advantage over Toptal\'s freelance marketplace approach.',
    h1: 'TeamStation AI vs. Toptal: The Strategic Choice for High-Performing Teams',
    keywords: ['Toptal alternative', 'TeamStation vs Toptal', 'freelance vs team', 'Axiom Cortex'],
    internal_links: [],
    faqs: [
        { question: "Is TeamStation a marketplace like Toptal?", answer: "No, TeamStation builds and manages cohesive, long-term engineering teams, not a freelance marketplace. We focus on team synergy and shared goals, which is a fundamental difference from the individual contractor model." },
        { question: "How does TeamStation's pricing compare to Toptal?", answer: "TeamStation's model is value-based, centered on team throughput and long-term ROI. Toptal's pricing is based on individual freelancer rates, which can fluctuate and don't account for the hidden costs of team integration and management." },
    ],
    comparison_claims: [
        {
            metric: 'Engagement Model',
            teamstationValue: 'Managed, Cohesive Teams',
            competitorValue: 'Freelance Marketplace',
            context: 'TeamStation provides fully-managed, cohesive teams that operate as a seamless extension of your organization. Toptal offers access to a pool of individual freelancers, requiring you to manage team integration and dynamics.'
        },
        {
            metric: 'Vetting Focus',
            teamstationValue: 'Cognitive Agility & Team Fit',
            competitorValue: 'Technical Skills & Experience',
            context: 'While Toptal has a rigorous screening process, it primarily focuses on technical proficiency. TeamStation\'s Axiom Cortex™ goes deeper, evaluating cognitive abilities and ensuring a strong fit within the team and your company culture.'
        }
    ]
};

const MOCK_REVELO_DATA: ComparisonFactPack = {
    vendorSlug: 'revelo',
    competitorName: 'Revelo',
    title: 'TeamStation AI vs. Revelo: A Deep Dive into Vetting and Team Cohesion',
    meta: 'Understand the critical differences between TeamStation\'s AI-driven team building and Revelo\'s marketplace for LATAM talent. ',
    h1: 'TeamStation AI vs. Revelo: Building Teams, Not Just Filling Seats',
    keywords: ['Revelo alternative', 'TeamStation vs Revelo', 'LATAM talent', 'Axiom Cortex'],
    internal_links: [],
    faqs: [
        { question: "Revelo focuses on LATAM talent. How is TeamStation different?", answer: "While we also recognize the immense talent in Latin America, our focus is on building high-performing, cohesive teams, not just providing individual developers. Our Axiom Cortex™ platform ensures that every team member has the cognitive abilities to excel, and our managed team model fosters a level of synergy that a marketplace like Revelo cannot match." },
        { question: "Can I hire individual developers from TeamStation?", answer: "We specialize in building and managing full, cohesive teams. We believe that the greatest value is unlocked when a team is built to work together from the ground up, and our model is designed to deliver that outcome. We do not offer individual staff augmentation." },
    ],
    comparison_claims: [
        {
            metric: 'Core Offering',
            teamstationValue: 'Managed, High-Throughput Teams',
            competitorValue: 'Marketplace for Individual Developers',
            context: 'TeamStation builds and manages end-to-end teams that are optimized for performance. Revelo provides a platform to hire individual developers from a pre-vetted pool, leaving the team-building and management responsibilities to you.'
        },
        {
            metric: 'Vetting Depth',
            teamstationValue: 'Predictive Cognitive Analysis',
            competitorValue: 'Skills and Language Proficiency',
            context: 'Revelo\'s vetting process is thorough, but it primarily validates technical skills and English proficiency. TeamStation\'s Axiom Cortex™ goes a step further, using cognitive science to predict a candidate\'s success and ensuring they have the problem-solving skills to thrive in a demanding environment.'
        }
    ]
};


// --- 3. DATA ACCESS FUNCTIONS ---

export async function getComparisonSlugs(): Promise<string[]> {
    return MOCK_SLUGS;
}

export async function getComparisonData(vendorSlug: string): Promise<ComparisonFactPack | null> {
    if (vendorSlug === 'bairesdev') return MOCK_BAIREDEV_DATA;
    if (vendorSlug === 'toptal') return MOCK_TOPTAL_DATA;
    if (vendorSlug === 'revelo') return MOCK_REVELO_DATA;
    
    const isMocked = MOCK_SLUGS.includes(vendorSlug);
    if (!isMocked) return null;

    return {
        ...MOCK_BAIREDEV_DATA, // Use as a template
        vendorSlug: vendorSlug,
        competitorName: vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1), 
        h1: `TeamStation AI vs. ${vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1)}: Why We Win on Throughput`,
        title: `TeamStation AI vs. ${vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1)}: An Honest Comparison`,
        meta: `Is ${vendorSlug.charAt(0).toUpperCase() + vendorSlug.slice(1)} the right choice? See how TeamStation AI\'s model compares on vetting, throughput, and security.`
    }
}

// --- 4. DATA TRANSFORMATION & SCHEMA GENERATION ---

export function generateVerdictRows(claims: ComparisonClaim[]): VerdictRow[] {
    if (!claims) {
        return [];
    }
    return claims.map((claim, index) => ({
        id: `verdict-${index}`,
        criterion: claim.metric,
        teamstationVerdict: claim.teamstationValue,
        competitorVerdict: claim.competitorValue,
        isWinningRow: true, // Defaulting to true as per the original logic's intent
    }));
}

export function generateFaqSchema(faqs: any) {
    // Basic structural return for JSON-LD schema to prevent build error
    if (!faqs || faqs.length === 0) return {};
    return { 
        "@context": "https://schema.org", 
        "@type": "FAQPage", 
        "mainEntity": faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        })) 
    };
}
