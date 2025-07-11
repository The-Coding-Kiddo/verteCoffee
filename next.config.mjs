/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vertecoffeehouse.com',
      }
    ],
  },
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Reduce bundle size
  modularizeImports: {
    '@/components': {
      transform: '@/components/{{member}}',
    },
    '@/lib': {
      transform: '@/lib/{{member}}',
    },
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Verte Coffee House',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'Experience the finest coffee at Verte Coffee House',
    NEXT_PUBLIC_SITE_URL: 'https://www.vertecoffeehouse.com',
  },
  // Security
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ],
    },
  ],
  // Compression and performance
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
