/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repoBasePath = '/k402xxxcenxxx-blog';

const nextConfig = {
  output: 'export', // 讓 Next.js 可以 next export 成純靜態
  images: {
    unoptimized: true, // GitHub Pages 沒有 image optimizer，必須關掉
  },
  basePath: isProd ? repoBasePath : '',
  assetPrefix: isProd ? repoBasePath : '',
  trailingSlash: true, // 建議開啟，避免 GitHub Pages 對路徑的某些奇怪行為
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
