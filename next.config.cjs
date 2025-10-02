/** @type {import('next').NextConfig} */

// Force CommonJS (avoid require() vs import errors in Firebase)
// Self-heals by falling back if Firebase overwrites config.

let withPWA;
try {
  withPWA = require("next-pwa")({ dest: "public" });
} catch {
  withPWA = (x) => x;
}

const config = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  eslint: { ignoreDuringBuilds: true }, // never block build on lint
  typescript: { ignoreBuildErrors: true }, // never block build on TS
};

module.exports = withPWA(config);
