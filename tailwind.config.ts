import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ab0001',
        dark: '#1c1b1b',
        'dark-2': '#313030',
        cream: '#fcf9f8',
        'cream-2': '#f6f3f2',
        muted: '#5e3f3a',
        'text-light': '#e5e2e1',
        border: '#e5e2e1',
      },
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        hanken: ['var(--font-hanken)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config