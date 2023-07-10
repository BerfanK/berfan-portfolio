import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../locales/en.json';
import de from '../locales/de.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false, // turn on to see console logs
        fallbackLng: 'en',
        supportedLngs: ['en', 'de'],
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        detection: {
            order: ['querystring', 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        react: {
            useSuspense: false,
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            nsMode: 'default',
            withRef: true,
            // This callback function gets called every time the language is changed
            // It updates the URL with the new language code
            bindRoute: 'path',
            routeParam: 'lang',
            transSupportBasicHtmlNodes: true,
        },
    });

export default i18n;
