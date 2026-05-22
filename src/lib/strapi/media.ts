import { getStrapiApiUrl } from './config';

export function getStrapiMediaUrl(path?: string | null): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const base = getStrapiApiUrl();
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
