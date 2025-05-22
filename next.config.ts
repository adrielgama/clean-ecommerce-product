import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.netshoes.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
