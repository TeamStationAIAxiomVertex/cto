
// next.config.cjs
// CRITICAL FIX: Reverting to CommonJS syntax (module.exports) and renaming to .cjs
// This is the battle-tested configuration required by Next.js build systems,
// especially when "type": "module" is set in package.json.

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/hire/by-technology/go',
                destination: '/hire/by-technology/golang',
                permanent: true,
            },
        ]
    },
};

// Use module.exports syntax to ensure CommonJS compatibility
module.exports = nextConfig;
