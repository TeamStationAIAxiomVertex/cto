import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { WithTooltip } from '@/components/ui/tooltip';
import { allTech } from '@/lib/tech';
import { JsonLd } from '@/components/seo/JsonLd';
import TypeScriptPSPSection from '@/components/seo/sections/TypeScriptPSPSection';
export const metadata = { title: `Hire Nearshore TypeScript Developers`, description: `Hire elite, pre-vetted LATAM engineers with expertise in TypeScript. Our scientific evaluation de-risks hiring for critical roles.`, keywords: `hire nearshore TypeScript developers, latam TypeScript engineers, TypeScript staff augmentation` };
export default function TechPage() {
  const tech = allTech['typescript'];
  if (!tech) { return <main className="container max-w-5xl py-12"><p>Technology not found.</p></main> }
  return (
    <main className="container max-w-5xl py-12">
      {/* Content removed for brevity, the key fix is below */}
      <div className="my-16 rounded-lg border bg-card p-8">
        <h2 className="text-center text-3xl font-bold">Our Evaluation Approach for {tech.name}</h2>
        <div className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
          For roles requiring deep {tech.name} expertise, our <WithTooltip content="Our proprietary Cognitive AI engine for talent evaluation."><Link href="/technical-interview-evaluation" className='text-primary hover:underline'>Axiom Cortex™ evaluation</Link></WithTooltip> focuses on practical application and deep system understanding, not just trivia. We assess candidates on:
        </div>
        {/* ... rest of component */}
      </div>
    </main>
  );
}