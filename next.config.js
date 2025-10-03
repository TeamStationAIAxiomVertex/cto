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
      { protocol: "https", hostname: "teamstation.dev" }
    ]
  },
  modularizeImports: {
    "lucide-react": { transform: "lucide-react/dist/esm/icons/{{member}}" }
  }
};

export default nextConfig;
