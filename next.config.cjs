/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces Next.js to generate static HTML
  images: {
    unoptimized: true
  } // Prevents build failure from unconfigured image optimizer
};
module.exports = nextConfig;