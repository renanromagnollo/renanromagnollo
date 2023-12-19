/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', 'avatars.githubusercontent.com', 'media.graphassets.com'],
  },
}

module.exports = nextConfig
