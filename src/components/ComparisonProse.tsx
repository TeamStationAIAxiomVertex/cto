// src/components/ComparisonProse.tsx

import React from 'react';

interface ComparisonProseProps {
  vendorSlug: string;
}

// Define the content fetch function (placeholder for future MDX/API fetch)
async function fetchComparisonContent(slug: string): Promise<string> {
    // NOTE TO AGENT: In production, this would fetch pre-rendered NCLA v7-compliant
    // prose that directly addresses the specific competitive claims in the Fact Pack.
    
    // Strong, targeted prose for the primary competitor (BairesDev)
    if (slug === 'bairesdev') {
      return `
        <p>The strategic difference is simple: **Staff Augmentation** is a volume business; **Engineered Throughput** is a system. Staff Augmentation, practiced by large firms like BairesDev, aims to fill a seat quickly based on a resume screen and a few technical questions. Our approach, powered by **TeamStation AI**, is fundamentally different.</p>

        <h3>The Axiom Cortex™ Advantage: Measuring Potential, Not Past Jobs</h3>
        <p>The biggest vulnerability in the staff augmentation model is the vetting process. A candidate’s past title or employer is a poor predictor of success in a new environment. **Axiom Cortex™** bypasses this resume bias by focusing purely on innate **cognitive alignment** a developer's verifiable ability to problem-solve, learn, and adapt under pressure. We measure the *engine* itself, not just the mileage on the tires. This difference is what reduces mis-hire risk by more than 6x compared to standard interview screens.</p>

        <h3>The Real Cost of Latency: Daylight PR Flow</h3>
        <p>Staff augmentation vendors often promise time-zone overlap. We promise **Daylight PR Flow**. When code reviews consistently happen overnight, every question costs you 24 hours. The resulting latency is a hidden tax on your entire engineering organization. Our pods are strategically engineered for 5-8 hours of **core-working-day overlap** with the US, ensuring that code review, merging, and QA happen on the *same day*. This eliminates the overnight bottleneck that cripples sprint velocity for competitors who treat time-zone alignment as a perk, not a system requirement.</p>

        <p>For the CTO evaluating talent, the choice is not between two vendors selling headcount. It is between a partner providing **low-risk, engineered throughput** (TeamStation AI) and a firm providing **high-volume staff augmentation** (BairesDev). Choose the system that guarantees speed and quality.</p>
      `;
    }

    // Default fallback content for other slugs
    return `<p>This authoritative, NCLA v7-compliant comparison analysis for **${slug}** will load here, detailing the strategic difference between TeamStation AI’s Axiom Cortex™ approach and the vendor's model.</p>`;
}

/**
 * Renders the narrative prose for the competitive comparison page.
 */
const ComparisonProse: React.FC<ComparisonProseProps> = async ({ vendorSlug }) => {
    // 1. Fetch the NCLA v7-compliant HTML content
    const htmlContent = await fetchComparisonContent(vendorSlug);

    // 2. Safely render the HTML content
    return (
        <div 
            // Use dangerouslySetInnerHTML to render the pre-generated HTML 
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
    );
};

export default ComparisonProse;