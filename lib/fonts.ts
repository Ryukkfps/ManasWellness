// All curated font-pair options (see lib/theme-presets.ts FONT_PAIRS),
// loaded once here and combined into one className for <html>. Each uses
// preload: false — next/font only self-hosts and fetches a font once its
// CSS variable is actually referenced in applied CSS, which the active
// pair's variable is (via the :root override in app/layout.tsx) and the
// inactive ones aren't. Keep this list in sync with FONT_PAIRS.
import {
  Fraunces,
  Plus_Jakarta_Sans,
  Playfair_Display,
  Inter,
  Lora,
  Work_Sans,
  Cormorant_Garamond,
  Nunito_Sans,
  DM_Serif_Display,
  DM_Sans,
} from "next/font/google";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["400", "500", "600"], preload: false });
const plusJakarta = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta", subsets: ["latin"], weight: ["400", "500", "600", "700"], preload: false });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["500", "600", "700"], preload: false });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700"], preload: false });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: ["500", "600"], preload: false });
const workSans = Work_Sans({ variable: "--font-work-sans", subsets: ["latin"], weight: ["400", "500", "600"], preload: false });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["500", "600", "700"], preload: false });
const nunito = Nunito_Sans({ variable: "--font-nunito", subsets: ["latin"], weight: ["400", "500", "600", "700"], preload: false });
const dmSerif = DM_Serif_Display({ variable: "--font-dm-serif", subsets: ["latin"], weight: ["400"], preload: false });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"], preload: false });

export const ALL_FONT_VARIABLES = [
  fraunces.variable,
  plusJakarta.variable,
  playfair.variable,
  inter.variable,
  lora.variable,
  workSans.variable,
  cormorant.variable,
  nunito.variable,
  dmSerif.variable,
  dmSans.variable,
].join(" ");
