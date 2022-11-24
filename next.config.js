const redirectConfig = require('./redirect.config.json');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  pageExtensions: ['tsx'],
  async redirects() {
    return redirectConfig;
  },
};

module.exports = nextConfig;
