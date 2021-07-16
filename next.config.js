module.exports = {
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(', ')
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  basePath: process.env.NEXT_BASE_PATH || ''
}
