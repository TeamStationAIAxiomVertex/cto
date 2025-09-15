/** @type {import('next').NextConfig} */

// BREAK-GLASS: set BREAK_GLASS=1 to ignore TS/ESLint errors during build.
// Default is strict (no ignoring).
const breakGlass = process.env.BREAK_GLASS === '1';

const nextConfig = {
    // No 'output: "export"' here for App Hosting (SSR/ISR)
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
  eslint: { ignoreDuringBuilds: breakGlass ? true : false },
  typescript: { ignoreBuildErrors: breakGlass ? true : false },
  async redirects() {
    return [
      {
        source: '/cto-playbook',
        destination: '/playbook/hub',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
