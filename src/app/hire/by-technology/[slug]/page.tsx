
import { notFound } from 'next/navigation';
import { allTech, getAllTechSlugs, TechEntry } from '@/lib/tech';
import { ProgrammaticContent } from '@/components/ProgrammaticContent';
import { Metadata } from 'next';
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

  // If the tech entry doesn't exist, return a 404-style metadata.
  if (!tech) {
    return {
      title: 'Technology Not Found',
      description: 'The requested technology page is not available.',
    };
  }

  const sanitize = (value: string) =>
    value
      .replace(/&/g, "and")
      .replace(/['"]/g, "")
      .replace(/[^\x00-\x7F]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  const normalizeTitle = (value: string) => {
    const safe = sanitize(value);
    return safe.length <= 60 ? safe : `${safe.slice(0, 57).trimEnd()}...`;
  };
  const normalizeDescription = (value: string) => {
    const safe = sanitize(value);
    return safe.length <= 145 ? safe : `${safe.slice(0, 142).trimEnd()}...`;
  };

  const title = normalizeTitle(
    tech.seo_title || `Hire ${tech.name} Engineers | TeamStation AI`
  );
  const description = normalizeDescription(
    tech.meta_description ||
      `Hire vetted ${tech.name} engineers to deliver faster with daylight overlap, role-specific evaluation, and lower execution risk for CTO and CIO teams.`
  );

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: `hire ${tech.name} engineers, nearshore ${tech.name}, latam ${tech.name}, distributed engineering`,
    alternates: {
      canonical: `/hire/by-technology/${slug}`,
    },
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

  // Defensive check for missing data.
  if (!tech) {
    notFound();
  }

  const pains = Array.isArray(tech.pains) ? tech.pains : [];
  const techWithIcon = {
    ...tech,
    pains: pains.map((p) => ({ ...p, icon: AlertTriangle })),
  };

  // The ProgrammaticContent component is now guaranteed to receive a valid tech object.
  return <ProgrammaticContent tech={techWithIcon} slug={slug} />;
}
