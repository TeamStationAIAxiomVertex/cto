
import { notFound } from 'next/navigation';
import { allTech, getAllTechSlugs, TechEntry } from '@/lib/tech';
import { ProgrammaticContent } from '@/components/ProgrammaticContent';
import { Metadata } from 'next';
import React from 'react';
import { AlertTriangle } from 'lucide-react'; // Correctly import the icon

type Props = {
  params: {
    slug: string;
  };
};

// This is the definitive data-fetching and metadata generation function.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  // Defensively access the tech object.
  const tech = (allTech as Record<string, TechEntry>)[slug];

  // If the tech entry doesn't exist or isn't ready, return a 404-style metadata.
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

// This function generates all the static paths for SSG.
export async function generateStaticParams() {
  const slugs = getAllTechSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// This is the main page component.
export default function TechPage({ params }: Props) {
  const slug = params.slug;
  const tech = (allTech as Record<string, TechEntry>)[slug];

  // CRITICAL FIX: Add a defensive check.
  // This ensures that if the data is missing or malformed, we immediately 404.
  // The `is_ready` flag is the final gate before rendering.
  if (!tech || !tech.is_ready) {
    notFound();
  }
  
  const techWithIcon = {
    ...tech,
    pains: tech.pains.map(p => ({...p, icon: AlertTriangle }))
  }

  // The ProgrammaticContent component is now guaranteed to receive a valid tech object.
  return <ProgrammaticContent tech={techWithIcon} />;
}
