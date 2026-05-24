import { getNocoMediaUrl } from './media';
import type {
  HomeBannerArticle,
  HomeBrandArticle,
  NocoRecord,
  NocoRecordFields,
} from './types';

function buildArticleMedia(fields: NocoRecordFields) {
  const attachment = fields.cover?.[0];
  if (!attachment) return null;

  const url = getNocoMediaUrl(attachment, 'large') || getNocoMediaUrl(attachment);
  const smallUrl = getNocoMediaUrl(attachment, 'small');

  if (!url) return null;

  return {
    url,
    formats: {
      large: { url: url },
      medium: smallUrl ? { url: smallUrl } : { url },
      small: smallUrl ? { url: smallUrl } : undefined,
    },
  };
}

export function normalizeToBannerArticle(record: NocoRecord): HomeBannerArticle {
  const { fields } = record;

  return {
    id: record.id,
    title: fields.title ?? '',
    type: fields.type ?? '',
    link: fields.link ?? null,
    sort: fields.sort ?? null,
    cover: buildArticleMedia(fields),
  };
}

export function normalizeToBrandArticle(record: NocoRecord): HomeBrandArticle {
  const { fields } = record;

  return {
    id: record.id,
    title: fields.title ?? '',
    content: fields.content ?? null,
    type: fields.type ?? '',
    link: fields.link ?? null,
    sort: fields.sort ?? null,
    cover: buildArticleMedia(fields),
  };
}

export function normalizeRecord<T>(record: NocoRecord): T {
  return {
    id: record.id,
    title: record.fields.title ?? '',
    content: record.fields.content ?? null,
    subcontent: record.fields.subcontent ?? null,
    type: record.fields.type ?? '',
    link: record.fields.link ?? null,
    sort: record.fields.sort ?? null,
    language: record.fields.language ?? null,
    cover: buildArticleMedia(record.fields),
  } as T;
}
