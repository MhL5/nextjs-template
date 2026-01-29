"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeToggle({
  onClick,
  ...props
}: ComponentProps<typeof Button>) {
  const { setTheme } = useTheme();
  const t = useTranslations("components.ThemeToggle");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        onClick?.(e);
        setTheme((theme) => (theme === "dark" ? "light" : "dark"));
      }}
      {...props}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">{t("srOnlyLabel")}</span>
    </Button>
  );
}
