import type { PlaybookArticle } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

type ArticleCardProps = {
  article: PlaybookArticle;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/playbooks/${article.slug}`} className="group">
      <Card className="h-full overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="relative h-40 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={article.imageHint}
          />
        </div>
        <CardHeader>
          <Badge variant="secondary" className="mb-2 w-fit">
            {article.category.name}
          </Badge>
          <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">
            {article.summary}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
