export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiListResponse<T> {
  data: T[];
  meta?: {
    pagination?: StrapiPagination;
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
}

export interface StrapiEntity<T = Record<string, unknown>> {
  id: number;
  attributes: T;
}

export interface StrapiMediaFormat {
  url: string;
  width?: number;
  height?: number;
}

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string | null;
  formats?: Record<string, StrapiMediaFormat>;
}

export interface HomeBannerArticle {
  id: number;
  documentId?: string;
  title: string;
  type: string;
  link: string | null;
  sort?: number | null;
  cover?: StrapiMedia | null;
}
export interface HomeBrandArticle {
  id: number;
  documentId?: string;
  title: string;
  content: string | null;
  type: string;
  link: string | null;
  sort?: number | null;
  cover?: StrapiMedia | null;
}

export type StrapiFilterOperators = Record<
  string,
  string | number | boolean | string[] | number[]
>;

export type StrapiFilters = Record<string, StrapiFilterOperators | string | number | boolean>;

export interface ArticlesQueryParams {
  lang?: string;
  locale?: string;
  populate?: string;
  filters?: StrapiFilters;
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  sort?: string | string[];
}

export interface StrapiRequestOptions {
  signal?: AbortSignal;
}

