/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  swcMinify: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "teamstation.dev" },
      { protocol: "https", hostname: "cto.teamstation.dev" },
      { protocol: "https", hostname: "picsum.photos" },
    ]
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
