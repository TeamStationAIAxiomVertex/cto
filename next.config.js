/** @type {import('next').NextConfig} */

// BREAK-GLASS: set BREAK_GLASS=1 to ignore TS/ESLint errors during build.
// Default is strict (no ignoring).
const breakGlass = process.env.BREAK_GLASS === '1';

const headers = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: "camera=(), microphone=(), geolocation=()" },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
];


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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: headers,
      },
    ];
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

module.exports = nextConfig;
