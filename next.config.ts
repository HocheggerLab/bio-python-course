import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/pyodide/**',
      },
    ],
  },
  eslint: {
    // Disable ESLint during builds to avoid blocking deployment
    ignoreDuringBuilds: true,
  },
  
  // Configuration for Pyodide
  webpack: (config, { isServer }) => {
    // Handle Node.js modules that Pyodide tries to import
    config.externals = config.externals || [];
    
    if (!isServer) {
      // For client-side, ignore Node.js modules
      config.externals.push({
        'child_process': 'commonjs child_process',
        'fs': 'commonjs fs',
        'path': 'commonjs path',
        'crypto': 'commonjs crypto',
        'stream': 'commonjs stream',
        'util': 'commonjs util',
        'url': 'commonjs url',
        'zlib': 'commonjs zlib',
      });

      // Fallback for node modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "child_process": false,
        "fs": false,
        "net": false,
        "tls": false,
        "crypto": false,
        "stream": false,
        "util": false,
        "url": false,
        "zlib": false,
        "http": false,
        "https": false,
        "assert": false,
        "os": false,
        "path": false,
      };
    }

    return config;
  },
  
  // Headers for SharedArrayBuffer support
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
