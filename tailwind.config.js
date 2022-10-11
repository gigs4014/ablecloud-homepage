const { url } = require('inspector');
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
    backgroundImage: {
      'home-header-bg': "url('/images/new/home/home-header-bg.svg')",
      'home-header-bg-2': "url('/images/new/home/home-header-bg-2.svg')",
      'home-header-bg-3': "url('/images/new/home/home-header-bg-3.svg')",
      'company-header-bg': "url('/images/new/company/company-header-bg.svg')",
      'product-header-bg': "url('/images/new/product/product-header-bg.svg')",
      'kacpta-header-bg': "url('/images/new/interview/clientbaimage/ClientBgImage_1.svg')",
      'ablestack-header-bg': "url('/images/new/product/ablestack/ablestack-header-bg.svg')",
      'ablestack-block-header-bg':
        "url('/images/new/product/ablestack/ablestackBlock/ablestackBlock-header-bg.png')",
      'ablestack-cell-header-bg':
        "url('/images/new/product/ablestack/ablestackCell/ablestackCell-header-bg.png')",
      'ablestack-files-header-bg':
        "url('/images/new/product/ablestack/ablestackFiles/ablestackFiles-header-bg.svg')",
      'ablestack-genie-header-bg':
        "url('/images/new/product/ablestack/ablestackGenie/ablestackGenie-header-bg.png')",
      'ablestack-genie-header-fw':
        "url('/images/new/product/ablestack/ablestackGenie/ablestack-genie-header-fw.png')",
      'ablestack-glue-header-bg':
        "url('/images/new/product/ablestack/ablestackGlue/ablestackGlue-header-bg.svg')",
      'ablestack-koral-header-bg':
        "url('/images/new/product/ablestack/ablestackKoral/ablestackKoral-header-bg.svg')",
      'ablestack-mold-header-bg':
        "url('/images/new/product/ablestack/ablestackMold/ablestackMold-header-bg.svg')",
      'ablestack-object-header-bg':
        "url('/images/new/product/ablestack/ablestackObject/ablestackObject-header-bg.svg')",
      'ablestack-slio-header-bg':
        "url('/images/new/product/ablestack/ablestackSlio/ablestackSlio-header-bg.svg')",
      'ablestack-station-header-bg':
        "url('/images/new/product/ablestack/ablestackStation/ablestackStation-header-bg.svg')",
      'ablestack-track-header-bg':
        "url('/images/new/product/ablestack/ablestackTrack/ablestackTrack-header-bg.svg')",
      'ablestack-wall-header-bg':
        "url('/images/new/product/ablestack/ablestackWall/ablestackWall-header-bg.svg')",
      'ablestack-works-header-bg':
        "url('/images/new/product/ablestack/ablestackWorks/ablestackWorks-header-bg.svg')",
      'ablestack-station-header-bg':
        "url('/images/new/product/ablestack/ablestackStation/ablestackStation-header-bg.svg')",
    },
    fontFamily: { sans: ['Noto Sans', 'SUIT'] },
    extend: {
      screens: {
        xsm: '550px',
        // => @media (min-width: 550px) { ... }
      },
      boxShadow: {
        ic: '0px 0px 8px rgba(33, 81, 162, 0.25)',
        primary: 'inset 0 -4px #2bbae6',
        //interviewCard boxshadow
      },
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
        borderGray: '#D4D4D4',
        backgroudGray: '#F6F7F9',
        backgroundBlue: '#71A6CE',
        darkBlue: '#2151A2',
        kacptaHeaderColor: 'rgba(0, 120, 186, 0.6)',
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
