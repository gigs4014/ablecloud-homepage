// @ts-check
/**
 * @typedef NextConfig
 * @type {import('next').NextConfig}
 **/

/**
 * @callback Plugin
 * @param {NextConfig} [nextConfig={}]
 * @returns {NextConfig}
 */

/**
 * @type {Plugin}
 */
const withVideos = require('next-videos');

/**
 * @type {Plugin}
 */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

/**
 * @type {Plugin}
 */
const withDotenv = (nextConfig = {}) => {
  const env = require('dotenv').config({ path: `/.env.${process.env.NODE_ENV}` });

  return Object.assign({}, nextConfig, {
    env: { ...env, ...nextConfig.env },
  });
};

/**
 * @param {NextConfig} nextConfig
 * @param {Plugin[]} [plugins=[]] - {@link Plugin} Array
 * @returns {NextConfig}
 **/
const withPlugins = (nextConfig = {}, plugins = []) => {
  return plugins.reduce((config, plugin) => plugin(config), nextConfig);
};

/**
 * @type {NextConfig}
 **/
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPlugins(nextConfig, [withMDX, withDotenv, withVideos]);
