import { getNocodbApiToken, getNocodbApiUrl, getNocodbRecordsPath } from './config';
import type { ArticlesQueryParams, NocoRequestOptions } from './types';
import { toNocoLanguage } from './locale';

export class NocoError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'NocoError';
    this.status = status;
  }
}

function buildWhereClause(query?: ArticlesQueryParams): string | undefined {
  const conditions: string[] = [];

  const language =
    query?.locale ?? (query?.lang ? toNocoLanguage(query.lang) : undefined);
  if (language) {
    conditions.push(`(language,eq,${language})`);
  }

  if (query?.filters) {
    Object.entries(query.filters).forEach(([field, filterValue]) => {
      if (
        filterValue !== null &&
        typeof filterValue === 'object' &&
        !Array.isArray(filterValue)
      ) {
        Object.entries(filterValue as Record<string, unknown>).forEach(
          ([operator, value]) => {
            const op = operator.startsWith('$') ? operator.slice(1) : operator;
            conditions.push(`(${field},${op},${value})`);
          }
        );
      } else if (
        typeof filterValue === 'string' ||
        typeof filterValue === 'number' ||
        typeof filterValue === 'boolean'
      ) {
        conditions.push(`(${field},eq,${filterValue})`);
      }
    });
  }

  if (conditions.length === 0) return undefined;
  return conditions.join('~and');
}

function buildSortParam(query?: ArticlesQueryParams): string | undefined {
  if (!query?.sort) return undefined;

  const sorts = Array.isArray(query.sort) ? query.sort : [query.sort];
  const parsed = sorts.map((sort) => {
    const [field, direction = 'asc'] = sort.split(':');
    return { field, direction };
  });

  return JSON.stringify(parsed);
}

export function buildArticlesSearchParams(
  query?: ArticlesQueryParams
): URLSearchParams {
  const params = new URLSearchParams();

  if (!query) {
    return params;
  }

  const where = buildWhereClause(query);
  if (where) {
    params.set('where', where);
  }

  const sort = buildSortParam(query);
  if (sort) {
    params.set('sort', sort);
  }

  if (query.pagination?.page) {
    params.set('page', String(query.pagination.page));
  }

  if (query.pagination?.pageSize) {
    params.set('pageSize', String(query.pagination.pageSize));
  }

  return params;
}

export async function nocoGet<T>(
  path: string,
  query?: ArticlesQueryParams,
  options?: NocoRequestOptions
): Promise<T> {
  const baseUrl = getNocodbApiUrl();
  const searchParams = buildArticlesSearchParams(query);
  const queryString = searchParams.toString();
  const url = `${baseUrl}${path}${queryString ? `?${queryString}` : ''}`;

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
    signal: options?.signal,
  });

  if (!response.ok) {
    let message = `NocoDB request failed: ${response.status}`;
    try {
      const body = await response.json();
      if (body?.msg) {
        message = body.msg;
      } else if (body?.message) {
        message = body.message;
      }
    } catch {
      // ignore parse errors
    }
    throw new NocoError(response.status, message);
  }

  return response.json() as Promise<T>;
}

export async function nocoGetById<T>(
  id: string | number,
  options?: NocoRequestOptions
): Promise<T> {
  const baseUrl = getNocodbApiUrl();
  const path = baseUrl
    ? `${getNocodbRecordsPath()}/${id}`
    : `/api/articles/${id}`;
  const url = `${baseUrl}${path}`;

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
    signal: options?.signal,
  });

  if (!response.ok) {
    let message = `NocoDB request failed: ${response.status}`;
    try {
      const body = await response.json();
      if (body?.msg) {
        message = body.msg;
      }
    } catch {
      // ignore parse errors
    }
    throw new NocoError(response.status, message);
  }

  return response.json() as Promise<T>;
}
