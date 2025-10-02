
import Link from "next/link";

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function FurtherReading({
  country,
  technology,
  role,
  caseStudy,
  research,
  comparison,
}: {
  country?: string;
  technology?: string;
  role?: string;
  caseStudy?: string;
  research?: string;
  comparison?: string;
}) {
  return (
    <section className="my-16 border-t border-border pt-12">
      <h2 className="text-2xl font-bold">Further Reading</h2>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
        {/* Core hub links (always ensure 3+) */}
        <li>
          <Link href="/playbook/hub" className="text-primary hover:underline">
            CTO Playbook Hub
          </Link>
        </li>
        <li>
          <Link href="/research/hub" className="text-primary hover:underline">
            Research Hub
          </Link>
        </li>
        <li>
          <Link href="/comparisons" className="text-primary hover:underline">
            Vendor Comparisons
          </Link>
        </li>

        {/* Contextual: Hire by Country */}
        {country && (
          <li>
            <Link
              href={`/hire/by-country/${country}`}
              className="text-primary hover:underline"
            >
              Hire Developers in {formatSlug(country)}
            </Link>
          </li>
        )}

        {/* Contextual: Hire by Country + Technology */}
        {country && technology && (
          <li>
            <Link
              href={`/hire/by-country/${country}/${technology}`}
              className="text-primary hover:underline"
            >
              Hire {formatSlug(technology)} Developers in {formatSlug(country)}
            </Link>
          </li>
        )}

        {/* Contextual: Hire by Role */}
        {role && (
          <li>
            <Link
              href={`/hire/by-role/${role}`}
              className="text-primary hover:underline"
            >
              Hire {formatSlug(role)} Engineers
            </Link>
          </li>
        )}

        {/* Contextual: Hire by Technology */}
        {technology && !country && (
          <li>
            <Link
              href={`/hire/by-technology/${technology}`}
              className="text-primary hover:underline"
            >
              Hire {formatSlug(technology)} Developers
            </Link>
          </li>
        )}

        {/* Case Studies */}
        {caseStudy && (
          <li>
            <Link
              href={`/case-studies/${caseStudy}`}
              className="text-primary hover:underline"
            >
              Case Study: {formatSlug(caseStudy)}
            </Link>
          </li>
        )}

        {/* Research */}
        {research && (
          <li>
            <Link
              href={`/research/${research}`}
              className="text-primary hover:underline"
            >
              Research: {formatSlug(research)}
            </Link>
          </li>
        )}

        {/* Comparisons */}
        {comparison && (
          <li>
            <Link
              href={`/comparisons/${comparison}`}
              className="text-primary hover:underline"
            >
              Compare: TeamStation vs {formatSlug(comparison)}
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
