import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { articles, categories } from '@/lib/data';
import Link from 'next/link';
import ArticleCard from '@/components/article-card';

export default function Home() {
  const recommendedArticles = articles.slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
          TeamStation AI Playbook
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Your intelligent guide for team success. Find proven strategies, get
          personalized recommendations, and excel in your role.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tighter mb-4 font-headline">
          Recommended For You
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recommendedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tighter mb-4 font-headline">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.slug}
              className="group"
            >
              <Card className="flex h-full flex-col justify-between transition-all group-hover:border-primary group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
