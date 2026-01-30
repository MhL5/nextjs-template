import { validateAndSetLocale } from "@/i18n/utils/validateLocale";

import { LoginForm } from "./_components/LoginForm";

export default async function Page({ params }: PageProps<"/[locale]/login">) {
  const { locale } = await params;
  validateAndSetLocale(locale);

  return (
    <div className="grid min-h-svh place-items-center">
      <LoginForm />
    </div>
  );
}
