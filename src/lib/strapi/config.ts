const DEFAULT_STRAPI_URL = 'http://118.193.47.116:1337';

export function getStrapiApiUrl(): string {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || DEFAULT_STRAPI_URL;
  return url.replace(/\/$/, '');
}
