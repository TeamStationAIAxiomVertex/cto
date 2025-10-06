
import { permanentRedirect } from 'next/navigation';

// This component ensures that any multi-level technology paths gracefully redirect.
export default function HireByTechnologyRedirectPage({ params }: { params: { slug: string[] } }) {
  const finalSlug = params.slug?.[0] || '';
  if (finalSlug) {
    permanentRedirect(`/hire/by-technology/${finalSlug}`);
  } else {
    permanentRedirect('/hire/by-technology');
  }
}
