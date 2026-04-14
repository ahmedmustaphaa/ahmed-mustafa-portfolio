/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com','pixels.com'],
  },
  // السطرين دول هما اللي هيحلوا المشكلة
  webpack: (config, { isServer }) => {
    config.optimization.splitChunks = false;
    return config;
  },
  productionBrowserSourceMaps: false,
}

export default nextConfig