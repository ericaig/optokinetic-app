module.exports = {
  "defaultLocale": "ca",
  "locales": [
    "ca",
    "en",
    "es"
  ],
  "pages": {
    "*": [
      "common"
    ],
    "/": [
      "home"
    ],
    "rgx:^.*\/clients.*/": [
      "clients"
    ]
  },
  loadLocaleFrom: (locale, namespace) => import(`src/i18n/${locale}/${namespace}.json`).then(t => t.default),
}