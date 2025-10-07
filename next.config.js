// next.config.js
// CRITICAL FIX: Changed from module.exports (CommonJS) to export default (ES Module)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any specific Next.js configurations here if needed, 
  // e.g., output: 'standalone', images: { unoptimized: true }
  
  // This is a minimal, safe configuration
};

export default nextConfig; // Using ES Module syntax to fix the ReferenceError