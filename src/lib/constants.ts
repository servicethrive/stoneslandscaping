export const BUSINESS = {
  name: "Stones Landscaping Inc.",
  shortName: "Stones Landscaping",
  phone: "(408) 204-8418",
  phoneTel: "+14082048418",
  email: "stoneslandscapinginc1201@gmail.com",
  address: "3150 Almaden Expy Suite 130, San Jose, CA 95118",
  license: "1032828",
  licenseClassifications: "C27 - Landscaping, C-61 / D06 - Concrete Related Services",
  founded: 2017,
  googleReviews: 56,
  yelpReviews: 123,
  paverWarrantyYears: 21,
  landscapeWarrantyDays: 90,
} as const;

export const SERVICES = [
  {
    title: "Pavers",
    path: "/pavers",
    description: "Custom paver patios, walkways, and driveways built with premium materials and backed by a 21-year warranty.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hardscape",
    path: "/hardscape",
    description: "Complete hardscape construction including retaining walls, outdoor structures, and stone installations.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Landscaping",
    path: "/landscaping",
    description: "Full-service design-build landscaping for front yards, backyards, and complete outdoor transformations.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Concrete Driveways",
    path: "/concrete-driveways",
    description: "Professional driveway replacement and installation with stamped, colored, and standard concrete options.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Outdoor Kitchens",
    path: "/outdoor-kitchens",
    description: "Custom outdoor kitchen design and construction for year-round entertaining in the Bay Area.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Retaining Walls",
    path: "/retaining-walls",
    description: "Structural and decorative retaining walls that solve grading challenges and add visual impact.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Artificial Turf",
    path: "/artificial-turf",
    description: "Low-maintenance artificial turf installation for lush, green yards without the water bill or upkeep.",
    image: "https://images.unsplash.com/photo-1558635924-b60e7d521548?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const SERVICE_AREAS = [
  { name: "San Jose", path: "/service-areas/san-jose", primary: true },
  { name: "Atherton", path: "/service-areas/atherton", primary: false },
  { name: "Los Gatos", path: "/service-areas/los-gatos", primary: false },
  { name: "Saratoga", path: "/service-areas/saratoga", primary: false },
  { name: "Campbell", path: "/service-areas/campbell", primary: false },
  { name: "Santa Clara", path: "/service-areas/santa-clara", primary: false },
  { name: "Palo Alto", path: "/service-areas", primary: false },
  { name: "Menlo Park", path: "/service-areas", primary: false },
  { name: "Hillsborough", path: "/service-areas", primary: false },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  heroAbout: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
  pavers: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  landscaping: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  outdoorKitchen: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  concrete: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  retainingWall: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
  turf: "https://images.unsplash.com/photo-1558635924-b60e7d521548?auto=format&fit=crop&w=1200&q=80",
  hardscape: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
  gallery1: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
  gallery2: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
  gallery3: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
  gallery4: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  gallery5: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
  gallery6: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
} as const;
