import { Link } from "@/components/ui/link";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

type MdxRemoteServerProps = {
  source: ComponentProps<typeof MDXRemote>["source"];
};

export default async function MdxRemoteServer({
  source,
}: MdxRemoteServerProps) {
  const t = await getTranslations("components.utils.MdxRemoteServer");
  return (
    <MDXRemote
      source={source}
      components={{
        h2: (props) => {
          // Check if this is the TOC heading by looking at its children
          const isTocHeading = props?.id === "table-of-contents";

          if (isTocHeading) return <h2 {...props}>{t("tableOfContents")}</h2>;

          // Return normal h2 for other headings
          return <h2 {...props} />;
        },
        a: ({ href, children, ...props }: ComponentProps<"a">) => {
          return (
            <Link
              variant="link"
              prefetch={href?.startsWith("#") ? false : undefined}
              href={href || "#"}
              {...props}
            >
              {children}
            </Link>
          );
        },
      }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkToc],
          rehypePlugins: [rehypeSlug],
        },
      }}
    />
  );
}
