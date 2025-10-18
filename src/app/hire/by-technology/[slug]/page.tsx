
import { notFound } from 'next/navigation';
import { allTech, getAllTechSlugs } from '@/lib/tech';
import { ProgrammaticContent } from '@/components/ProgrammaticContent';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const tech = allTech[slug];

  if (!tech || !tech.is_ready) {
    return {
      title: 'Technology Not Found',
      description: 'The requested technology page could not be found.',
    };
  }

  return {
    title: tech.seo_title,
    description: tech.meta_description,
  };
}

export async function generateStaticParams() {
  const slugs = getAllTechSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function TechPage({ params }: Props) {
  const slug = params.slug;
  const tech = allTech[slug];

  if (!tech || !tech.is_ready) {
    notFound();
  }

  return <ProgrammaticContent tech={tech} />;
}
