import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { cn } from "@/lib/utils";
export const dynamic = "force-dynamic";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getAbilityRules } from "@/lib/casl";
import { AbilityProvider } from "@/providers/ability";
import { SessionProvider } from "@/providers/session";
import { auth } from "@/services/auth";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const suisse = localFont({
  src: [
    {
      path: "@/src/fonts/SuisseIntl-Regular-WebS.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "@/src/fonts/SuisseIntl-Medium-WebS.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
});

export const metadata: Metadata = {
  title: "Next.js Starter Kit",
  description: "A Next.js starter kit with Microsoft Entra ID authentication, internationalization, and more.",
  icons: {
    icon: [
      {
        url: "https://epfl-si.github.io/elements/svg/epfl-logo.svg",
      },
    ],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const session = await auth();

  return (
    <html lang={locale} className={cn("h-full", inter.variable, suisse.variable)}>
      <body className="antialiased h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <SessionProvider session={session}>{children}</SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
