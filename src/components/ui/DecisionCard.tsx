
import * as React from "react";
import Link from "next/link";

export function DecisionCard({
  problem, stakes, approach, evidence, related = [],
}: {
  problem: string; stakes: string; approach: string; evidence: string;
  related?: { label: string; href: string }[];
}) {
  return (
    <section className="rounded-lg border bg-card p-6 space-y-4 my-16">
      <h3 className="text-xl font-bold">Decision Brief</h3>
      <p><strong className="text-destructive">Problem:</strong> {problem}</p>
      <p><strong>Stakes:</strong> {stakes}</p>
      <p><strong className="text-primary">Approach:</strong> {approach}</p>
      <p
        dangerouslySetInnerHTML={{
          __html:
            "<strong>Evidence:</strong> " +
            evidence.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>'),
        }}
      />
      {related.length ? (
        <div className="pt-2">
          <div className="font-semibold">Related</div>
          <ul className="list-disc pl-5">
            {related.map((r, i) => (
              <li key={i}><Link className="text-primary hover:underline" href={r.href}>{r.label}</Link></li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
export default DecisionCard;
