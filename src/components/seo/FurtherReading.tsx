
import Link from "next/link";

export type ReadingItem = { href: string; title: string; desc?: string };

export default function FurtherReading({
  items = [],
  title = "Further reading",
}: { items?: ReadingItem[]; title?: string }) {
  if (!items.length) return null;
  return (
    <aside aria-label={title} className="space-y-2">
      <h2 className="text-base font-semibold">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {items.map(({ href, title, desc }, i) => (
          <li key={i}>
            <a href={href} className="underline hover:no-underline">{title}</a>
            {desc ? <div className="text-sm text-muted-foreground">{desc}</div> : null}
          </li>
        ))}
      </ul>
    </aside>
  );
}
