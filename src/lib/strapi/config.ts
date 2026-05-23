const DEFAULT_STRAPI_URL = 'http://118.193.47.116:1337';

/** Strapi 真实地址，仅服务端使用（API 代理、rewrites） */
export function getStrapiServerUrl(): string {
  const url =
    process.env.STRAPI_API_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    DEFAULT_STRAPI_URL;
  return url.replace(/\/$/, '');
}

/**
 * Strapi API 请求基址。浏览器走同源 /api/articles 代理，避免 Mixed Content。
 */
export function getStrapiApiUrl(): string {
  if (typeof window !== 'undefined') {
    return '';
  }
  return getStrapiServerUrl();
}
