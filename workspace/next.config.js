/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

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

  // BREAK_GLASS support: set BREAK_GLASS=1 at build time to bypass TS errors
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === "1" }
};

export default nextConfig;
