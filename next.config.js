/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  images: {
    domains: ['www.business2community.com'],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY,
    NEXT_PUBLIC_MAP_KEY: process.env.NEXT_PUBLIC_NEXT_PUBLIC_MAP_KEY,
    NEXT_PUBLIC_SEND_GRID: process.env.NEXT_PUBLIC_SEND_GRID,
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  poweredByHeader: false,
};

module.exports = nextConfig;
