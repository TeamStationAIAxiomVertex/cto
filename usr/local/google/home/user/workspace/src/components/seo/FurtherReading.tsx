import * as React from "react";
import Link from "next/link";
export default function FurtherReading({ items = [], title = "Further reading" }:{items?: {href:string;title:string;desc?:string}[]; title?:string}) {
  if (!items.length) return null;
  return (
    <aside aria-label={title} className="space-y-2 my-16 border-t border-border pt-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((it, i) => (
          <li key={i}>
            <Link href={it.href} className="text-primary hover:underline">{it.title}</Link>
            {it.desc ? <div className="text-sm text-muted-foreground">{it.desc}</div> : null}
          </li>
        ))}
      </ul>
    </aside>
  );
}
