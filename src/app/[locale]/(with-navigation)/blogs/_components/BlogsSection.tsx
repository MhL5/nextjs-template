import Img from "@/components/ui/Img";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

type Blog7Props = {
  className?: string;
};

const tempMockBlogs = [
  {
    id: "post-1",
    title: "Getting Started with shadcn/ui Components",
    summary:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    label: "Tutorial",
    author: "Sarah Chen",
    published: "1 Jan 2024",
    url: "https://shadcnblocks.com",
    image: "/example.jpg",
  },
  {
    id: "post-2",
    title: "Building Accessible Web Applications",
    summary:
      "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
    label: "Accessibility",
    author: "Marcus Rodriguez",
    published: "1 Jan 2024",
    url: "https://shadcnblocks.com",
    image: "/example.jpg",
  },
  {
    id: "post-3",
    title: "Modern Design Systems with Tailwind CSS",
    summary:
      "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
    label: "Design Systems",
    author: "Emma Thompson",
    published: "1 Jan 2024",
    url: "https://shadcnblocks.com",
    image: "/example.jpg",
  },
];

export default async function BlogsSection({ className }: Blog7Props) {
  const t = await getTranslations(
    "app./[locale]/blogs.components.BlogsSection",
  );

  return (
    <section
      className={cn(
        "mx-auto flex max-w-7xl flex-col items-center gap-10",
        className,
      )}
    >
      <div className="text-center">
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          {t("title")}
        </h2>
        <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
          {t("description")}
        </p>
      </div>

      <nav className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tempMockBlogs.map((post) => (
          <Link
            key={post.id}
            href="/blogs/example"
            variant="outline"
            className="flex h-auto flex-col justify-start gap-6 overflow-hidden rounded-xl p-0 pb-6 text-start whitespace-normal"
          >
            <Img
              width={600}
              height={300}
              src={post.image}
              alt={post.title}
              className="h-70 w-full object-cover"
            />

            <h3 className="line-clamp-2 px-6 text-lg font-semibold md:text-xl">
              {post.title}
            </h3>

            <p className="line-clamp-4 px-6 text-muted-foreground">
              {post.summary}
            </p>
          </Link>
        ))}
      </nav>
    </section>
  );
}
