
import * as React from "react";
import Link from "next/link";

export function DecisionCard({
  problem, stakes, approach, evidence, related = [],
}: {
  problem: string; stakes: string; approach: string; evidence: string;
  related?: { label: string; href: string }[];
}) {
  return (
    <section className="glass-panel gradient-ring rounded-2xl border border-border/70 p-6 space-y-4 my-16">
      <h3 className="text-xl font-bold">Decision Brief</h3>
      <p><strong className="text-destructive">Operating reality:</strong> {problem}</p>
      <p><strong>Business impact:</strong> {stakes}</p>
      <p><strong className="text-primary">Operating response:</strong> {approach}</p>
      <p
        dangerouslySetInnerHTML={{
          __html:
            "<strong>Evidence:</strong> " +
            evidence.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>'),
        }}
      />
      {related.length ? (
        <div className="pt-2">
          <div className="font-semibold">Related paths</div>
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
