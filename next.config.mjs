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
    domains: ['www.vertecoffeehouse.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vertecoffeehouse.com',
      }
    ],
  },
  // Optimization for production builds
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Production optimizations
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
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
}

export default nextConfig
