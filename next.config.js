import path from "path";

const BREAK_GLASS = process.env.BREAK_GLASS === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cto.teamstation.dev" },
      { protocol: "https", hostname: "teamstation.dev" },
    ],
  },
  modularizeImports: {
    "lucide-react": { transform: "lucide-react/dist/esm/icons/{{member}}" },
  },
  typescript: { ignoreBuildErrors: BREAK_GLASS },
  eslint: { ignoreDuringBuilds: BREAK_GLASS },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.join(import.meta.dirname, "src"),
    };
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;