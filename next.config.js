/** @type {import('next').NextConfig} */

// BREAK-GLASS: set BREAK_GLASS=1 to ignore TS/ESLint errors during build.
// Default is strict (no ignoring).
const breakGlass = process.env.BREAK_GLASS === '1';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://calendar.google.com;
  child-src 'self' https://calendar.google.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://images.unsplash.com https://picsum.photos;
  font-src 'self';
  connect-src 'self' https://*.googleapis.com https://v1.hit.statcounter-dev.com;
  frame-src 'self' https://calendar.google.com;
  frame-ancestors 'none';
  form-action 'self';
  base-uri 'self';
`;

const headers = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() },
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
