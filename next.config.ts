import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    // sharp is installed, so the built-in optimizer works in this
    // standalone build — resizes to actual display size, converts to
    // webp/avif, and caches the result server-side instead of re-fetching
    // full-size originals (e.g. 1920px Unsplash photos) on every load.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/sectors', destination: '/services', permanent: true },
      { source: '/sectorsnow-privacy-policy', destination: '/privacy-policy', permanent: true },
      { source: '/sectorsnow-terms-and-conditions', destination: '/terms-and-conditions', permanent: true },
    ];
  },
};

export default nextConfig;
