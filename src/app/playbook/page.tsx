
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "CTO Playbook | TeamStation AI",
    description: "Redirecting to the main CTO Playbook Hub for nearshore software development strategies.",
    robots: {
        index: false,
        follow: true,
    }
};

export default function PlaybookPage() {
    // This is a placeholder for the content validation script. 
    // In a real scenario, you'd have more substantial content here.
    return (
        <main className="container py-12">
            <h1 className="text-2xl font-bold">CTO Playbook</h1>
            <p>This is a hub for strategic content for Chief Technology Officers. Please see the links below.</p>
            <nav className="mt-4 flex flex-col space-y-2">
                <Link href="/playbook/hub" className="text-primary hover:underline">Playbook Hub</Link>
                <Link href="/playbook/nearshore-vs-offshore" className="text-primary hover:underline">Nearshore vs Offshore</Link>
                <Link href="/playbook/tco-model" className="text-primary hover:underline">TCO Model</Link>
            </nav>
        </main>
    )
}

---

## Pain
CTOs face hidden risks in cost, compliance, and velocity.

## Stakes
Without addressing these, budgets spiral and projects miss critical deadlines.

## Prescription
TeamStation AI delivers audit-ready compliance, Axiom Cortex™ cognitive vetting, and predictable TCO.

## Proof
40–60% lower TCO vs legacy models. Case studies: [Currance](/case-studies), [Parsable](/case-studies/parsable).
