/** @type {import('tailwindcss/plugin').TailwindPluginCreator} */
const plugin = require('tailwindcss/plugin');

const fontFamilyMap = {
  filled: 'Material Icons',
  outlined: 'Material Icons Outlined',
  round: 'Material Icons Round',
  twotone: 'Material Icons Two Tone',
  sharp: 'Material Icons Sharp',
};

const iconFontStyle = (value, fontFamily) => ({
  content: `"${value}"`,

  fontFamily,
  'font-weight': 'normal',
  'font-style': 'normal',
  'font-size': '24px' /* Preferred icon size */,
  'line-height': '1',
  'letter-spacing': 'normal',
  'text-transform': 'none',
  display: 'inline-block',
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

function createUtilities(typeMap) {
  const utilities = {};
  for (const type of Object.keys(typeMap)) {
    utilities[`icon-${type}`] = value => ({
      ...iconFontStyle(value, typeMap[type]),
      '&::after': iconFontStyle(value, typeMap[type]),
    });
  }

  return utilities;
}

const MaterialIconsPlugin = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      icon: value => ({
        ...iconFontStyle(value, 'Material Icons'),
        '&::after': iconFontStyle(value, 'Material Icons'),
      }),
      ...createUtilities(fontFamilyMap),
    },
    {
      values: {
        east: 'east',
        navigate_next: 'navigate_next',
        rss_feed: 'rss_feed',
        task_alt: 'task_alt',
        ...theme('icon'),
      },
    },
  );
});

module.exports = MaterialIconsPlugin;
