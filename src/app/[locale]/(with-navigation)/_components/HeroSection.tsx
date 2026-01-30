import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("app./[locale].components.HeroSection");

  return (
    <section className="grid min-h-dvh w-full place-items-center">
      <h1 className="text-xl">{t("h1")}</h1>
    </section>
  );
}
