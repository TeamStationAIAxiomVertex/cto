"use client";

import { CircleHelp } from "lucide-react";
import { WithTooltip } from "@/components/ui/tooltip";

type CardGuidanceTooltipProps = {
  issue: string;
  solution: string;
  proof?: string;
  className?: string;
};

export default function CardGuidanceTooltip({
  issue,
  solution,
  proof,
  className = "",
}: CardGuidanceTooltipProps) {
  return (
    <WithTooltip
      content={
        <div className="max-w-xs space-y-2 text-xs leading-5">
          <p>
            <span className="font-semibold text-foreground">Issue:</span>{" "}
            <span className="text-muted-foreground">{issue}</span>
          </p>
          <p>
            <span className="font-semibold text-foreground">How we solve it:</span>{" "}
            <span className="text-muted-foreground">{solution}</span>
          </p>
          {proof ? (
            <p>
              <span className="font-semibold text-primary">Evidence:</span>{" "}
              <span className="text-muted-foreground">{proof}</span>
            </p>
          ) : null}
        </div>
      }
    >
      <button
        type="button"
        aria-label="View issue and solution details"
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors hover:bg-primary/20 ${className}`}
      >
        <CircleHelp className="h-4 w-4" />
      </button>
    </WithTooltip>
  );
}
