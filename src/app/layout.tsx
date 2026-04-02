import type { Metadata } from "next";
import { playfairDisplay, dmSans, jetbrainsMono } from "@/lib/fonts";
import { Navigation } from "@/components/global/Navigation";
import dynamic from "next/dynamic";
import "./globals.css";

const Footer = dynamic(() => import("@/components/global/Footer").then(m => m.Footer));

export const metadata: Metadata = {
  title: "Throttl — AI Advisory for Operators",
  description:
    "We help business leaders cut through AI complexity and build systems that deliver measurable, consistent value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
