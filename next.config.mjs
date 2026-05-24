import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nocodbUrl =
  process.env.NOCODB_API_URL || 'http://118.193.47.116:4399';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', '118.193.47.116'],
  },
  async rewrites() {
    const base = nocodbUrl.replace(/\/$/, '');
    return [
      {
        source: '/noco-media/:path*',
        destination: `${base}/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
