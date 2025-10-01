
import bundleAnalyzer from "@next/bundle-analyzer";
import nextPWA from 'next-pwa';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cto.teamstation.dev" },
      { protocol: "https", hostname: "teamstation.dev" },
    ],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },

  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/icons/{{member}}",
    },
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === "1" },

  productionBrowserSourceMaps: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
              "style-src 'self' 'unsafe-inline' https:",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https:",
              "connect-src 'self' https:",
              "frame-ancestors 'self'",
            ].join("; "),
          },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/cto-playbook", destination: "/playbook/hub", permanent: true },
      { source: "/playbook", destination: "/playbook/hub", permanent: true },
      { source: "/research", destination: "/research/hub", permanent: true },
    ];
  },
};

export default withBundleAnalyzer(withPWA(nextConfig));
