
/**
 * One config, two worlds: works in both ESM ("type": "module") and CJS.
 * Firebase App Hosting overrides can still patch this safely.
 */

// Detect if we're in CommonJS (module.exports available) or ESM
const isCJS = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

// Bundle analyzer import shim
let withBundleAnalyzer;
// This is a simplified async IIFE to handle top-level await for ESM
(async () => {
  if (process.env.ANALYZE === 'true') {
    if (isCJS) {
      try {
        withBundleAnalyzer = require('@next/bundle-analyzer')({
          enabled: true,
        });
      } catch (e) {
        // Silently fail if not present
        withBundleAnalyzer = (config) => config;
      }
    } else {
      try {
        const bundleAnalyzer = await import('@next/bundle-analyzer');
        withBundleAnalyzer = bundleAnalyzer.default({
          enabled: true,
        });
      } catch (e) {
        // Silently fail if not present
        withBundleAnalyzer = (config) => config;
      }
    }
  } else {
    withBundleAnalyzer = (config) => config;
  }
})();


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
             {
                protocol: 'https',
                hostname: 'picsum.photos',
            }
        ],
    },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/icons/{{member}}'
    }
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: process.env.BREAK_GLASS === '1' ? true : false },
  async redirects() {
    return [
      {
        source: '/cto-playbook',
        destination: '/playbook/hub',
        permanent: true,
      },
      {
        source: '/playbook',
        destination: '/playbook/hub',
        permanent: true,
      },
      {
        source: '/research',
        destination: '/research/hub',
        permanent: true,
      },
    ];
  },
};

const finalConfig = withBundleAnalyzer ? withBundleAnalyzer(nextConfig) : nextConfig;

export default finalConfig;
