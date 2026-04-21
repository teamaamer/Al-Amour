import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E6F5FB',
          100: '#CDEAF7',
          200: '#99D4EF',
          300: '#66BEE6',
          400: '#33A9E0',
          500: '#0097D7',
          600: '#007FB3',
          700: '#00688F',
          800: '#00516C',
          900: '#003A4A',
        },
        primary: {
          DEFAULT: '#0097D7',
          light: '#33A9E0',
          dark: '#007FB3'
        },
        navy: {
          DEFAULT: '#130F2D',
          light: '#1D1A3D',
          dark: '#0B091A'
        },
        accent: {
          blue: '#0097d7',
          cyan: '#33A9E0'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
};

export default config;
