import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-me',
        permanent: true,
      },
      {
        source: '/ideas-frameworks',
        destination: '/#work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
