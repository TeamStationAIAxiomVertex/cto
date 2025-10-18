
import { notFound } from 'next/navigation';
import { allTech, getAllTechSlugs } from '@/lib/tech'; // Import the new data-only access functions
import { ProgrammaticContent } from '@/components/ProgrammaticContent';
import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

// **CRITICAL: Ensure this export is visible and correct**
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const tech = allTech[slug]; // Access the tech data

  if (!tech || !tech.is_ready) {
    return {
      title: 'Technology Not Found',
      description: 'The requested technology page is not available.',
    };
  }

  return {
    title: tech.seo_title,
    description: tech.meta_description,
  };
}

// **CRITICAL FIX: Explicitly export the generateStaticParams function**
// This function MUST be correctly exported for SSG to occur.
export async function generateStaticParams() {
  const slugs = getAllTechSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Main Page Component
export default function TechPage({ params }: Props) {
  const slug = params.slug;
  const tech = allTech[slug];

  // Defensive check (already added, but vital)
  if (!tech || !tech.is_ready) {
    notFound();
  }

  // The ProgrammaticContent component will handle rendering the data object
  return <ProgrammaticContent tech={tech} />;
}
