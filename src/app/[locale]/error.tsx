"use client";

import { ErrorPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Page({ error, reset }: ErrorProps) {
  const t = useTranslations("app./[locale].error");

  return (
    <ErrorPage
      error={error}
      reset={reset}
      contactSupport={t("contactSupport")}
      description={t("description")}
      homeButtonLabel={t("homeButtonLabel")}
      needHelp={t("needHelp")}
      title={t("title")}
      tryAgainButtonLabel={t("tryAgainButtonLabel")}
    />
  );
}
