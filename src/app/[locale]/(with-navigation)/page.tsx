import HeroSection from "@/app/[locale]/(with-navigation)/_components/HeroSection";
import { validateAndSetLocale } from "@/i18n/utils/validateLocale";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <>
      <HeroSection />
    </>
  );
}
