import { LoadingPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("app./.loading");
  return <LoadingPage ariaLabel={t("ariaLabel")} />;
}
