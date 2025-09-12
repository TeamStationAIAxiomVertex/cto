import { articles, categories } from '@/lib/data';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/article-card';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  const categoryArticles = articles.filter(
    (a) => a.category.slug === params.slug
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
          {category.name}
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          {category.description}
        </p>
      </header>

      {categoryArticles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">
          No articles found in this category yet.
        </p>
      )}
    </div>
  );
}
