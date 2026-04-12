import { BUSINESS, SERVICES, SERVICE_AREA_COUNTIES } from "./constants";

const SITE_URL = "https://stoneslandscaping.lovable.app";
const LOGO_URL = `${SITE_URL}/images/stones-landscaping-logo.png`;

const localBusinessBase = () => ({
  "@type": ["HomeAndConstructionBusiness", "LandscapingService"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  alternateName: BUSINESS.shortName,
  url: SITE_URL,
  logo: LOGO_URL,
  image: `${SITE_URL}/images/hero-banner.jpg`,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3150 Almaden Expy Suite 130",
    addressLocality: "San Jose",
    addressRegion: "CA",
    postalCode: "95118",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.2474,
    longitude: -121.8639,
  },
  foundingDate: `${BUSINESS.founded}`,
  priceRange: "$$$",
  paymentAccepted: "Cash, Check, Credit Card, Financing",
  currenciesAccepted: "USD",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Contractor License",
    recognizedBy: { "@type": "Organization", name: "California CSLB" },
    name: `CA License #${BUSINESS.license} — ${BUSINESS.licenseClassifications}`,
  },
  areaServed: SERVICE_AREA_COUNTIES.flatMap((c) =>
    c.cities.map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "AdministrativeArea", name: c.county },
    }))
  ),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: String(BUSINESS.googleReviews + BUSINESS.yelpReviews),
    reviewCount: String(BUSINESS.googleReviews + BUSINESS.yelpReviews),
  },
  sameAs: [BUSINESS.googleProfileUrl, BUSINESS.yelpProfileUrl],
});

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    ...localBusinessBase(),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": `${SITE_URL}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: LOGO_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: [BUSINESS.googleProfileUrl, BUSINESS.yelpProfileUrl],
  };
}

export function getServiceSchema(
  title: string,
  description: string,
  image: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}${url}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    serviceType: title,
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getReviewSchema(
  reviews: Array<{ name: string; text: string; service: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: String(BUSINESS.googleReviews + BUSINESS.yelpReviews),
      reviewCount: String(BUSINESS.googleReviews + BUSINESS.yelpReviews),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@type": "Service",
        name: r.service,
      },
    })),
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Stones Landscaping",
    url: `${SITE_URL}/contact`,
    mainEntity: { "@id": `${SITE_URL}/#business` },
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Stones Landscaping",
    url: `${SITE_URL}/about`,
    mainEntity: { "@id": `${SITE_URL}/#business` },
  };
}

export function getImageGallerySchema(
  images: Array<{ src: string; alt: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Stones Landscaping Project Gallery",
    url: `${SITE_URL}/gallery`,
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.src.startsWith("http") ? img.src : `${SITE_URL}${img.src}`,
      name: img.alt,
    })),
  };
}

export function getServiceAreaPageSchema(cityName: string, cityPath: string) {
  return {
    "@context": "https://schema.org",
    ...localBusinessBase(),
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: "California" },
    },
    url: `${SITE_URL}${cityPath}`,
  };
}

export { SITE_URL };
