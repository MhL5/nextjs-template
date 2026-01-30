"use client";

import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";
import useEventListener from "@/hooks/useEventListener";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import LocaleSwitcher from "@/i18n/components/LocaleSwitcher";
import { cn } from "@/lib/utils";
import { isClient } from "@/utils/checks";
import type { Route } from "next";
import { useTranslations } from "next-intl";
import { type ComponentProps, useRef, useState } from "react";

type HeaderLink = {
  labelTKey: string;
  href: Route;
};

const headerLinks = [
  {
    labelTKey: "blogs",
    href: "/blogs",
  },
  {
    labelTKey: "blogExample",
    href: "/blogs/example",
  },
  {
    labelTKey: "admin",
    href: "/admin",
  },
  {
    labelTKey: "login",
    href: "/login",
  },
] as const satisfies HeaderLink[];

export default function SiteHeader() {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [showCollapsible, setShowCollapsible] = useState(false);
  const t = useTranslations("app./[locale].components.SiteHeader.links");

  useOnClickOutside(headerRef, () => setShowCollapsible(false));
  useEventListener(
    "keydown",
    (e) => {
      if (!showCollapsible) return;
      if (e.key === "Escape") setShowCollapsible(false);
    },
    isClient() ? window : undefined,
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-50 mx-auto flex w-full items-center justify-center p-4 backdrop-blur-md"
      >
        <Collapsible
          open={showCollapsible}
          onOpenChange={setShowCollapsible}
          className="w-full overflow-hidden"
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2">
            <div className="flex items-center gap-3 lg:basis-1/5">
              <SiteHeaderCollapsibleTrigger
                showCollapsible={showCollapsible}
                className="lg:hidden"
              />

              <Link
                href={{
                  pathname: "/",
                  hash: "#body",
                }}
                variant="ghost"
                className="flex items-center gap-1"
              >
                <Logo className="size-4" /> {"Template"}
              </Link>
            </div>

            <nav className="hidden capitalize lg:flex lg:basis-3/5 lg:items-center lg:justify-center lg:gap-2">
              {headerLinks.map(({ href, labelTKey }) => (
                <Link
                  key={href + labelTKey}
                  variant="ghost"
                  className="justify-start"
                  href={href}
                >
                  {t(labelTKey)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 lg:basis-1/5">
              <ThemeToggle size="icon-lg" />
              <LocaleSwitcher className="hidden lg:flex" />
              <Button className="min-w-16">{"cta"}</Button>
            </div>
          </div>

          <SiteHeaderCollapsibleContent
            onCollapsibleItemClick={() => setShowCollapsible(false)}
          />
        </Collapsible>
      </header>
      {/* this div is a hack, it Takes the height of the header */}
      <div aria-hidden className="h-18" />
    </>
  );
}

function SiteHeaderCollapsibleTrigger({
  showCollapsible,
  ...props
}: {
  showCollapsible: boolean;
} & ComponentProps<typeof Button>) {
  return (
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="icon-lg" {...props}>
        <span className="group relative h-6 p-1">
          <span
            className={cn(
              "absolute end-0 h-0.5 w-4 rounded-full bg-foreground transition-all duration-300",
              showCollapsible
                ? "end-[-95%] top-1/2 w-6 rotate-45"
                : "top-[20%] -translate-y-1/2",
            )}
          />
          <span
            className={cn(
              "absolute top-1/2 left-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300",
              showCollapsible && "opacity-0",
            )}
          />
          {/* bottom line */}
          <span
            className={cn(
              "absolute top-[80%] left-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300",
              showCollapsible && "top-1/2 -rotate-45",
            )}
          />
        </span>
      </Button>
    </CollapsibleTrigger>
  );
}

function SiteHeaderCollapsibleContent({
  onCollapsibleItemClick,
}: {
  onCollapsibleItemClick: () => void;
}) {
  const t = useTranslations("app./[locale].components.SiteHeader.links");

  return (
    <CollapsibleContent className="grid gap-1 py-3 capitalize">
      {headerLinks.map(({ href, labelTKey }) => (
        <Link
          key={href + labelTKey}
          variant="ghost"
          className="justify-start"
          href={href}
          onClick={onCollapsibleItemClick}
        >
          {t(labelTKey)}
        </Link>
      ))}

      <Separator className="my-1" />
      <LocaleSwitcher className="w-full" />
    </CollapsibleContent>
  );
}
