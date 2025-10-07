// revelo/page.tsx
import { type Metadata } from 'next';
import CommandMenu from '@/components/command-menu'; // Using standard import

export const metadata: Metadata = {
  title: 'Revelo Page | CTO Playbook Platform',
  description: 'Revelo is the main dashboard for the CTO Playbook Platform.',
};

export default function ReveloPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Revelo</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Your new dashboard is ready.
      </p>
      
      <div className="w-full max-w-sm">
        <CommandMenu /> 
      </div>
    </div>
  );
}
