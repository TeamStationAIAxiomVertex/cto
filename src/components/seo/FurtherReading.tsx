
import * as React from "react";
import Link from 'next/link';

export type ReadingItem = { href: string; title: string; desc?: string };

type Props = {
  items?: ReadingItem[];
  title?: string;
  comparison?: string;
  role?: string;
  technology?: string;
  country?: string;
};

const PRESETS: Record<string, ReadingItem[]> = {
  andela: [
    { href: "/technical-interview-evaluation", title: "Our Vetting Process" },
    { href: "/trust", title: "Security & Compliance posture" },
    { href: "/case-studies", title: "Customer case studies" },
  ],
  bairesdev: [
    { href: "/technical-interview-evaluation", title: "Our Vetting Process" },
    { href: "/trust", title: "Security & Compliance posture" },
    { href: "/case-studies", title: "Customer case studies" },
  ],
  coderslink: [
    { href: "/technical-interview-evaluation", title: "Our Vetting Process" },
    { href: "/trust", title: "Security & Compliance posture" },
    { href: "/case-studies", title: "Customer case studies" },
  ],
  default: [
    { href: "/playbook/hub", title: "CTO Playbook" },
    { href: "/comparisons", title: "Vendor Comparisons" },
    { href: "/hire/by-country/mexico", title: "Hire in Mexico" },
  ],
};

export default function FurtherReading({ items = [], title = "Further reading", comparison, role, technology, country }: Props) {
  let list = items;
  if (!items.length) {
      if(comparison && PRESETS[comparison]) {
        list = PRESETS[comparison];
      } else {
        list = PRESETS['default'];
      }
  }
  
  if (!list.length) return null;

  return (
    <aside aria-label={title} className="space-y-2 my-16 border-t border-border pt-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {list.map(({ href, title, desc }, i) => (
          <li key={i}>
            <Link href={href} className="text-primary hover:underline">
              {title}
            </Link>
            {desc ? <div className="text-sm text-muted-foreground">{desc}</div> : null}
          </li>
        ))}
      </ul>
    </aside>
  );
}
