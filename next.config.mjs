import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/icons/{{member}}',
    },
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: process.env.BREAK_GLASS === '1',
  },
  async redirects() {
    return [
      {
        source: '/cto-playbook',
        destination: '/playbook/hub',
        permanent: true,
      },
      {
        source: '/playbook',
        destination: '/playbook/hub',
        permanent: true,
      },
      {
        source: '/research',
        destination: '/research/hub',
        permanent: true,
      },
    ];
  },
};

let finalConfig = withBundleAnalyzer(nextConfig);

if (process.env.ANALYZE === 'true') {
  console.log('Bundle analysis enabled. Importing analyzer...');
  try {
    const { default: bundleAnalyzer } = await import('@next/bundle-analyzer');
    const withBundleAnalyzer = bundleAnalyzer({ enabled: true });
    finalConfig = withBundleAnalyzer(nextConfig);
  } catch (e) {
    console.warn('[@next/bundle-analyzer] not installed, skipping analysis.');
  }
}

export default finalConfig;
