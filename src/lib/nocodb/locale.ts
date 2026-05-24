const LOCALE_MAP: Record<string, string> = {
  'zh-Hans': 'zh',
  zh: 'zh',
  en: 'en',
};

export function toNocoLanguage(lang: string): string {
  return LOCALE_MAP[lang] ?? lang;
}
