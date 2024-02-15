import spanish from './locales/es.json';
import english from './locales/en.json';

const _VL_LANGUAGES = {
    VL_SPANISH: 'es',
    VL_ENGLISH: 'en'
}

export const getI18N = ( { currentLocale } : { currentLocale?: string  } ) => {
    if (currentLocale === _VL_LANGUAGES.VL_SPANISH) return spanish;
    if (currentLocale === _VL_LANGUAGES.VL_ENGLISH) return english;
    return spanish;
}