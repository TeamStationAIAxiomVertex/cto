import * as React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function ExecutivePageFrame({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function ExecutiveSection({ className, ...props }: DivProps) {
  return <section className={cn("exec-section", className)} {...props} />;
}

export function ExecutivePanel({
  as: Comp = "div",
  className,
  ...props
}: DivProps & { as?: keyof React.JSX.IntrinsicElements }) {
  return <Comp className={cn("surface-card glass-panel gradient-ring p-8 md:p-10", className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <header className={cn(centered && "text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
      ) : null}
      <h2 className={cn("text-2xl md:text-3xl font-bold text-foreground", eyebrow && "mt-2")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-3 text-muted-foreground leading-7", centered && "mx-auto max-w-3xl")}>
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function ChecklistSteps({
  items,
  className,
}: {
  items: Array<{ title: string; body: string }>;
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-4 md:grid-cols-3", className)}>
      {items.map((item, idx) => (
        <li key={item.title} className="rounded-xl border border-border/70 bg-background/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Step {idx + 1}
          </p>
          <h3 className="mt-2 text-base font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-6">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FAQList({
  items,
  className,
}: {
  items: Array<{ q: string; a: string }>;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <article key={item.q} className="rounded-xl border border-border/70 bg-background/70 p-5">
          <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-6">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

export function ProofStrip({
  items,
  className,
}: {
  items: Array<{ label: string; value: string; note?: string }>;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-border/70 bg-background/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
          <p className="mt-2 text-base font-semibold text-foreground">{item.value}</p>
          {item.note ? <p className="mt-1 text-xs text-muted-foreground">{item.note}</p> : null}
        </div>
      ))}
    </div>
  );
}
