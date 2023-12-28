/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'picsum.photos',
      'avatars.githubusercontent.com',
      'media.graphassets.com',
      'scontent.cdninstagram.com',
      'place-hold.it'
    ],
  },
}

module.exports = nextConfig
