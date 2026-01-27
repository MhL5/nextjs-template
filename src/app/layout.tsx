import { clientEnv } from "@/env/clientEnv";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(clientEnv.NEXT_PUBLIC_FRONTEND_DOMAIN),
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}
