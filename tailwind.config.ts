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
        sm: '0.600rem',
        base: '0.8rem',
        xl: '1.066rem',
        '2xl': '1.421rem',
        '3xl': '1.894rem',
        '4xl': '2.525rem',
        '5xl': '3.366rem',
      },
      fontFamily: {
        heading: 'Mona Sans',
        body: 'Mona Sans',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      keyframes: {
        slideshowMobile: {
          '0%': { transform: 'translateX(400px)' },
          '100%': { transform: 'translateX(calc(-250px * 2))' },
        },
        slideshowDesktop: {
          '0%': { transform: 'translateX(calc(400px * 2))' },
          '100%': { transform: 'translateX(calc(-250px * 4))' },
        },
      },
      animation: {
        'slideshow-icon-mobile': 'slideshowMobile 10s infinite linear',
        'slideshow-icon-desktop': 'slideshowDesktop 15s infinite linear',
      },
    },
  },
  plugins: [],
};
export default config;
