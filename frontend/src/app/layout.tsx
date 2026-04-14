import type { Metadata } from "next";
import {
  Kanit,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Sans_SC,
} from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { LangProvider } from "@/context/LangContext";
import { getSiteUrl } from "@/lib/site";

config.autoAddCss = false;

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-jp",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

const site = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "PINAHX — NOT JUST CONTENT IT'S YOUR GROWTH",
    template: "%s | PINAHX",
  },
  description:
    "Digital Content Production Studio. We analyze, strategize, and design communication that drives real growth.",
  keywords: [
    "PINAHX",
    "digital content",
    "content production",
    "Thailand",
    "ดิจิทัลคอนเทนต์",
  ],
  authors: [{ name: "PINAHX" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "PINAHX",
    title: "PINAHX — NOT JUST CONTENT IT'S YOUR GROWTH",
    description:
      "Digital Content Production Studio. We analyze, strategize, and design communication that drives real growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PINAHX — NOT JUST CONTENT IT'S YOUR GROWTH",
    description:
      "Digital Content Production Studio. We analyze, strategize, and design communication that drives real growth.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-lang="en"
      className={`${kanit.variable} ${notoSansSC.variable} ${notoSansJP.variable} ${notoSansKR.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased text-black bg-white">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
