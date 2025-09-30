
import bundleAnalyzer from "@next/bundle-analyzer";
import nextPwa from "next-pwa";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "teamstation.dev" },
      { protocol: "https", hostname: "cto.teamstation.dev" },
    ],
  },
  
  experimental: {
    optimizePackageImports: ["lucide-react"],
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
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/playbook", destination: "/playbook/hub", permanent: true },
      { source: "/research", destination: "/research/hub", permanent: true },
      { source: "/technical-interview-evaluation", destination: "/research/technical-talent-evaluation-system", permanent: false },
    ];
  },
};

export default withPWA(withBundleAnalyzer(nextConfig));
