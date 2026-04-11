import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { getSiteUrl } from "@/lib/site";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
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
    locale: "th_TH",
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
    <html lang="th" className={`${kanit.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-black bg-white">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
