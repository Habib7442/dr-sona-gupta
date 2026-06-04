import { siteConfig } from "@/lib/seo";

export default function JsonLd() {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/#medical-business`,
    "name": siteConfig.name,
    "alternateName": siteConfig.shortName,
    "image": siteConfig.ogImage,
    "telephone": siteConfig.telephone,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.streetAddress,
      "addressLocality": siteConfig.address.addressLocality,
      "addressRegion": siteConfig.address.addressRegion,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.addressCountry,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7843,
      "longitude": 92.7933,
    },
    "priceRange": "$$",
    "medicalSpecialty": ["Audiology", "SpeechPathology"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "16:00",
        "closes": "19:00",
      },
    ],
    "memberOf": {
      "@type": "MedicalOrganization",
      "name": "Rehabilitation Council of India (RCI)",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ranjan Dev",
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
        "reviewBody": "Our child had severe articulation issues and was struggling to connect words. Sona Gupta's structured early intervention therapy has worked wonders. His vocabulary and pronunciation have improved drastically over the past year!",
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Subrata Roy",
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
        "reviewBody": "Exceptional clinical care! Sona helped diagnose my progressive hearing loss, conducted multi-brand comparative digital aid trials, and tuned my custom ear molds. The invisible hearing solution has completely changed my quality of life.",
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Meera Nath",
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
        "reviewBody": "I was suffering from a constant buzzing noise in my ears that made it hard to sleep. Sona's clinical acoustic masking protocols and stress counseling gave me immediate relief. Strongly recommend her practice in Silchar!",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your consulting hours at Valley Hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OPD consultation slots are available Monday through Saturday, from 10:00 AM to 1:00 PM and from 4:00 PM to 7:00 PM. Prior booking is highly recommended.",
        },
      },
      {
        "@type": "Question",
        "name": "Do I need a prior appointment for hearing aid trials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Comparative digital trials, real-ear measurements, and custom mold fitting take approximately 45 to 60 minutes. Booking an appointment ensures dedicated care and minimal wait times.",
        },
      },
      {
        "@type": "Question",
        "name": "What age groups do you support for speech therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer lifespan speech-language rehabilitation, ranging from play-based early intervention for toddlers (aged 1.5+ years) to communication support for autism (ASD), ADHD, stuttering, and adult post-stroke stroke rehabilitation (aphasia/dysarthria).",
        },
      },
      {
        "@type": "Question",
        "name": "How is patient data privacy and clinical confidentiality handled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We adhere to strict clinical ethics and confidentiality standards. All patient diagnostics, case history records, and treatment plans are kept fully private and secure.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
