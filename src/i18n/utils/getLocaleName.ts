import type { Locale } from "next-intl";

const localeNames: Record<Locale, string> = {
  ar: "Arabic",
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  hi: "Hindi",
  it: "Italian",
  ja: "Japanese",
  ms: "Malay",
  pt: "Portuguese",
  ru: "Russian",
  tr: "Turkish",
  zh: "Chinese",
};

export function getLocaleName(locale: Locale) {
  return localeNames?.[locale] || locale;
}
