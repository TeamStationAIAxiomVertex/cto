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

const nextConfig = {
  // keep images working in prod & preview
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cto.teamstation.dev" },
      { protocol: "https", hostname: "teamstation.dev" }
    ]
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: true
};

export default pwaConfig(nextConfig);
