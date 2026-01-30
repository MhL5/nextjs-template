import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
// Root page has no locale context, so we can't use next-intl redirect
// eslint-disable-next-line
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({
    locale: "en",
    namespace: "app./[locale].metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: true,
    },
  };
}

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect("/en");
}
