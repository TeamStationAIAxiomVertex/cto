import { articles } from '@/lib/data';
import { notFound } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function PlaybookArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <header className="mb-8 space-y-2">
        <Link href={`/category/${article.category.slug}`} className="mb-2 block">
          <Badge>{article.category.name}</Badge>
        </Link>
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
          {article.title}
        </h1>
      </header>

      <Accordion type="single" collapsible className="mb-8 w-full" defaultValue="summary">
        <AccordionItem value="summary">
          <AccordionTrigger className="text-xl font-semibold">
            AI Summary
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
            {article.summary}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <article className="space-y-6 text-lg leading-relaxed text-foreground/90">
        {article.content.split('\n\n').map((paragraph, index) => {
          const isCodeBlock =
            paragraph.startsWith('<code>') && paragraph.endsWith('</code>');
          if (isCodeBlock) {
            return (
              <div
                key={index}
                className="my-6 overflow-x-auto rounded-lg bg-muted p-4"
              >
                <pre>
                  <code className="font-code text-sm">
                    {paragraph.slice(6, -7).trim()}
                  </code>
                </pre>
              </div>
            );
          }
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </div>
  );
}
