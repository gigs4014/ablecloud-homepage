/** @type {import('tailwindcss/plugin').TailwindPluginCreator} */
const plugin = require('tailwindcss/plugin');

const iconFontStyle = value => ({
  content: `"${value}"`,
  fontFamily: 'Material Icons',
  'font-weight': 'normal',
  'font-style': 'normal',
  'font-size': '24px' /* Preferred icon size */,
  'line-height': '1',
  'text-transform': 'none',
  'letter-spacing': 'normal',
  'word-wrap': 'normal',
  'white-space': 'nowrap',
  direction: 'ltr',

  /* Support for all WebKit browsers. */
  '-webkit-font-smoothing': 'antialiased',
  /* Support for Safari and Chrome. */
  'text-rendering': 'optimizeLegibility',

  /* Support for Firefox. */
  '-moz-osx-font-smoothing': 'grayscale',

  /* Support for IE. */
  'font-feature-settings': 'liga',
});

const MaterialIconsPlugin = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    { icon: value => ({ ...iconFontStyle(value), '&::after': iconFontStyle(value) }) },
    { values: theme('icon') },
  );
});

module.exports = MaterialIconsPlugin;
