import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("app./.page.heroSection");

  return (
    <section className="grid min-h-dvh w-full place-items-center">
      <h1>{t("h1")}</h1>
    </section>
  );
}
