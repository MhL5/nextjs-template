import { validateAndSetLocale } from "@/i18n/utils/validateLocale";

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return children;
}
