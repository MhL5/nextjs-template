import HeroSection from "@/app/[locale]/(with-navigation)/_components/HeroSection";
import { validateAndSetLocale } from "@/i18n/utils/validateLocale";
import { createLocaleAlternates } from "@/utils/metadata/createLocaleAlternates";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const validatedLocale = validateAndSetLocale(locale);

  const t = await getTranslations({
    locale: validatedLocale,
    namespace: "app./[locale].metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: createLocaleAlternates(validatedLocale, `/`),
  };
}

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <>
      <HeroSection />
    </>
  );
}
