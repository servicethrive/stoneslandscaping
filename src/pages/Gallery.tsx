import { usePageMeta } from "@/hooks/use-page-meta";
import Layout from "@/components/layout/Layout";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABanner from "@/components/sections/CTABanner";
import { getImageGallerySchema, getBreadcrumbSchema } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";

// Pavers
import catalinaPavers from "@/assets/projects/Catalina_Grana_pavers.jpg";
import woodFinishWalkway from "@/assets/projects/Wood_finish_Porcelain_walkway.jpg";
import prefabPergola from "@/assets/projects/Prefabricated_placebo-2.jpg";
import frontYardPavers from "@/assets/projects/front_yard_pavers.jpg";
import paverWalkways from "@/assets/projects/paver_walkways.jpg";
import hollandstoneDriveway from "@/assets/projects/Hollandstone_driveway_paver.jpg";

// Landscaping
import landscapingSanJose from "@/assets/projects/landscaping-san-jose-ca.jpg";
import lavaRockLandscaping from "@/assets/projects/lava-rock-landscaping-san-jose.jpg";
import sodLandscape from "@/assets/projects/sod_landscape_with_circle_accent.jpg";
import lowMaintenanceLandscape from "@/assets/projects/Low_maintenance_Landscape.jpg";
import pebbleStonesLandscape from "@/assets/projects/pebble-stones-landscape-2.jpg";

// Outdoor Kitchens
import outdoorKitchenFirepit from "@/assets/projects/outdoor_kitchen_and_firepit.jpg";
import outdoorKitchenPergola from "@/assets/projects/outdoor_kitchen_with_a_pergola.jpg";

// Artificial Turf
import turfLargeYard from "@/assets/projects/articifical_turf_in_large_yard.jpg";
import turfFrontYard from "@/assets/projects/artifical_turf_in_front_yard.jpg";

// Concrete
import stampedConcrete from "@/assets/projects/Stamped_concrete.jpg";
import concreteWork from "@/assets/projects/concrete_work_in_san_jose.jpg";

// Hardscape
import lavaRockHardscape from "@/assets/projects/lava-rock-hardscape-san-jose.jpg";

// Retaining Walls
import seatedRetainingWalls from "@/assets/projects/seated_retaining_walls.jpg";
import sealedWetLook from "@/assets/projects/sealed_wet_look_pavers.jpg";

const galleryImages = [
  // Pavers
  { src: catalinaPavers, alt: "Catalina Grana paver patio installation", category: "Pavers" },
  { src: woodFinishWalkway, alt: "Wood finish porcelain walkway", category: "Pavers" },
  { src: prefabPergola, alt: "Prefabricated pergola with paver patio", category: "Pavers" },
  { src: frontYardPavers, alt: "Front yard paver driveway and walkway", category: "Pavers" },
  { src: paverWalkways, alt: "Custom paver walkway design", category: "Pavers" },
  { src: hollandstoneDriveway, alt: "Hollandstone driveway paver installation", category: "Pavers" },

  // Landscaping
  { src: landscapingSanJose, alt: "Professional landscaping in San Jose", category: "Landscaping" },
  { src: lavaRockLandscaping, alt: "Lava rock landscaping design", category: "Landscaping" },
  { src: sodLandscape, alt: "Sod landscape with decorative circle accent", category: "Landscaping" },
  { src: lowMaintenanceLandscape, alt: "Low maintenance landscape design", category: "Landscaping" },
  { src: pebbleStonesLandscape, alt: "Pebble stones landscape installation", category: "Landscaping" },

  // Outdoor Kitchens
  { src: outdoorKitchenFirepit, alt: "Outdoor kitchen with built-in fire pit", category: "Outdoor Kitchens" },
  { src: outdoorKitchenPergola, alt: "Outdoor kitchen with custom pergola", category: "Outdoor Kitchens" },

  // Artificial Turf
  { src: turfLargeYard, alt: "Artificial turf installation in large backyard", category: "Artificial Turf" },
  { src: turfFrontYard, alt: "Artificial turf in front yard", category: "Artificial Turf" },

  // Concrete
  { src: stampedConcrete, alt: "Stamped concrete driveway", category: "Concrete" },
  { src: concreteWork, alt: "Concrete work in San Jose", category: "Concrete" },

  // Hardscape
  { src: lavaRockHardscape, alt: "Lava rock hardscape design", category: "Hardscape" },

  // Retaining Walls
  { src: seatedRetainingWalls, alt: "Seated retaining wall installation", category: "Retaining Walls" },

  // Additional Pavers
  { src: sealedWetLook, alt: "Sealed wet look paver walkway", category: "Pavers" },
  { src: "/images/california-gold-tile-walkway.jpg", alt: "California gold tile walkway", category: "Pavers" },
];

const Gallery = () => {
  usePageMeta(
    "Project Gallery | Stones Landscaping Inc. | San Jose, CA",
    "Browse completed hardscape & landscaping projects in San Jose. Paver patios, outdoor kitchens, retaining walls & more."
  );

  return (
    <Layout>
      <StructuredData data={getImageGallerySchema(galleryImages.map(img => ({ src: typeof img.src === 'string' ? img.src : '', alt: img.alt })))} />
      <StructuredData data={getBreadcrumbSchema([{ name: "Gallery", path: "/gallery" }])} />
      <section className="bg-brand-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Browse real projects completed by Stones Landscaping across San Jose and the Bay Area.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <GalleryGrid
            images={galleryImages}
            categories={["Pavers", "Landscaping", "Outdoor Kitchens", "Artificial Turf", "Concrete", "Hardscape", "Retaining Walls"]}
          />
        </div>
      </section>

      <CTABanner title="Want Results Like These?" subtitle="Request a free estimate and let's discuss your outdoor renovation project." />
    </Layout>
  );
};

export default Gallery;
