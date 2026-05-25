/**
 * $10,000 Premium Local SEO & Meta Configuration System
 * 
 * This file centralizes all metadata, local search keywords, open graph maps, 
 * and structural SEO config to dominate Silchar, Barak Valley, and broader Assam search queries.
 */

import { Metadata } from "next";

export const SITE_URL = "https://www.sonagupta.com"; // Swappable production URL

export const SEO_KEYWORDS = [
  // 1. Core Brand Keywords
  "Sona Gupta Deb Purkayastha",
  "Sona Gupta Silchar",
  "Sona Gupta Audiologist",
  "Sona Gupta Speech Therapist",
  
  // 2. Primary Local Search Intent (Silchar & Barak Valley)
  "best audiologist in Silchar",
  "best speech therapist in Silchar",
  "speech therapy clinic in Silchar",
  "hearing doctor in Silchar",
  "hearing test Silchar",
  "hearing aid center Silchar",
  "audiologist in Barak Valley",
  "speech therapy in Barak Valley",
  "RCI certified audiologist Silchar",
  
  // 3. Clinical Specialties & Services (Silchar)
  "child speech delay therapy Silchar",
  "autism speech therapist Silchar",
  "stammering treatment in Silchar",
  "stuttering clinic Silchar",
  "swallowing rehabilitation Silchar",
  "pediatric audiology Silchar",
  "tinnitus treatment Silchar",
  "hearing aid fitting Silchar",
  "adult speech therapy Silchar",
  "post-stroke speech rehabilitation Silchar",
  
  // 4. Institutional & Regional Trust
  "Valley Hospital Silchar doctors",
  "audiology specialist Valley Hospital Silchar",
  "Rehabilitation Council of India registered therapist Silchar",
  "speech therapist Valley Hospital Silchar",
  "ISHA affiliated audiologist Assam",
  "speech doctor Barak Valley",
  "hearing loss diagnosis Silchar"
];

export const siteConfig = {
  name: "Sona Gupta Deb Purkayastha",
  shortName: "Sona Gupta",
  title: "Sona Gupta Deb Purkayastha | RCI Certified Audiologist & Speech Therapist",
  description: "RCI Registered Audiologist & Speech Therapist practicing at Valley Hospital, Silchar, Assam. Expert care for child speech delays, hearing aids, tinnitus, swallowing issues, and neuro-rehabilitation across Barak Valley.",
  url: SITE_URL,
  ogImage: `${SITE_URL}/og_image.jpg`, // Matches public/og_image.jpg
  telephone: "+918876226682",
  address: {
    streetAddress: "Valley Hospital & Research Centre (P) Ltd., Meherpur",
    addressLocality: "Silchar",
    addressRegion: "Assam",
    postalCode: "788015",
    addressCountry: "IN"
  }
};

/**
 * Returns a robust Next.js Metadata object pre-configured for premium SEO,
 * including structured openGraph cards, local keywords, and crawler robots configs.
 */
export function getMetadata(custom: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: SEO_KEYWORDS,
    authors: [{ name: siteConfig.name, url: SITE_URL }],
    creator: siteConfig.name,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: "./",
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: "./",
      siteName: siteConfig.name,
      images: [
        {
          url: "/og_image.jpg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        }
      ],
      locale: "en_IN",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: ["/og_image.jpg"],
    },
    // Schema structure fallback variables
    other: {
      "format-detection": "telephone=yes",
    },
    ...custom
  };
}
