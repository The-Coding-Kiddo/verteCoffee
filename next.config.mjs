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
  // Vercel specific optimizations
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  // Enable static exports for faster page loads
  output: 'standalone',
  // Compress responses
  compress: true,
  // Enable React strict mode for better debugging
  reactStrictMode: true,
  // Reduce bundle size by enabling tree shaking
  modularizeImports: {
    '@/components': {
      transform: '@/components/{{member}}',
    },
    '@/lib': {
      transform: '@/lib/{{member}}',
    },
  },
  // Add metadata
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Verte Coffee House',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'Experience the finest coffee at Verte Coffee House',
    NEXT_PUBLIC_SITE_URL: 'https://www.vertecoffeehouse.com',
  },
  poweredByHeader: false,
}

export default nextConfig
