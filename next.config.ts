import { withContentlayer } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
};

export default withContentlayer(nextConfig);