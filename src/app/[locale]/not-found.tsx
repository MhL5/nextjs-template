import { NotFoundPage } from "@/components/FallbackPages";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("app./.not-found");
  return (
    <NotFoundPage
      contactSupport={t("contactSupport")}
      description={t("description")}
      homeButtonLabel={t("homeButtonLabel")}
      needHelp={t("needHelp")}
      title={t("title")}
      goBackButtonLabel={t("homeButtonLabel")}
    />
  );
}
