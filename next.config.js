/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    backendURL: 'http://127.0.0.1:4000',
    frontendURL: 'http://127.0.0.0:3000',
  },
};

module.exports = nextConfig;
