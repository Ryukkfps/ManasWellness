import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Manaswellness",
    template: "%s | Manaswellness",
  },
  description:
    "Manaswellness offers individual and couples counselling, group wellness events, and mental health resources in a calm, confidential space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Cookie-consent approach (Cookiebot vs. in-house vs. none) is an open
  // question for the client — see the implementation plan. No consent
  // script is loaded until that's decided, rather than shipping the
  // previous owner's Cookiebot account ID.
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
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
