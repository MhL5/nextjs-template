"use client";

import { LoadingPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("app./[locale].loading");
  return <LoadingPage ariaLabel={t("ariaLabel")} />;
}
