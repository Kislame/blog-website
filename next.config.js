/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Kislame/blogposts/main/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
