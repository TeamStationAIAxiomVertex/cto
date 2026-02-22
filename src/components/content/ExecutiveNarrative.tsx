import type { ExecutiveFlow } from "@/content/executiveFlow";

export function ExecutiveNarrative({
  flow,
  className,
}: {
  flow: ExecutiveFlow;
  className?: string;
}) {
  const classes = ["space-y-4 text-sm leading-6 text-muted-foreground", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <p>{flow.reality}</p>
      <p>{flow.cost}</p>
      <p>{flow.desiredState}</p>
      <p>{flow.operatingModel}</p>
      <p>{flow.evidence}</p>
      <p>{flow.riskReversal}</p>
      <p>{flow.nextStep}</p>
    </section>
  );
}
