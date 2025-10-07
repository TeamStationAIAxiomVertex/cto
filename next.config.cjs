
// next.config.cjs
// CRITICAL FIX: Reverting to CommonJS syntax (module.exports) and renaming to .cjs
// This is the battle-tested configuration required by Next.js build systems,
// especially when "type": "module" is set in package.json.

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add any specific Next.js configurations here if necessary.
};

// Use module.exports syntax to ensure CommonJS compatibility
module.exports = nextConfig;
