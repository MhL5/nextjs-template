import Typography from "@/components/Typography";
import Img from "@/components/ui/Img";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MdxRemoteServer from "@/components/utils/MdxRemoteServer";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/formatters";
import { useLocale } from "next-intl";

type Blog = {
  title: string;
  authorName: string;
  image: string;
  pubDate: string;
  description: string;
  authorImage: string;

  markdown: string;
};

type Blogpost1Props = {
  className?: string;
  blog: Blog;
};

export default function Blogpost({
  blog: {
    title,
    authorName,
    image,
    pubDate,
    markdown,
    description,
    authorImage,
  },
  className,
}: Blogpost1Props) {
  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
        <h1 className="max-w-3xl text-5xl font-semibold text-pretty md:text-6xl">
          {title}
        </h1>
        <h3 className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          {description}
        </h3>

        <div className="flex items-center gap-3 text-sm md:text-base">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src={authorImage} />
            <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>
            <a href="#" className="font-semibold">
              {authorName}
            </a>
            <BlogTime pubDate={pubDate} />
          </span>
        </div>
        <div className="relative mt-5 mb-8 aspect-video h-full max-h-144 w-full">
          <Img
            sizes="1024px"
            fill
            src={image}
            alt="placeholder"
            className="size-full rounded-lg border object-cover"
          />
        </div>
      </div>

      <Typography as="article" className="max-w-3xl">
        <MdxRemoteServer source={markdown} />
      </Typography>
    </section>
  );
}

function BlogTime({ pubDate }: { pubDate: string }) {
  const locale = useLocale();
  return <time> {formatDate(pubDate, { locale })} </time>;
}
