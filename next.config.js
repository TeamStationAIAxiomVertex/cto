/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
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
    async redirects() {
        return [
          {
            source: '/services/nearshore-integrated-services',
            destination: '/services/integrated-services',
            permanent: true,
          },
          {
            source: '/services/nearshore-it-talent-onboarding',
            destination: '/services/talent-onboarding',
            permanent: true,
          },
        ]
    },
};

module.exports = nextConfig;