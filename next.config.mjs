import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', '118.193.47.116'],
  },
};

export default withNextIntl(nextConfig);

