/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'pixels.com'],
  },
  // السطر ده هو السر
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 20000000, // بيجبره يخلي أقصى حجم لأي ملف 20 ميجا
    };
    return config;
  },
}

export default nextConfig