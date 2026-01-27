import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const LogoSvg = ({ className }: { className?: string }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Mhl Logo"
  >
    <g className="font-space-grotesk fill-primary-foreground text-[10px] font-bold tracking-tighter">
      <text x="18" y="18" textAnchor="middle" dominantBaseline="middle">
        {"LOGO"}
      </text>
    </g>
  </svg>
);

export default function Logo({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "grid size-9 place-items-center rounded-full bg-primary text-primary-foreground",
        className,
      )}
      {...props}
    >
      <LogoSvg className="size-full text-primary-foreground" />
    </div>
  );
}
