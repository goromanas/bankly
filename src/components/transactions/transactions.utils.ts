const defaultLocale = 'en-GB'

export const formatCurrency = (value: number, locale = defaultLocale) =>
  Intl.NumberFormat(locale, { style: 'currency', currency: 'GBP' }).format(value)

export const formatDate = (value: string, locale = defaultLocale) =>
  new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(value))
