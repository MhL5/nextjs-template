import { ThemeToggle } from "@/components/ThemeToggle";
import LocaleSwitcher from "@/i18n/components/LocaleSwitcher";

export default function SiteHeader() {
  return (
    <header className="flex gap-2 p-4">
      <LocaleSwitcher />
      <ThemeToggle />
    </header>
  );
}
