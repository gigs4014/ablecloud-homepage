const colors = require('tailwindcss/colors');

/** @typedef { import('tailwindcss/tailwind-config').TailwindConfig } TailwindConfig */
/** @typedef { import('tailwindcss/tailwind-config').TailwindThemeValue } TailwindThemeValue */

const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {TailwindThemeValue}
 */
const width = ({ theme, breakpoints, colors, negative }, ...args) => {
  return { 'page-full': '1200px', ...theme('spacing') };
};

/**
 * @type {TailwindConfig}
 */
module.exports = {
  content: ['./src/{pages,components,templates}/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: { sans: ['Noto Sans KR', ...defaultTheme.fontFamily.sans] },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: '#2BBBE6',
      },
      borderWidth: {
        1: '1px',
        0.5: '0.5px',
      },
      spacing: { 128: '32rem', 144: '36rem' },
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        104: '1.04',
      },
      width,
      maxWidth: width,
      minWidth: width,
      pageWidth: width,

      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: 'normal',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('./lib/tailwindcss/plugins/tailwindcss-material-icons'),
  ],
};
