import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const strapiUrl =
  process.env.STRAPI_API_URL ||
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  'http://118.193.47.116:1337';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', '118.193.47.116'],
  },
  async rewrites() {
    return [
      {
        source: '/strapi-uploads/:path*',
        destination: `${strapiUrl.replace(/\/$/, '')}/uploads/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

