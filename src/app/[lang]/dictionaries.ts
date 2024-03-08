import 'server-only'
 
const dictionaries = {
    pt: () => import('./dictionaries/pt.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    fr: () => import('./dictionaries/fr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'pt' | 'en' | 'fr') => dictionaries[locale]()