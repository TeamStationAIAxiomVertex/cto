/** @type {import('next').NextConfig} */

// BREAK-GLASS: set BREAK_GLASS=1 to ignore TS/ESLint errors during build.
// Default is strict (no ignoring).
const breakGlass = process.env.BREAK_GLASS === '1';

const nextConfig = {
    output: "export",
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
            }
        ],
    },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/icons/{{member}}'
    }
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: breakGlass ? true : false },
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

export default nextConfig;
