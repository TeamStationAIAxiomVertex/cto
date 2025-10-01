
import bundleAnalyzer from '@next/bundle-analyzer';
import nextPwa from 'next-pwa';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = nextPwa({
  dest: 'public',
  disable: true, // disable until rendering is stable
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'teamstation.dev' },
      { protocol: 'https', hostname: 'cto.teamstation.dev' },
    ],
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/icons/{{member}}',
    },
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === '1' },
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      { source: '/cto-playbook', destination: '/playbook/hub', permanent: true },
      { source: '/playbook', destination: '/playbook/hub', permanent: true },
      { source: '/research', destination: '/research/hub', permanent: true },
      { source: '/technical-interview-evaluation', destination: '/playbook/bias-free-technical-hiring-axiom-cortex', permanent: true },
    ];
  },
};

export default withBundleAnalyzer(withPWA(nextConfig));
