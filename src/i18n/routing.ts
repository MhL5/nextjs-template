import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "fr",
    "ar",
    "de",
    "en",
    "es",
    "hi",
    "it",
    "ja",
    "ms",
    "pt",
    "ru",
    "tr",
    "zh",
  ],

  localePrefix: "as-needed",
  // Used when no locale matches
  defaultLocale: "en",
});
