import { getStrapiApiUrl } from './config';
import type { ArticlesQueryParams, StrapiRequestOptions } from './types';
import { toStrapiLocale } from './locale';

export class StrapiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'StrapiError';
    this.status = status;
  }
}

function appendFilter(
  params: URLSearchParams,
  prefix: string,
  value: unknown
): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      params.append(`${prefix}[${index}]`, String(item));
    });
    return;
  }

  if (value !== null && typeof value === 'object') {
    Object.entries(value as Record<string, unknown>).forEach(([key, nested]) => {
      appendFilter(params, `${prefix}[${key}]`, nested);
    });
    return;
  }

  params.append(prefix, String(value));
}

export function buildArticlesSearchParams(
  query?: ArticlesQueryParams
): URLSearchParams {
  const params = new URLSearchParams();

  if (!query) {
    return params;
  }

  const locale = query.locale ?? (query.lang ? toStrapiLocale(query.lang) : undefined);
  if (locale) {
    params.set('locale', locale);
  }

  if (query.populate) {
    params.set('populate', query.populate);
  }

  if (query.filters) {
    Object.entries(query.filters).forEach(([field, filterValue]) => {
      appendFilter(params, `filters[${field}]`, filterValue);
    });
  }

  if (query.pagination) {
    Object.entries(query.pagination).forEach(([key, value]) => {
      if (value !== undefined) {
        params.set(`pagination[${key}]`, String(value));
      }
    });
  }

  if (query.sort) {
    const sorts = Array.isArray(query.sort) ? query.sort : [query.sort];
    sorts.forEach((sort, index) => {
      params.set(`sort[${index}]`, sort);
    });
  }

  return params;
}

export async function strapiGet<T>(
  path: string,
  query?: ArticlesQueryParams,
  options?: StrapiRequestOptions
): Promise<T> {
  const baseUrl = getStrapiApiUrl();
  const searchParams = buildArticlesSearchParams(query);
  const queryString = searchParams.toString();
  const url = `${baseUrl}${path}${queryString ? `?${queryString}` : ''}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = process.env.STRAPI_API_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
    cache: 'no-store',
    signal: options?.signal,
  });

  if (!response.ok) {
    let message = `Strapi request failed: ${response.status}`;
    try {
      const body = await response.json();
      if (body?.error?.message) {
        message = body.error.message;
      }
    } catch {
      // ignore parse errors
    }
    throw new StrapiError(response.status, message);
  }

  return response.json() as Promise<T>;
}
