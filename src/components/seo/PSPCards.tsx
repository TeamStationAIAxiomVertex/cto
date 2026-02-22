import Link from "next/link";
import { PainPoint } from "@/lib/tech";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import React from "react";
import CardGuidanceTooltip from "@/components/ui/card-guidance-tooltip";

// Helper to get an icon component by its string name
const getIcon = (name: string) => {
  const Icon = (Icons as any)[name];
  if (Icon) {
    return <Icon className="mr-2 text-primary" />;
  }
  return null; // Or a default icon
};

export default function PSPCards({
  items,
  heading,
}: {
  items: PainPoint[];
  heading?: string;
}) {
  return (
    <section aria-label={heading || "Decision Cards"} className="mt-10">
      {heading ? (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          {heading}
        </h2>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <article
            key={it.problem}
            className="glass-panel gradient-ring rounded-2xl border border-border/70 shadow-sm p-6 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <span className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                  {React.createElement(it.icon, {
                    className: "h-6 w-6 text-primary",
                  })}
                </span>
                {it.problem}
              </h3>
              <CardGuidanceTooltip
                issue={it.pain}
                solution={it.solution}
                proof={it.kpi}
              />
            </div>

            <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground flex-grow">
              <p>
                <span className="font-semibold text-foreground">Operating reality  </span>{" "}
                {it.pain}
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  Operating response  
                </span>{" "}
                {it.solution}
              </p>
              {it.kpi ? (
                <p className="text-foreground/80">
                  <span className="font-semibold">Evidence  </span> {it.kpi}
                </p>
              ) : null}
            </div>

            <div className="mt-4 pt-4 border-t border-border/60">
              <Button asChild>
                <Link href="/playbook">Read the Playbook →</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
