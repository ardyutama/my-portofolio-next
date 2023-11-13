import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0367FC',
        'primary-yellow': '#F4D160',
        black: '#272727',
        skeleton: '#FAFAFD',
        'primary-disabled': '#969696',
        'primary-cyan': '#80D0C7',
      },
      boxShadow: {
        header: '0px 2px 6px 0px rgba(0, 0, 0, 0.10)',
        card: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        h1: '64px',
        h2: '48px',
        h3: '32px',
        h4: '24px',
        'medium-1': '32px',
        'medium-2': '24px',
        'medium-3': '18px',
        'medium-4': '16px',
        'paragraph-1': '24px',
        'paragraph-2': '18px',
        'paragraph-3': '16px',
      },
    },
  },
  plugins: [],
};
export default config;
