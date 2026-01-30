import { validateAndSetLocale } from "@/i18n/utils/validateLocale";
import { createLocaleAlternates } from "@/utils/metadata/createLocaleAlternates";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LoginForm } from "./_components/LoginForm";

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const validatedLocale = validateAndSetLocale(locale);

  const t = await getTranslations({
    locale: validatedLocale,
    namespace: "app./[locale]/login.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: createLocaleAlternates(validatedLocale, "/login"),
  };
}

export default async function Page({ params }: PageProps<"/[locale]/login">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <div className="grid min-h-svh place-items-center">
      <LoginForm />
    </div>
  );
}
