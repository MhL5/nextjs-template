import SiteFooter from "@/app/[locale]/(with-navigation)/_components/SiteFooter";
import SiteHeader from "@/app/[locale]/(with-navigation)/_components/SiteHeader";
import { validateAndSetLocale } from "@/i18n/utils/validateLocale";

export default async function layout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
