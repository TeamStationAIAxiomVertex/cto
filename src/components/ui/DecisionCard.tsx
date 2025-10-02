
import { ReactNode } from "react";
import Link from "next/link";

interface DecisionCardProps {
  problem: string;
  stakes: string;
  approach: string;
  evidence: string;
  related?: { label: string; href: string }[];
}

export function DecisionCard({ problem, stakes, approach, evidence, related }: DecisionCardProps) {
  return (
    <div className="rounded-2xl border bg-card shadow-sm p-6 space-y-4 my-16">
      <h3 className="text-lg font-semibold text-foreground">Executive Insight</h3>

      <div className="space-y-2 text-sm">
        <p><span className="font-bold text-destructive">The Problem:</span> <span className="text-muted-foreground">{problem}</span></p>
        <p><span className="font-bold text-orange-500">Why It Matters:</span> <span className="text-muted-foreground">{stakes}</span></p>
        <p><span className="font-bold text-primary">Our Approach:</span> <span className="text-muted-foreground">{approach}</span></p>
        <p><span className="font-bold text-blue-500">Evidence:</span> <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: evidence.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>') }}></span></p>
      </div>

      {related && related.length > 0 && (
        <div className="pt-4 border-t border-border text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Explore further:</span>{" "}
          {related.map((r, i) => (
            <Link key={i} href={r.href} className="text-primary hover:underline ml-2">
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
