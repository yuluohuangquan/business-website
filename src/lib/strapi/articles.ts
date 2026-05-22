import { strapiGet } from './client';
import type {
  ArticlesQueryParams,
  StrapiListResponse,
  StrapiRequestOptions,
  StrapiSingleResponse,
} from './types';

export async function getArticles<T = Record<string, unknown>>(
  params?: ArticlesQueryParams,
  options?: StrapiRequestOptions
): Promise<StrapiListResponse<T>> {
  return strapiGet<StrapiListResponse<T>>('/api/articles', params, options);
}

export async function getArticleById<T = Record<string, unknown>>(
  id: string | number,
  params?: ArticlesQueryParams,
  options?: StrapiRequestOptions
): Promise<StrapiSingleResponse<T>> {
  return strapiGet<StrapiSingleResponse<T>>(
    `/api/articles/${id}`,
    params,
    options
  );
}
