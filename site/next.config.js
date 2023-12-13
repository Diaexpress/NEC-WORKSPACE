/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NEC SYSTEMS',
    description: 'Your official growth partner.',
    icon: '/img/logo.svg',
    listUrl: 'https://Diaexpress.github.io/NEC-WORKSPACE/',
    contactUrl: 'https://github.com/Diaexpress/NEC-WORKSPACE/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
