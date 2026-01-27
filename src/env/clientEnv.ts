import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_FRONTEND_DOMAIN: z.url(),
    NEXT_PUBLIC_BACKEND_DOMAIN: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_FRONTEND_DOMAIN: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN,
    NEXT_PUBLIC_BACKEND_DOMAIN: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
  },
});
