import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "PINAHX — NOT JUST CONTENT IT'S YOUR GROWTH",
  description: "Digital Content Production Studio. We analyze, strategize, and design communication that drives real growth.",
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
