'use client';

// Import * as module* so we can support either named or default export styles.
import * as Mod from '@/components/SpotifyIcon';

type Props = { className?: string };

export default function SpotifyIconIsland({ className }: Props) {
  // Prefer named export, fall back to default, otherwise render nothing.
  const Icon = (Mod as any).SpotifyIcon ?? (Mod as any).default ?? null;
  if (!Icon) return null;
  return <Icon className={className} />;
}
