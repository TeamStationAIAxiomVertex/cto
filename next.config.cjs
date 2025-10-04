const withPWA = require('next-pwa')({ dest: 'public', disable: process.env.NODE_ENV === 'development' });
const path = require("path");
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: { remotePatterns: [ { protocol: "https", hostname: "images.unsplash.com" }, { protocol: "https", hostname: "picsum.photos" }, { protocol: "https", hostname: "cto.teamstation.dev" }, { protocol: "https", hostname: "teamstation.dev" } ] },
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === "1" },
  eslint: { ignoreDuringBuilds: process.env.BREAK_GLASS === "1" },
  webpack(config) {
    config.resolve.alias = { ...(config.resolve.alias || {}), "@": path.join(__dirname, "src") };
    return config;
  },
  async headers() { return [ { source: "/(.*)", headers: [ { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" }, { key: "X-Frame-Options", value: "DENY" }, { key: "X-Content-Type-Options", value: "nosniff" }, { key: "X-DNS-Prefetch-Control", value: "on" } ] } ]; }
};
module.exports = withPWA(nextConfig);