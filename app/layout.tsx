import type { Metadata } from "next";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";
import { ALL_FONT_VARIABLES } from "@/lib/fonts";
import { getThemePreset, getFontPair } from "@/lib/theme-presets";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: {
    default: "Manaswellness",
    template: "%s | Manaswellness",
  },
  description:
    "Manaswellness offers individual and couples counselling, group wellness events, and mental health resources in a calm, confidential space.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Cookie-consent approach (Cookiebot vs. in-house vs. none) is an open
  // question for the client — see the implementation plan. No consent
  // script is loaded until that's decided, rather than shipping the
  // previous owner's Cookiebot account ID.

  let settings: { themePreset: string; fontPair: string } | null = null;
  try {
    settings = await prisma.siteSettings.findFirst({
      select: { themePreset: true, fontPair: true },
    });
  } catch (error) {
    console.error('Database error:', error);
  }

  const theme = getThemePreset(settings?.themePreset);
  const font = getFontPair(settings?.fontPair);

  // Runtime theme/font override: admin-picked preset wins over the
  // defaults baked into globals.css — same selector specificity, later in
  // the document, so the cascade applies it without a rebuild.
  const themeOverrideCss = `:root {
    --color-sage-700: ${theme.tokens.sage700};
    --color-sage-800: ${theme.tokens.sage800};
    --color-sage-500: ${theme.tokens.sage500};
    --color-sage-100: ${theme.tokens.sage100};
    --color-cream: ${theme.tokens.cream};
    --color-sand: ${theme.tokens.sand};
    --color-clay: ${theme.tokens.clay};
    --color-clay-700: ${theme.tokens.clay700};
    --color-mist: ${theme.tokens.mist};
    --color-ink: ${theme.tokens.ink};
    --color-ink-muted: ${theme.tokens.inkMuted};
    --color-line: ${theme.tokens.line};
    --font-serif: var(${font.headingVar});
    --font-sans: var(${font.bodyVar});
  }`;

  return (
    <html lang="en" className={ALL_FONT_VARIABLES}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeOverrideCss }} />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-cream text-ink">
        <ConditionalHeader />
        <main className="flex-grow">
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
