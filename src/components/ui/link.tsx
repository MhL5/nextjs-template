import { buttonVariants } from "@/components/ui/button";
import { Link as I18nLink } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof I18nLink> &
  VariantProps<typeof buttonVariants>;

function Link({ className, variant, size, ...props }: LinkProps) {
  return (
    <I18nLink
      data-slot="link"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Link, type LinkProps };
