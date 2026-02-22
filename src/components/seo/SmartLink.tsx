import Link from "next/link";
import { cn } from "@/lib/utils";

type SmartLinkProps = {
  href: string;
  anchor: string;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  children?: React.ReactNode;
};

const BAD_ANCHORS = new Set(["click here", "learn more", "read more", "here"]);

function validateAnchor(anchor: string) {
  const normalized = anchor.trim().toLowerCase();
  const words = normalized.split(/\s+/).filter(Boolean);

  if (words.length < 3) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[SmartLink] Anchor too short: "${anchor}"`);
    }
  }

  if (BAD_ANCHORS.has(normalized)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[SmartLink] Weak anchor text detected: "${anchor}"`);
    }
  }
}

export default function SmartLink({
  href,
  anchor,
  className,
  target,
  rel,
  children,
}: SmartLinkProps) {
  validateAnchor(anchor);

  const content = children ?? anchor;
  const classes = cn(className);
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal || target === "_blank") {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

