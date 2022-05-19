//@ts-check
/** @typedef { import('tailwindcss/tailwind-config').TailwindConfig } TailwindConfig */
/** @typedef { import('tailwindcss/tailwind-config').TailwindThemeValue } TailwindThemeValue */

/**
 * @type {TailwindThemeValue}
 */
const spacing = {
  128: '32rem',
  144: '36rem',
  'page-full': '1200px',
};

/**
 * @type {TailwindConfig}
 */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        0.5: '0.5px',
      },
      spacing,
      maxWidth: spacing,
      minWidth: spacing,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
