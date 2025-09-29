// next.config.ts

import { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack: (
    config: Configuration,
    { isServer }: { isServer: boolean }
  ): Configuration => {
    if (!isServer) {
      // Safely initialize resolve object if it doesn't exist
      config.resolve = config.resolve || {};

      // Add fallbacks for Node.js core modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        assert: false,
        debug: false,
        'agent-base': false,
      };
    }

    return config;
  },
};

export default nextConfig;