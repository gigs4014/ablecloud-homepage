const { merge } = require('lodash');

const ALIAS_PREFIX = '@/';

/**
 * @param  {string[]} paths
 * @param {string?} prefix
 * @returns {string}
 */
function alias(paths, prefix) {
  return `^${prefix ?? ALIAS_PREFIX}(?:${paths.join('|')})(.*?)$`;
}

module.exports = {
  plugins: [
    merge(require('@trivago/prettier-plugin-sort-imports'), require('prettier-plugin-tailwindcss')),
  ],
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  importOrder: [
    '^react$',
    '^(next|next/.+)$',
    '<THIRD_PARTY_MODULES>',

    // business logic & apis
    alias(['hooks', 'helpers', 'utils', 'types']),

    // components
    alias(['components', 'styles']),

    // assets
    alias(['public']),

    // others
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
