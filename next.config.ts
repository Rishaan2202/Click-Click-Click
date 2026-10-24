import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.hackclub.com'
      },
      {
        protocol: 'https',
        hostname: 'avatars.slack-edge.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.hackclub.com'
      }
    ]
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
