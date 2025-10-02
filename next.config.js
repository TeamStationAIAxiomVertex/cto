import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cto.teamstation.dev" },
      { protocol: "https", hostname: "teamstation.dev" }
    ]
  },
   output: 'standalone',
   eslint: { ignoreDuringBuilds: process.env.BREAK_GLASS === '1' },
   typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === '1' },
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
