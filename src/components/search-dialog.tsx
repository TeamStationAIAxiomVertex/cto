"use client";

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Search } from 'lucide-react';
import type { PlaybookArticle } from '@/lib/data';
import { articles } from '@/lib/data';
import { useRouter } from 'next/navigation';

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredArticles = query
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.summary.toLowerCase().includes(query.toLowerCase()) ||
          article.category.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (slug: string) => {
    router.push(`/playbooks/${slug}`);
    setOpen(false);
    setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        >
          <Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
          <span className="hidden xl:inline-flex">Search playbook...</span>
          <span className="sr-only">Search playbook</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for articles..."
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mt-4 max-h-[400px] overflow-y-auto">
          {query && filteredArticles.length > 0 ? (
            <ul className="space-y-1">
              {filteredArticles.map((article) => (
                <li key={article.id}>
                  <button
                    onClick={() => handleSelect(article.slug)}
                    className="flex w-full cursor-pointer items-start gap-3 rounded-md p-2 text-left hover:bg-accent"
                  >
                    <FileText className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">{article.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {article.category.name}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : query ? (
            <p className="py-4 text-center text-muted-foreground">
              No results found.
            </p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
