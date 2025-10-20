
// src/components/ProgrammaticContent.tsx
import React from 'react';
import Link from 'next/link';
import { TechEntry } from '@/lib/tech';
import * as Icons from "lucide-react";

// Helper to get an icon component by its string name
const getIcon = (name: string) => {
  const Icon = (Icons as any)[name];
  if (Icon) {
    return <Icon className="mr-2 h-8 w-8 text-primary" />;
  }
  return null; // Or a default icon
};

interface ProgrammaticContentProps {
    tech: TechEntry;
}

/**
 * Renders the primary prose content for programmatic pages.
 */
export const ProgrammaticContent: React.FC<ProgrammaticContentProps> = ({ tech }) => {
    return (
        <div className="container max-w-5xl py-12">
            <div className="text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground">Home</Link> / 
                <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
                <Link href="/hire/by-technology" className="hover:text-foreground">By Technology</Link> / 
                <span>{tech.name}</span>
            </div>
            <header className="my-12">
                <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                    Hire for {tech.name} Mastery
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">{tech.intro}</p>
            </header>

            {tech.pains && tech.pains.length > 0 && (
                <section className="my-16">
                    <h2 className="text-center text-3xl font-bold">Sound Familiar?</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">
                        Common problems we solve by providing true {tech.name} experts.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {tech.pains.map((item) => (
                            <div key={item.pain} className="rounded-lg border bg-card p-6 flex flex-col">
                                <p className="text-sm font-semibold text-primary">{item.pain}</p>
                                <div className="flex items-center gap-3 mt-3">
                                    {getIcon(item.iconName)}
                                    <h3 className="text-lg font-semibold text-foreground">The Problem</h3>
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground ">{item.problem}</p>
                                <div className="mt-4 border-t border-border pt-4">
                                    <h4 className="font-semibold text-primary">The TeamStation AI Solution</h4>
                                    <p className="text-sm text-foreground m-0">{item.solution}</p>
                                </div>
                                <div className="flex-grow"></div>
                                <div className="mt-6">
                                    <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">
                                        Proof: {item.kpi}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};
