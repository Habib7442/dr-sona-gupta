import type { Metadata } from "next";
import { Outfit, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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

export const metadata: Metadata = {
  title: "Dr. Sona Gupta Deb Purkayastha | Audiologist & Speech Therapist",
  description: "Registered RCI Certified Audiologist & Speech Therapist in Silchar, Assam. Practicing at Valley Hospital & Research Centre. Specializing in speech delays, hearing aids, and swallowing rehabilitation.",
  keywords: [
    "Dr Sona Gupta",
    "Audiologist Silchar",
    "Speech Therapist Silchar",
    "Valley Hospital Silchar",
    "Hearing Aid Silchar",
    "Speech Therapy Assam",
    "RCI Certified Therapist Silchar",
    "Child Speech Delay Silchar"
  ],
  authors: [{ name: "Dr. Sona Gupta Deb Purkayastha" }],
  creator: "Locallify",
  openGraph: {
    title: "Dr. Sona Gupta Deb Purkayastha | Audiologist & Speech Therapist",
    description: "Expert Audiology & Speech Pathology care in Barak Valley. Certified RCI Specialist practicing at Valley Hospital, Silchar.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  }
};

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
        className="min-h-full flex flex-col bg-brand-cyan-950 text-brand-white-950 selection:bg-brand-teal-500/30 font-sans"
      >
        {children}
      </body>
    </html>
  );
}
