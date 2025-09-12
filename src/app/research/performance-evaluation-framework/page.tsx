import type { Metadata } from 'next';
import PerformanceEvaluationFrameworkClient from './client';

export const metadata: Metadata = {
  title: 'Software Engineering Performance Telemetry | A Modern Framework',
  description: 'Research proposing a novel, value-centric model for assessing engineer performance, moving beyond outdated metrics to software engineering performance telemetry.',
};

export default function PerformanceEvaluationFrameworkPage() {
  return <PerformanceEvaluationFrameworkClient />;
}
