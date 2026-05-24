const DEFAULT_NOCODB_URL = 'http://118.193.47.116:4399';
export const NOCODB_BASE_ID = 'p2s82ser2d9alpa';
export const NOCODB_TABLE_ID = 'mdnh55r2ahjfu9x';

/** NocoDB 真实地址，仅服务端使用（API 代理、媒体 rewrite） */
export function getNocodbServerUrl(): string {
  const url = process.env.NOCODB_API_URL || DEFAULT_NOCODB_URL;
  return url.replace(/\/$/, '');
}

export function getNocodbRecordsPath(): string {
  return `/api/v3/data/${NOCODB_BASE_ID}/${NOCODB_TABLE_ID}/records`;
}

/**
 * NocoDB API 请求基址。浏览器走同源 /api/articles 代理，避免 Mixed Content。
 */
export function getNocodbApiUrl(): string {
  if (typeof window !== 'undefined') {
    return '';
  }
  return getNocodbServerUrl();
}

export function getNocodbApiToken(): string | undefined {
  return process.env.NOCODB_API_TOKEN;
}
