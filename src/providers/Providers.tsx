import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";

import DirectionProvider from "./DirectionProvider";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <NextIntlClientProvider>
        <DirectionProvider>{children}</DirectionProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
