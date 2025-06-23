export const i18n = {
  defaultLocale: 'zh',
  locales: ['en', 'zh'],
} as const;

export type Locale = typeof i18n['locales'][number];

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  zh: () => import('./zh.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale) => {
  try {
    return await dictionaries[locale]();
  } catch (error) {
    return await dictionaries.zh();
  }
}; 