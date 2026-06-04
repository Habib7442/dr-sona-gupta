import type { Metadata } from "next";
import { Outfit, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "scroll-smooth",
        inter.variable,
        outfit.variable,
        cormorant.variable
      )}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#F3F7F5] text-slate-900 selection:bg-brand-teal-500/10 selection:text-brand-teal-500 font-sans"
      >
        {children}
      </body>
    </html>
  );
}
