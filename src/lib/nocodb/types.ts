export interface NocoAttachment {
  id?: string;
  path?: string;
  signedPath?: string;
  title?: string;
  mimetype?: string;
  width?: number;
  height?: number;
  thumbnails?: {
    tiny?: { signedPath?: string };
    small?: { signedPath?: string };
    card_cover?: { signedPath?: string };
  };
}

export interface NocoRecordFields {
  title?: string | null;
  content?: string | null;
  subcontent?: string | null;
  sort?: number | null;
  link?: string | null;
  type?: string | null;
  language?: string | null;
  cover?: NocoAttachment[] | null;
}

export interface NocoRecord {
  id: number;
  fields: NocoRecordFields;
}

export interface NocoListResponse {
  records: NocoRecord[];
  next?: string | null;
  prev?: string | null;
}

export interface NocoSingleResponse {
  id: number;
  fields: NocoRecordFields;
}

export interface ArticleMediaFormat {
  url: string;
}

export interface ArticleMedia {
  url: string;
  formats?: {
    large?: ArticleMediaFormat;
    medium?: ArticleMediaFormat;
    small?: ArticleMediaFormat;
  };
}

export interface HomeBannerArticle {
  id: number;
  title: string;
  type: string;
  link: string | null;
  sort?: number | null;
  cover?: ArticleMedia | null;
}

export interface HomeBrandArticle {
  id: number;
  title: string;
  content: string | null;
  type: string;
  link: string | null;
  sort?: number | null;
  cover?: ArticleMedia | null;
}

export type ArticleFilterOperators = Record<
  string,
  string | number | boolean | string[] | number[]
>;

export type ArticleFilters = Record<
  string,
  ArticleFilterOperators | string | number | boolean
>;

export interface ArticlesQueryParams {
  lang?: string;
  locale?: string;
  filters?: ArticleFilters;
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  sort?: string | string[];
}

export interface ArticlesListResponse<T> {
  data: T[];
}

export interface ArticleSingleResponse<T> {
  data: T;
}

export interface NocoRequestOptions {
  signal?: AbortSignal;
}
