import type { Metadata } from "next";
import { getMetadata } from "@/lib/seo";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = getMetadata({
  title: "Clinical Environment & Gallery",
  description: "Take a visual tour of our professional clinic settings, diagnostic tools, therapy rooms, and patient consultation spaces under Dr. Sona Gupta in Silchar, Assam.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Clinical Environment & Gallery | Sona Gupta Deb Purkayastha",
    description: "Take a visual tour of our professional clinic settings, diagnostic tools, therapy rooms, and patient consultation spaces under Dr. Sona Gupta in Silchar, Assam.",
    url: "/gallery",
    type: "website",
  }
});

export default function GalleryPage() {
  return <GalleryClient />;
}
