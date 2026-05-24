import { nocoGet, nocoGetById } from './client';
import { getNocodbRecordsPath } from './config';
import type {
  ArticlesListResponse,
  ArticlesQueryParams,
  NocoListResponse,
  NocoRequestOptions,
  NocoSingleResponse,
  ArticleSingleResponse,
} from './types';

export async function getArticles<T = Record<string, unknown>>(
  params?: ArticlesQueryParams,
  options?: NocoRequestOptions
): Promise<ArticlesListResponse<T>> {
  // 浏览器走 /api/articles 代理，返回已标准化的 { data: [...] }
  return nocoGet<ArticlesListResponse<T>>('/api/articles', params, options);
}

export async function getArticleById<T = Record<string, unknown>>(
  id: string | number,
  _params?: ArticlesQueryParams,
  options?: NocoRequestOptions
): Promise<ArticleSingleResponse<T>> {
  // 浏览器走 /api/articles/[id] 代理，返回已标准化的 { data: {...} }
  return nocoGetById<ArticleSingleResponse<T>>(id, options);
}

/** 服务端直接请求 NocoDB（供 API Route 使用） */
export async function fetchNocoRecords(
  searchParams: URLSearchParams
): Promise<NocoListResponse> {
  const { getNocodbServerUrl, getNocodbApiToken } = await import('./config');
  const query = searchParams.toString();
  const url = `${getNocodbServerUrl()}${getNocodbRecordsPath()}${query ? `?${query}` : ''}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getNocodbApiToken();
  if (token) {
    headers['xc-token'] = token;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body?.msg ?? `NocoDB request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchNocoRecordById(
  id: string | number
): Promise<NocoSingleResponse> {
  const { getNocodbServerUrl, getNocodbApiToken } = await import('./config');
  const url = `${getNocodbServerUrl()}${getNocodbRecordsPath()}/${id}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getNocodbApiToken();
  if (token) {
    headers['xc-token'] = token;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body?.msg ?? `NocoDB request failed: ${response.status}`);
  }

  return response.json();
}
