/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['images.pexels.com', 'www.pexels.com']
  }
}

module.exports = nextConfig
