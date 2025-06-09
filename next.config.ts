
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'foodplatters.co.za',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.royco.co.za',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'foodsturvs.ca',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'afropeans.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thesundaybraai.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.africaoutlookmag.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.africanbites.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.oaks.delivery',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
