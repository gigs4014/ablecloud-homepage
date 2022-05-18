// @ts-check

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

/**
 * @param {import('next').NextConfig} nextConfig
 **/
const withDotenv = (nextConfig = {}) => {
  const env = require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '/.env.production' : '/.env.development',
  });

  return Object.assign({}, nextConfig, {
    env: { ...env, ...nextConfig.env },
  });
};

/**
 * @param {import('next').NextConfig} nextConfig
 * @param {((nextConfig: import('next').NextConfig) => import('next').NextConfig)[]} plugins
 **/
const withPlugins = (nextConfig = {}, plugins = []) => {
  return plugins.reduce((config, plugin) => plugin(config), nextConfig);
};

/**
 * @type {import('next').NextConfig}
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
};

module.exports = withPlugins(nextConfig, [withMDX, withDotenv]);
