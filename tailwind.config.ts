import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      fontFamily: { sans: ['var(--font-poppins)', 'sans-serif'] },
      colors: {
        'bg': 'hsl(var(--bg))', 'text': 'hsl(var(--text))', 'mute': 'hsl(var(--mute))',
        'accent-custom': 'hsl(var(--accent-custom))', 'accent-d-custom': 'hsl(var(--accent-d-custom))',
        'surface-1': 'hsl(var(--surface-1))', 'surface-2': 'hsl(var(--surface-2))',
        'line': 'hsl(var(--line))',
      },
      borderRadius: { lg: "0.75rem" },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--mute))', '--tw-prose-headings': 'hsl(var(--text))',
            '--tw-prose-links': 'hsl(var(--accent-custom))', '--tw-prose-bold': 'hsl(var(--text))',
            '--tw-prose-bullets': 'hsl(var(--line))', '--tw-prose-hr': 'hsl(var(--line))',
            '--tw-prose-quotes': 'hsl(var(--text))', '--tw-prose-quote-borders': 'hsl(var(--line))',
            '--tw-prose-code': 'hsl(var(--text))', '--tw-prose-pre-bg': 'hsl(var(--surface-2))',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;