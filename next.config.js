
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
  output: 'standalone',
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

  eslint: { ignoreDuringBuilds: process.env.BREAK_GLASS === "1" },
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === "1" },

  productionBrowserSourceMaps: true,
  
  async redirects() {
    return [
      { source: "/cto-playbook", destination: "/playbook/hub", permanent: true },
      { source: "/playbook", destination: "/playbook/hub", permanent: true },
      { source: "/research", destination: "/research/hub", permanent: true },
    ];
  },
};

export default withBundleAnalyzer(withPWA(nextConfig));
