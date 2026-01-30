import { NotFoundPage } from "@/components/FallbackPages";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations({
    namespace: "app./[locale].not-found",
    locale: "en",
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NotFoundPage
            contactSupport={t("contactSupport")}
            description={t("description")}
            homeButtonLabel={t("homeButtonLabel")}
            needHelp={t("needHelp")}
            title={t("title")}
            goBackButtonLabel={t("goBackButtonLabel")}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
