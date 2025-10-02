
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CTO Playbook | TeamStation AI",
    description: "Redirecting to the main CTO Playbook Hub for nearshore software development strategies.",
    robots: {
        index: false,
        follow: true,
    }
};

export default function PlaybookPage() {
  redirect('/playbook/hub');
}
