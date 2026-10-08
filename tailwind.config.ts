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
          50: 'rgb(var(--color-deep-navy-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-steel-gray-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-steel-gray-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-sky-blue-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-sky-blue-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-electric-cyan-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-electric-cyan-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-deep-navy-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-midnight-navy-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-midnight-navy-rgb) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--color-electric-cyan-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-sky-blue-rgb) / <alpha-value>)',
          dark: 'rgb(var(--color-sky-blue-rgb) / <alpha-value>)'
        },
        navy: {
          DEFAULT: 'rgb(var(--color-midnight-navy-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-deep-navy-rgb) / <alpha-value>)',
          dark: 'rgb(var(--color-midnight-navy-rgb) / <alpha-value>)'
        },
        accent: {
          blue: 'rgb(var(--color-electric-cyan-rgb) / <alpha-value>)',
          cyan: 'rgb(var(--color-sky-blue-rgb) / <alpha-value>)'
        },
        midnight: 'rgb(var(--color-midnight-navy-rgb) / <alpha-value>)',
        deep: 'rgb(var(--color-deep-navy-rgb) / <alpha-value>)',
        cyan: 'rgb(var(--color-electric-cyan-rgb) / <alpha-value>)',
        sky: 'rgb(var(--color-sky-blue-rgb) / <alpha-value>)',
        cool: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
        steel: 'rgb(var(--color-steel-gray-rgb) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal-black-rgb) / <alpha-value>)',
        gray: {
          50: 'rgb(var(--color-deep-navy-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-steel-gray-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-steel-gray-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-pure-white-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-pure-white-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-pure-white-rgb) / <alpha-value>)',
        },
        slate: {
          50: 'rgb(var(--color-deep-navy-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-deep-navy-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-steel-gray-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-steel-gray-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-cool-gray-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-pure-white-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-pure-white-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-pure-white-rgb) / <alpha-value>)',
        },
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
