/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repoBasePath = '/k402xxxcenxxx-blog';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? repoBasePath : '',
  assetPrefix: isProd ? repoBasePath : '',
  trailingSlash: true,
};

export default nextConfig;
