/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === "1" },

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
  productionBrowserSourceMaps: true,
  modularizeImports: {
    "lucide-react": { transform: "lucide-react/dist/esm/icons/{{member}}" }
  }
};

export default nextConfig;
