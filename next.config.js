/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
