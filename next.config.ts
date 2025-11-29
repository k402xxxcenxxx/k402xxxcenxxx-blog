/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repoBasePath = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

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
