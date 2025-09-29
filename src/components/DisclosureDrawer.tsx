// DEPRECATED - This is now a server component wrapper.
// The client logic has moved to @/components/client/DisclosureDrawer.tsx
import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

const DynamicDisclosureDrawer = dynamic(() => import('@/components/client/DisclosureDrawer').then(m => m.DisclosureDrawer), { ssr: false });

export const DisclosureDrawer = (props: ComponentProps<typeof DynamicDisclosureDrawer>) => <DynamicDisclosureDrawer {...props} />;
