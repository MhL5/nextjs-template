import HeroSection from "@/app/[locale]/(with-navigation)/_components/HeroSection";
import { Link } from "@/i18n/navigation";
import { validateAndSetLocale } from "@/i18n/utils/validateLocale";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <>
      <HeroSection />

      <Link
        href={`/blog/protect-your-identity-safest-sign-up-2025`}
        className="mx-auto flex h-full w-full max-w-91.5 flex-col rounded-3xl bg-foreground"
      >
        {"BLOG example"}
      </Link>
    </>
  );
}
