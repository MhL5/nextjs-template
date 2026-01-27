"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { CONTACT_SUPPORT_LINK } from "@/constants";
import { cn } from "@/lib/utils";
import { isDev } from "@/utils/checks";
import { ArrowLeft, Circle, Home, RotateCcw } from "lucide-react";
import type { Route } from "next";
// we don't have access to next-intl inside root level fallback pages
// eslint-disable-next-line no-restricted-imports
import Link from "next/link";
import type { ComponentProps } from "react";

type Messages = {
  title: string;
  description: string;
  homeButtonLabel: string;
  contactSupport: string;
  needHelp: string;
};

type NotFoundPageProps = {
  variant: "not-found";
  className?: string;
  goBackButtonLabel: string;
} & Messages;

type ErrorPageProps = {
  variant: "error";
  error: Error & { digest?: string };
  reset: () => void;
  className?: string;
  tryAgainButtonLabel: string;
} & Messages;

type FallbackPagesProps = NotFoundPageProps | ErrorPageProps;

function FallbackPages({
  title,
  description,
  className,
  homeButtonLabel,
  needHelp,
  contactSupport,
  ...props
}: FallbackPagesProps) {
  return (
    <section className={cn("grid min-h-svh place-items-center p-4", className)}>
      <div className="max-w-md space-y-7 text-center">
        <header>
          <div
            className={`${props.variant === "not-found" ? "text-yellow-600 dark:text-yellow-400" : "text-destructive"} mx-auto mb-5 font-mono text-9xl`}
          >
            {props.variant === "not-found" ? 404 : 500}
          </div>

          <h1 className="mb-4 text-4xl font-semibold text-foreground">
            {title}
          </h1>
          <p
            className="line-clamp-6 text-base leading-relaxed text-pretty text-muted-foreground"
            role="alert"
            aria-live="polite"
          >
            {/* On development mode, show the error message */}
            {isDev() && props.variant === "error"
              ? props.error.message
              : description}{" "}
          </p>
        </header>

        <nav
          className="flex w-full flex-col items-center justify-center gap-3 capitalize sm:flex-row [&_a]:w-full [&_a]:basis-[calc(50%-0.375rem)] [&_button]:w-full [&_button]:basis-[calc(50%-0.375rem)]"
          aria-label="actions"
        >
          <Button asChild variant="outline" className="capitalize">
            <Link href="/">
              <Home /> {homeButtonLabel}
            </Link>
          </Button>

          {props.variant === "error" ? (
            <Button onClick={props.reset} className="capitalize">
              <RotateCcw />
              {props.tryAgainButtonLabel}
            </Button>
          ) : (
            <Button
              onClick={() => window.history.back()}
              className="capitalize"
            >
              <ArrowLeft /> {props.goBackButtonLabel}
            </Button>
          )}
        </nav>

        <footer className="text-sm text-muted-foreground capitalize">
          {needHelp}
          {"?"}
          <Button asChild variant="link" className="px-1">
            <Link
              href={
                CONTACT_SUPPORT_LINK(
                  props.variant === "error"
                    ? `Error Code (#${props.error.digest}):\n${props.error.message}`
                    : "",
                ) as Route
              }
              target="_blank"
            >
              {contactSupport}
            </Link>
          </Button>
        </footer>
      </div>
    </section>
  );
}

const NotFoundPage = (props: Omit<NotFoundPageProps, "variant">) => (
  <FallbackPages variant="not-found" {...props} />
);

const ErrorPage = (props: Omit<ErrorPageProps, "variant">) => (
  <FallbackPages variant="error" {...props} />
);

function LoadingPage({
  className,
  ariaLabel,
  ...props
}: ComponentProps<"section"> & {
  ariaLabel: string;
}) {
  return (
    <section
      role="status"
      aria-label={ariaLabel}
      aria-busy={true}
      className={cn("grid min-h-svh w-full place-items-center", className)}
      {...props}
    >
      <div className="isolate grid grid-cols-1 grid-rows-1 place-items-center">
        <Circle className="z-10 col-start-1 row-start-1 size-22 animate-circleSvgGrow bg-transparent stroke-1 text-primary [--circumference:572px]" />

        <Logo className="z-10 col-start-1 row-start-1 size-19 animate-loadingFadeIn rounded-full bg-primary p-1 opacity-0 starting:opacity-0" />

        <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-20 w-20 animate-pingMd rounded-full bg-primary/80 delay-1000 starting:opacity-0" />
        <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-20 w-20 animate-pingSm rounded-full bg-primary/80 delay-1000 starting:opacity-0" />
      </div>
    </section>
  );
}

export { ErrorPage, LoadingPage, NotFoundPage };
