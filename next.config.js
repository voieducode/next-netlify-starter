/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_HUBSPOT_MEETING_LINK: "https://meetings-eu1.hubspot.com/olombelona-dev"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hubspot.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

