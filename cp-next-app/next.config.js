/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  output: 'standalone',
}

module.exports = nextConfig
