"use client";

import { useLocale } from "next-intl";
import { Direction } from "radix-ui";
import type { PropsWithChildren } from "react";

export default function DirectionProvider({ children }: PropsWithChildren) {
  const locale = useLocale();
  return (
    <Direction.Provider dir={locale === "ar" ? "rtl" : "ltr"}>
      {children}
    </Direction.Provider>
  );
}
