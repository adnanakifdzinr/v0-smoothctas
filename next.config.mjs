/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { hostname: "*.public.blob.vercel-storage.com" },
      { hostname: "tkyy9tub5efxttep.public.blob.vercel-storage.com" },
      { hostname: "4mkwknnmlp45gfn8.public.blob.vercel-storage.com" },
      { hostname: "rm9cehwjzivcimqc.public.blob.vercel-storage.com" },
      { hostname: "qms1staoyjyffvwr.public.blob.vercel-storage.com" },
      { hostname: "simontype.com" },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  compress: true,
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
}

export default nextConfig
