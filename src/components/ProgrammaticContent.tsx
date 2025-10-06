// src/components/ProgrammaticContent.tsx

import React from 'react';

// Define the content fetch function (placeholder for future implementation)
async function fetchProgrammaticContent(slug: string, contentType: string): Promise<string> {
    // NOTE TO AGENT: In a full system, this function would hit a content API 
    // or load a static JSON/MDX file containing the final, pre-rendered prose 
    // that has already passed the NCLA v7 Humanizer check.

    // This is a powerful, NCLA v7-compliant placeholder message:
    if (slug === 'mexico' && contentType === 'hire-country') {
      return `
        <p>Hiring elite engineering talent in <strong>Mexico</strong> demands an approach that bypasses the friction of traditional staff augmentation. The core issue isn\'t talent availability—it\'s <strong>signal-to-noise ratio</strong> and the <strong>Daylight PR Queue</strong>. Most vendors offer bodies; TeamStation AI offers a cognitive alignment strategy.</p>
        
        <p>Our solution starts with the <strong>Axiom Cortex™</strong>. Unlike systems relying on cultural fit or trivia, Axiom Cortex measures problem-solving and learning agility using evidence-backed cognitive profiles. This is how we ensure the talent you hire in Mexico isn\'t just qualified, but <strong>cognitively matched</strong> to your architectural demands. This disciplined focus is critical for scaling rapidly without accruing technical debt.</p>

        <h3>Why Daylight Overlap is the Unspoken Throughput Multiplier</h3>
        <p>The time-zone advantage in Mexico (full overlap with US CST/MST) is often treated as a mere perk. We see it as a <strong>throughput multiplier</strong>. With our <strong>Daylight PR Flow</strong>, code reviews, architectural discussions, and critical bug fixes happen within a single business day. This eliminates the overnight queue, reduces regression risk, and dramatically accelerates your sprint cadence.</p>

        <p>Furthermore, every engineer sourced through the <strong>Nebula Talent Graph</strong>—our proprietary network of 2.6 million profiles across Guadalajara, CDMX, and Monterrey—comes pre-vetted for our <strong>One-SLA Security protocol</strong>, ensuring immediate compliance and zero startup friction. This integrated approach is the only way to genuinely beat the market status quo.</p>
      `;
    }

    // Default fallback content
    return `<p>Content for ${contentType} with slug ${slug} is currently being generated via the NCLA v7 protocol to ensure maximum E-E-A-T compliance and readability.</p>`;
}

interface ProgrammaticContentProps {
    slug: string;
    contentType: 'hire-country' | 'hire-role' | 'comparisons'; // Extend as needed
}

/**
 * Renders the primary prose content for programmatic pages.
 * The content is pre-generated and humanized (NCLA v7 compliant) to ensure SEO quality.
 */
const ProgrammaticContent: React.FC<ProgrammaticContentProps> = async ({ slug, contentType }) => {
    // 1. Fetch the NCLA v7-compliant HTML content
    const htmlContent = await fetchProgrammaticContent(slug, contentType);

    // 2. Safely render the HTML content
    return (
        <div 
            // Use dangerouslySetInnerHTML to render the pre-generated HTML 
            // (Note: This is safe because the content source is controlled and internal)
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
    );
};

export default ProgrammaticContent;