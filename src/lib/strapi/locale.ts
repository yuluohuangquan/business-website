const LOCALE_MAP: Record<string, string> = {
  zh: 'zh-Hans',
  en: 'en',
};

export function toStrapiLocale(lang: string): string {
  return LOCALE_MAP[lang] ?? lang;
}
