import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES } from "@/lib/constants";

const galleryImages = [
  { src: IMAGES.pavers, alt: "Custom paver patio installation in San Jose", category: "Pavers" },
  { src: IMAGES.gallery1, alt: "Luxury backyard landscaping design", category: "Landscaping" },
  { src: IMAGES.hardscape, alt: "Modern hardscape construction", category: "Hardscape" },
  { src: IMAGES.outdoorKitchen, alt: "Custom outdoor kitchen with stone countertops", category: "Outdoor Kitchens" },
  { src: IMAGES.concrete, alt: "Stamped concrete driveway installation", category: "Concrete" },
  { src: IMAGES.retainingWall, alt: "Retaining wall with integrated landscaping", category: "Retaining Walls" },
  { src: IMAGES.turf, alt: "Artificial turf lawn installation", category: "Artificial Turf" },
  { src: IMAGES.gallery2, alt: "Front yard landscape renovation", category: "Landscaping" },
  { src: IMAGES.gallery3, alt: "Paver walkway and patio design", category: "Pavers" },
  { src: IMAGES.gallery4, alt: "Complete backyard transformation", category: "Hardscape" },
  { src: IMAGES.gallery5, alt: "Modern outdoor living space", category: "Outdoor Kitchens" },
  { src: IMAGES.gallery6, alt: "Professional landscape installation", category: "Landscaping" },
];

const Gallery = () => {
  useEffect(() => {
    document.title = "Project Gallery | Stones Landscaping Inc. | San Jose, CA";
  }, []);

  return (
    <Layout>
      <section className="bg-brand-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Browse real projects completed by Stones Landscaping across San Jose and the Bay Area. These placeholder images represent the quality and scope of work we deliver.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <GalleryGrid
            images={galleryImages}
            categories={["Pavers", "Landscaping", "Hardscape", "Outdoor Kitchens", "Concrete", "Retaining Walls", "Artificial Turf"]}
          />
        </div>
      </section>

      <CTABanner title="Want Results Like These?" subtitle="Request a free estimate and let's discuss your outdoor renovation project." />
    </Layout>
  );
};

export default Gallery;
