import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
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
