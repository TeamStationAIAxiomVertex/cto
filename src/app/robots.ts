import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/static/chunks/', '/_next/static/media/', '/_next/cache/', '/api/', '/studio/'],
      },
      // Google AI (Gemini / Search Generative Experience)
      { userAgent: 'Google-Extended', allow: '/' },
      // OpenAI ChatGPT browsing / RAG
      { userAgent: 'ChatGPT-User', allow: '/' },
      // Perplexity AI search
      { userAgent: 'PerplexityBot', allow: '/' },
      // Anthropic Claude
      { userAgent: 'ClaudeBot', allow: '/' },
      // Meta AI
      { userAgent: 'FacebookBot', allow: '/' },
      // Apple Applebot-Extended (Apple Intelligence)
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Cohere AI
      { userAgent: 'cohere-ai', allow: '/' },
    ],
    sitemap: 'https://cto.teamstation.dev/sitemap.xml',
  };
}
