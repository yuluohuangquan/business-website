import type { NocoAttachment } from './types';

/** 将 NocoDB 附件转为同源代理路径，避免 HTTPS 页面加载 HTTP 资源 */
export function getNocoMediaUrl(
  attachment?: NocoAttachment | null,
  size?: 'small' | 'large'
): string {
  if (!attachment) return '';

  if (size === 'small' && attachment.thumbnails?.small?.signedPath) {
    return `/noco-media/${attachment.thumbnails.small.signedPath}`;
  }

  if (size === 'large' && attachment.signedPath) {
    return `/noco-media/${attachment.signedPath}`;
  }

  if (attachment.path) {
    return `/noco-media/${attachment.path}`;
  }

  if (attachment.signedPath) {
    return `/noco-media/${attachment.signedPath}`;
  }

  return '';
}

export function getArticleMediaUrl(
  cover?: { url?: string } | null,
  format?: 'large' | 'medium' | 'small'
): string {
  if (!cover) return '';

  if (format === 'large' && cover.url) {
    return cover.url;
  }

  if (format === 'medium') {
    return cover.url ?? '';
  }

  return cover.url ?? '';
}
