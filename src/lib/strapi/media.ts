import { getStrapiServerUrl } from './config';

function toProxiedUploadPath(pathname: string): string | null {
  const match = pathname.match(/\/uploads\/(.+)$/);
  if (!match) return null;
  return `/strapi-uploads/${match[1]}`;
}

/** 将 Strapi 媒体路径转为同源代理路径，避免 HTTPS 页面加载 HTTP 资源 */
export function getStrapiMediaUrl(path?: string | null): string {
  if (!path) return '';

  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      const proxied = toProxiedUploadPath(new URL(path).pathname);
      if (proxied) return proxied;
    } catch {
      // ignore invalid URL
    }
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  const proxied = toProxiedUploadPath(normalized);
  if (proxied) return proxied;

  if (typeof window !== 'undefined') {
    return normalized;
  }

  const base = getStrapiServerUrl();
  return `${base}${normalized}`;
}
