import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Page Moved | Guatemala Hiring",
  description: "This page has moved to the Guatemala country page.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/hire/by-country/guatemala",
  },
};

export default function GuatemalaRedirectPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold">This page moved</h1>
      <p className="mt-4 text-muted-foreground">
        The Costa Rica / Guatemala route is deprecated. We have moved this content to the
        dedicated Guatemala hiring page.
      </p>
      <p className="mt-4">
        <Link href="/hire/by-country/guatemala" className="text-primary underline underline-offset-4">
          Go to Hire in Guatemala
        </Link>
      </p>
      <Script id="guatemala-route-redirect" strategy="afterInteractive">
        {`window.location.replace('/hire/by-country/guatemala');`}
      </Script>
    </main>
  );
}
