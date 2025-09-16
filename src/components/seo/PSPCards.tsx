// server component — no "use client"
import Link from "next/link";

export type PSPItem = {
  title: string;           // short pain hook
  pain: string;            // P: the pain, stated crisply
  stir: string;            // S: stir / stakes (what it costs to ignore)
  prescription: string;    // P: the plan / what to do instead
  proof?: string;          // numbers / concrete evidence
  cta?: { label: string; href: string };
};

export default function PSPCards({ items, heading }: { items: PSPItem[]; heading?: string }) {
  return (
    <section aria-label={heading || "Decision Cards"} className="mt-10">
      {heading ? <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{heading}</h2> : null}
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <article key={it.title} className="rounded-lg border bg-card shadow-sm p-6">
            <h3 className="text-lg font-semibold text-foreground">{it.title}</h3>

            <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Pain —</span> {it.pain}</p>
              <p><span className="font-semibold text-foreground">Stakes —</span> {it.stir}</p>
              <p><span className="font-semibold text-foreground">Prescription —</span> {it.prescription}</p>
              {it.proof ? (
                <p className="text-foreground/80"><span className="font-semibold">Proof —</span> {it.proof}</p>
              ) : null}
            </div>

            {it.cta ? (
              <div className="mt-4 pt-4 border-t border-border/60">
                <Link href={it.cta.href} className="text-primary font-medium hover:underline">
                  {it.cta.label} →
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
