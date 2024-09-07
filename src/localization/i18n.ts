import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import en from './en/en.ts'

export const defaultNS = 'common'
export const resources = {
  en
} as const

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    defaultNS: defaultNS,
    resources: resources,
    interpolation: {
      escapeValue: false
    }
  })

export default i18next
