"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useHoverWithTimeout } from "@/hooks/useHoverWithTimeout";
import LocaleFlag from "@/i18n/components/LocaleFlag/LocaleFlag";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getLocaleName } from "@/i18n/utils/getLocaleName";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { type Locale, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { type ComponentProps, useState, useTransition } from "react";

export default function LocaleSwitcher({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useParams();
  const { handleMouseEnter, handleMouseLeave } = useHoverWithTimeout({
    onEnter() {
      setShow(true);
    },
    onLeave() {
      setShow(false);
    },
  });

  function createLocalePathname(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <DropdownMenu open={show} onOpenChange={setShow} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn("flex items-center justify-start gap-2", className)}
          {...props}
        >
          <LocaleFlag
            locale={currentLocale}
            localeName={getLocaleName(currentLocale)}
          />
          <span className="uppercase">{currentLocale}</span>

          <ChevronDown
            className={`${show ? "rotate-180" : ""} ms-auto size-4.25 transition-transform duration-200`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="grid min-w-40 p-0"
        align="start"
      >
        {routing.locales.map((locale) => {
          if (currentLocale === locale) return null;
          const localeName = getLocaleName(locale);

          return (
            <Button
              key={`${locale}-${localeName}`}
              onClick={() => createLocalePathname(locale)}
              aria-label={`change language to ${localeName}`}
              disabled={isPending}
              variant="ghost"
              dir="ltr"
              className="flex w-full items-center justify-start gap-4 rounded-sm px-4 capitalize"
            >
              <LocaleFlag locale={locale} localeName={localeName} />
              <span className="block basis-full text-start">{localeName}</span>
            </Button>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
