import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';

const resources = {
  en: { translation: translationEN },
  it: { translation: translationIT },
};

i18n
  .use(LanguageDetector) // ✅ auto detect browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // default if language not detected

    detection: {
      order: ['localStorage', 'navigator'], // try localStorage first
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
