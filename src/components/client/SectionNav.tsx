"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SectionItem = {
  id: string;
  label: string;
};

export default function SectionNav({
  items,
  cta,
  className,
}: {
  items: SectionItem[];
  cta?: React.ReactNode;
  className?: string;
}) {
  const [activeId, setActiveId] = React.useState(items[0]?.id ?? "");

  React.useEffect(() => {
    if (!items.length) return;
    const els = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      className={cn(
        "sticky top-4 z-30 rounded-xl border border-border/70 bg-background/80 p-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/65",
        className
      )}
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <nav aria-label="Page sections" className="flex flex-wrap gap-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "a11y-tap-target rounded-md border text-sm font-medium transition-ui focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border/70 bg-background/70 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        {cta ? <div className="flex items-center gap-2">{cta}</div> : null}
      </div>
    </div>
  );
}
