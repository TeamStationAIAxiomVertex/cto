
import * as React from "react";
import Link from "next/link";
import { allTech } from "@/lib/tech-data";

export type ReadingItem = { href: string; title: string; desc?: string };

type Props = {
  items?: ReadingItem[];
  title?: string;
  comparison?: string;
  country?: string;
};

export default function FurtherReading({
  items = [],
  title = "Further reading",
  comparison,
  country,
}: Props) {
  const tech = allTech[comparison as keyof typeof allTech];
  const list: ReadingItem[] = items.length
    ? items
    : tech?.interlink_slugs?.map((slug) => ({
        href: `/hire/by-technology/${slug}`,
        title: `Learn more about ${
          allTech[slug as keyof typeof allTech]?.name || slug
        }`,
      })) || [];

  if (list.length < 3) {
    if (country) {
      list.push({
        href: `/hire/by-country/${country}`,
        title: `Hire in ${country}`,
      });
    } else {
      list.push({ href: "/hire/by-country/mexico", title: "Hire in Mexico" });
    }
  }

  return (
    <aside
      aria-label={title}
      className="space-y-2 my-16 border-t border-border pt-8"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {list.map(({ href, title, desc }, i) => (
          <li key={i}>
            <Link href={href} className="text-primary hover:underline">
              {title}
            </Link>
            {desc ? (
              <div className="text-sm text-muted-foreground">{desc}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </aside>
  );
}
