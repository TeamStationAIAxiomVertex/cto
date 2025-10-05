// next.config.js
// MUST use ES Module syntax (import/export) because package.json 
// sets "type": "module".

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables the static export feature (required for hosting on platforms like Firebase Hosting)
  // output: 'export', // NOTE: Comment out or remove if you need a server, otherwise keep for static hosting

  // Add the strict mode flag for development, recommended by Next.js
  reactStrictMode: true,

  // Prevents Next.js from throwing errors for absolute imports (e.g., '@/components/Header')
  // This is handled by your tsconfig.json file's 'paths' setting.
  experimental: {
    // If you use server-side components that rely on specific modules
    // that should not be bundled, you can list them here.
    // For now, this can be empty or omitted.
  },

  // Configuration for images
  images: {
    // For static export ('output: "export"'), this must be disabled.
    // unoptimized: true,
    
    // Add any external domains you load images from here:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // You may need to add other remote domains here.
    ],
  },
};

export default nextConfig;
