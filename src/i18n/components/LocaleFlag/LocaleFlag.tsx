import Img, { type ImgProps } from "@/components/ui/Img";
import { cn } from "@/lib/utils";
import type { Locale } from "next-intl";
import type { StaticImageData } from "next/image";

import deFlag from "./assets/Flag-Germany.png";
import hindiFlag from "./assets/Flag-India.png";
import portugueseFlag from "./assets/Flag-Portugal.png";
import ArFlag from "./assets/arabicFlag.png";
import chinaFlag from "./assets/chinaFlag.png";
import enFlag from "./assets/englishFlag.png";
import frFlag from "./assets/frenchFlag.png";
import italyFlag from "./assets/italyFlag.png";
import japanFlag from "./assets/japanFlag.png";
import malayFlag from "./assets/malayFlag.png";
import russianFlag from "./assets/russianFlag.png";
import esFlag from "./assets/spanishFlag.png";
import turkishFlag from "./assets/turkishFlag.png";

const localeFlagMapping: Record<Locale, StaticImageData> = {
  ar: ArFlag,
  de: deFlag,
  en: enFlag,
  es: esFlag,
  fr: frFlag,
  hi: hindiFlag,
  it: italyFlag,
  ja: japanFlag,
  ms: malayFlag,
  pt: portugueseFlag,
  ru: russianFlag,
  tr: turkishFlag,
  zh: chinaFlag,
};

type LocaleFlagProps = Omit<ImgProps, "src" | "alt"> & {
  locale: Locale;
  localeName: string;
};

export default function LocaleFlag({
  locale,
  localeName,
  className,
  ...props
}: LocaleFlagProps) {
  return (
    <Img
      src={localeFlagMapping[locale]}
      alt={`flag of ${localeName}`}
      width={80}
      height={80}
      quality={75}
      loading="lazy"
      className={cn("size-5 shrink-0", className)}
      {...props}
    />
  );
}
