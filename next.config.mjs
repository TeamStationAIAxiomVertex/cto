/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const shouldEnablePWA = process.env.ENABLE_PWA === '1';

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // App Hosting builds have been failing consistently. Keep PWA off by default
  // and enable it only when explicitly requested.
  disable: !shouldEnablePWA,
});

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig = {
  // Static HTML export — generates /out folder for FTP/static hosting deployment.
  output: 'export',

  // keep images working in prod & preview
  images: {
    // Required for static export: no server-side image optimization available.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cto.teamstation.dev" },
      { protocol: "https", hostname: "teamstation.dev" }
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  reactStrictMode: true,
  // Source maps in production expose application code — disabled for security and bundle size.
  productionBrowserSourceMaps: false,

  // Note: headers() is silently ignored in static export.
  // Apply these at the web server (Nginx/Apache) level instead.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default pwaConfig(nextConfig);
