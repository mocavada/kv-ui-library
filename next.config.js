/** @type {import('next').NextConfig} */

const nextConfig = {
  outDir: "out/",
  assetPrefix: " ",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
