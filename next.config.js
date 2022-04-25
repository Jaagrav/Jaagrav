/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
