/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['wapiuu.com', 'localhost'],
  },
  trailingSlash: true,
  generateBuildId: async () => {
    return 'wapiuu-build-' + Date.now()
  }
};

module.exports = nextConfig;