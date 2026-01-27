import { ThemeProvider } from "@/providers/ThemeProvider";
import type { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
