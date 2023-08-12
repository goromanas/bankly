const defaultLocale = 'en-GB'
const defaultCurrency = 'GBP'

export const formatCurrency = (value: number, locale = defaultLocale, options?: Intl.NumberFormatOptions) =>
  Intl.NumberFormat(locale, { style: 'currency', currency: options?.currency ?? defaultCurrency, ...options }).format(
    value
  )

export const formatDate = (value: string, locale = defaultLocale) =>
  new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(value))
