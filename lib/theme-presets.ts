// Curated theme presets and font pairs for the admin Appearance page.
// Keys here are stored verbatim in SiteSettings.themePreset / fontPair.
// Pure data (no next/font calls) so it's safe to import from client
// components too — the actual font loading lives in lib/fonts.ts.

export interface ThemeTokens {
  sage700: string;
  sage800: string;
  sage500: string;
  sage100: string;
  cream: string;
  sand: string;
  clay: string;
  clay700: string;
  mist: string;
  ink: string;
  inkMuted: string;
  line: string;
}

export interface ThemePreset {
  key: string;
  label: string;
  description: string;
  tokens: ThemeTokens;
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    key: "plum-gold",
    label: "Plum & Gold",
    description: "Default — matches the Manaswellness logo.",
    tokens: {
      sage700: "#5b3570",
      sage800: "#2f1240",
      sage500: "#8e6aa8",
      sage100: "#e2cfec",
      cream: "#f3ead9",
      sand: "#e9dcc5",
      clay: "#c9a464",
      clay700: "#a9823f",
      mist: "#e3ddf0",
      ink: "#332b22",
      inkMuted: "#6b6054",
      line: "#ddd0bc",
    },
  },
  {
    key: "sage-clay",
    label: "Sage & Clay",
    description: "Calm, earthy green with a warm terracotta accent.",
    tokens: {
      sage700: "#4f6b5a",
      sage800: "#3e5547",
      sage500: "#7f9c88",
      sage100: "#e6ede6",
      cream: "#faf7f2",
      sand: "#efe6da",
      clay: "#c98b6b",
      clay700: "#a86a4c",
      mist: "#dce6ec",
      ink: "#2b2f2c",
      inkMuted: "#5e655f",
      line: "#e3ddd3",
    },
  },
  {
    key: "ocean-sand",
    label: "Ocean & Sand",
    description: "Deep teal with a warm sandy base.",
    tokens: {
      sage700: "#2f6f7a",
      sage800: "#234f57",
      sage500: "#6fa3ac",
      sage100: "#e3eeef",
      cream: "#f5f1e8",
      sand: "#eae2cf",
      clay: "#d4a24c",
      clay700: "#a97e36",
      mist: "#e1e8ec",
      ink: "#233335",
      inkMuted: "#5c6b6d",
      line: "#dcd3c0",
    },
  },
  {
    key: "rose-cream",
    label: "Rose & Cream",
    description: "Soft dusty rose with a warm cream base.",
    tokens: {
      sage700: "#8c5468",
      sage800: "#6e3f51",
      sage500: "#c08a9b",
      sage100: "#f6e9ec",
      cream: "#faf3ec",
      sand: "#f0e1d6",
      clay: "#c9a05a",
      clay700: "#9e7d42",
      mist: "#f0e3ea",
      ink: "#3a2a2e",
      inkMuted: "#705c61",
      line: "#e8dad7",
    },
  },
];

export const DEFAULT_THEME_PRESET = THEME_PRESETS[0].key;

export function getThemePreset(key: string | null | undefined): ThemePreset {
  return THEME_PRESETS.find((p) => p.key === key) ?? THEME_PRESETS[0];
}

export interface FontPair {
  key: string;
  label: string;
  headingVar: string; // CSS variable name set by lib/fonts.ts
  bodyVar: string;
}

export const FONT_PAIRS: FontPair[] = [
  { key: "fraunces-jakarta", label: "Fraunces + Plus Jakarta Sans", headingVar: "--font-fraunces", bodyVar: "--font-plus-jakarta" },
  { key: "playfair-inter", label: "Playfair Display + Inter", headingVar: "--font-playfair", bodyVar: "--font-inter" },
  { key: "lora-work", label: "Lora + Work Sans", headingVar: "--font-lora", bodyVar: "--font-work-sans" },
  { key: "cormorant-nunito", label: "Cormorant Garamond + Nunito Sans", headingVar: "--font-cormorant", bodyVar: "--font-nunito" },
  { key: "dmserif-dmsans", label: "DM Serif Display + DM Sans", headingVar: "--font-dm-serif", bodyVar: "--font-dm-sans" },
];

export const DEFAULT_FONT_PAIR = FONT_PAIRS[0].key;

export function getFontPair(key: string | null | undefined): FontPair {
  return FONT_PAIRS.find((p) => p.key === key) ?? FONT_PAIRS[0];
}
