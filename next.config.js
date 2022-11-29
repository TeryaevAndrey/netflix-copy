/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kinopoiskapiunofficial.tech',
        port: '',
        pathname: '/images/posters/kp/**',
      },
    ],
  },
}
