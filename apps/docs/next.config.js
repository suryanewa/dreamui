/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@dreamui/dreamui-kit'],
  experimental: {
    optimizePackageImports: ['@dreamui/dreamui-kit'],
  },
};

module.exports = nextConfig;
