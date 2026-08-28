import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Verification builds write somewhere else.
   *
   * `next build` empties and rewrites the output directory. Run it while a dev
   * server is serving from the same place and the dev server's chunks vanish
   * underneath it — ENOENT on .next/cache/... and "Cannot find module
   * './1331.js'" until you stop everything and rebuild. Setting NEXT_DIST_DIR
   * gives a throwaway build its own directory so the running dev server is
   * never touched. Unset in normal use and on Vercel, so this is a no-op there.
   */
  distDir: process.env.NEXT_DIST_DIR || '.next',

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
