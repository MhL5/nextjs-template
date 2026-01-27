import { clientEnv } from "@/env/clientEnv";
import { isProd } from "@/utils/checks";

const domainUrl = isProd()
  ? clientEnv.NEXT_PUBLIC_FRONTEND_DOMAIN
  : `http://localhost:${process.env.PORT || 3000}`;

/**
 * Generates an absolute URL for the given path
 * removes ending slash and duplicate slashes
 *
 * @example absoluteUrl("/blogs") => "https://mhl5.vercel.app/blogs"
 */
export const absoluteUrl = (path: `/${string}`) =>
  removeEndingSlash(new URL(normalizePath(path), domainUrl).href);

/**
 * Removes duplicate slashes
 * @example normalizePath("/path//to//resource") => "/path/to/resource"
 */
const normalizePath = (path: `/${string}`) =>
  path === "/" ? "" : path.replace(/\/{2,}/g, "/");

/**
 * Removes ending slash
 * @example removeEndingSlash("https://example.com/") => "https://example.com"
 */
const removeEndingSlash = (path: string) =>
  path.endsWith("/") ? path.slice(0, -1) : path;
