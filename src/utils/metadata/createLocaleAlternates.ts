import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/utils/absoluteUrl";
import type { Metadata } from "next";
import type { Locale } from "next-intl";

export function createLocaleAlternates(
  locale: Locale,
  path: `/${string}`,
): Metadata["alternates"] {
  return {
    // since we are using localePrefix:"as-needed" the en locale is not in the url
    canonical: absoluteUrl(`/${locale === "en" ? "" : locale}${path}`),
    languages: Object.fromEntries(
      routing.locales.map((cur) => [
        cur,
        absoluteUrl(`/${cur === "en" ? "" : cur}${path}`),
      ]),
    ),
  };
}
