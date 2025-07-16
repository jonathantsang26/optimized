import type { Config } from "tailwindcss"

export default <Config>{
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/keen-slider/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['"Geist Sans"', 'Inter', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    fontSize: {
      d1: ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 60px
      h1: ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],   // 48px
      h2: ['2.4rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      h3: ['1.92rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      h4: ['1.54rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      h5: ['1.23rem', { lineHeight: '1.35', letterSpacing: '-0.005em' }],
      base: ['1rem', { lineHeight: '1.45' }],
      sm: ['0.875rem', { lineHeight: '1.5' }],
      xs: ['0.75rem', { lineHeight: '1.5' }],
    },
  },
  plugins: [],
}
