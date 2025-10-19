
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { comparisonPages, getComparisonPage } from '@/lib/comparisonPages';
import type { Metadata } from 'next';
import ComparisonProse from '@/components/ComparisonProse';

const VerdictTable = dynamic(() => import('@/components/VerdictTable'), { ssr: true });
const ProgrammaticContent = dynamic(() => import('@/components/ProgrammaticContent').then(mod => mod.ProgrammaticContent), { ssr: true });

// ... rest of the file
