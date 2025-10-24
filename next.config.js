/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
    unoptimized: true, // For local development
  },
  // Exclude Backup1 folder from build to avoid TypeScript errors
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /Backup1/,
    });
    return config;
  },
}

module.exports = nextConfig
