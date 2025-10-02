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
      { protocol: "https", hostname: "teamstation.dev" }
    ]
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === "1" },

  productionBrowserSourceMaps: true
};

module.exports = nextConfig;
