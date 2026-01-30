import BlogsSection from "@/app/[locale]/(with-navigation)/blogs/_components/BlogsSection";
import { validateAndSetLocale } from "@/i18n/utils/validateLocale";

export default async function Page({ params }: PageProps<"/[locale]/blogs">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <>
      <BlogsSection className="mt-14 px-5" />
    </>
  );
}
