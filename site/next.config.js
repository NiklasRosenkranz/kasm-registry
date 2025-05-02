/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Nowarmy',
    description: 'The Nowarmy store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://niklasrosenkranz.github.io/kasm-registry/',
    contactUrl: 'https://github.com/NiklasRosenkranz/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
