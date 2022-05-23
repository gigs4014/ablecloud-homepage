//@ts-check
/** @typedef { import('tailwindcss/tailwind-config').TailwindConfig } TailwindConfig */
/** @typedef { import('tailwindcss/tailwind-config').TailwindThemeValue } TailwindThemeValue */

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
    extend: {
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
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
