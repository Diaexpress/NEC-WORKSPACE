/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NEC SYSTEMS',
    description: 'Your official growth partner.',
    icon: '/img/logo.svg',
    listUrl: 'https://diaexpress.github.io/NEC-WORKSPACE/',
    contactUrl: 'https://github.com/Diaexpress/NEC-WORKSPACE/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/NEC-WORKSPACE/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
