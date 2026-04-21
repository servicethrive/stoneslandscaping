import { usePageMeta } from "@/hooks/use-page-meta";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ZigZagSection from "@/components/sections/ZigZagSection";
import { IMAGES, BUSINESS, SERVICES } from "@/lib/constants";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import turfLargeYard from "@/assets/projects/articifical_turf_in_large_yard.jpg";
import turfFrontYard from "@/assets/projects/artifical_turf_in_front_yard.jpg";
import { CheckCircle } from "lucide-react";

const ArtificialTurf = () => {
  usePageMeta(
    "Artificial Turf Installation San Jose | Premium Synthetic Lawns | Stones Landscaping",
    "Artificial turf installation in San Jose. Premium synthetic lawns for residential & commercial. Low maintenance, year-round green. Free quotes."
  );

  const turfTypes = [
    { name: "Landscape Turf", desc: "Natural-looking residential lawns with a soft 1.5\"–2\" pile height. Designed to mimic the appearance and feel of healthy natural grass - the most popular choice for full front and backyard installations." },
    { name: "Pet Turf", desc: "Engineered for homes with dogs and other pets. Antimicrobial infill controls odor, faster-draining backing handles daily use, and a more durable fiber stands up to running, digging, and play without matting." },
    { name: "Putting Green Turf", desc: "Short-pile, dense turf engineered for true ball roll and consistent green speeds. Custom-contoured to your space with cup placements, fringe, and optional chipping zones for a backyard practice green." },
    { name: "Playground Turf", desc: "IPEMA-certified safety-rated turf installed over a shock-absorbing pad. Provides a soft, clean, all-weather play surface for swing sets, climbing structures, and dedicated kids' play areas." },
  ];

  const svc = SERVICES.find(s => s.path === "/artificial-turf")!;
  const faqs = [
    { question: "How long does artificial turf last?", answer: "Professionally installed premium turf typically lasts 15–20 years with minimal maintenance. The quality of the base preparation and the turf product itself are the two biggest factors in lifespan. We use commercial-grade products and proper base construction to maximize longevity." },
    { question: "Does artificial turf get hot in the sun?", answer: "Direct sunlight can warm turf surfaces, similar to any outdoor surface including concrete, pavers, and natural stone. Shaded areas stay cool. Modern turf products with lighter-colored backing and specialized infill help manage heat. If heat is a concern, we can discuss turf products with enhanced cooling technology." },
    { question: "Is artificial turf safe for dogs and pets?", answer: "Yes. Premium turf drains well, is easy to clean with a simple hose rinse, and doesn't harbor fleas or ticks like natural grass. Proper antimicrobial infill keeps odor under control even with regular pet use. We install many turf projects specifically as dedicated pet areas." },
    { question: "How does artificial turf compare to natural grass on cost?", answer: "Artificial turf costs more upfront than sod installation, but the lifetime savings on water, maintenance equipment, fertilizer, and lawn care services are significant. Most Bay Area homeowners break even within 3–5 years and save money every year after that. See our detailed Artificial Turf vs Sod comparison page for a full breakdown." },
    { question: "Can turf be installed over existing concrete or pavers?", answer: "In some cases, yes - turf can be installed over hard surfaces with proper padding and drainage. However, for the best results and longest lifespan, we recommend a full base installation with proper grading and drainage. We'll assess your specific situation during the consultation." },
  ];

  return (
    <Layout>
      <StructuredData data={getServiceSchema(svc.title, svc.description, svc.image, svc.path)} />
      <StructuredData data={getBreadcrumbSchema([{ name: "Artificial Turf", path: "/artificial-turf" }])} />
      <StructuredData data={getFAQSchema(faqs)} />
      <HeroSection
        title="Artificial Turf Installation in San Jose"
        subtitle="A lush, maintenance-free yard year-round - no mowing, no watering, no brown patches. Professionally installed premium synthetic turf that looks and feels natural."
        backgroundImage={IMAGES.turf}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why San Jose Homeowners Are Making the Switch</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Water restrictions, recurring drought cycles, and the constant upkeep demands of natural grass have pushed more Bay Area homeowners toward artificial turf than ever before - and the results speak for themselves.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            At {BUSINESS.name}, we install premium artificial turf systems designed specifically for residential use. Every installation includes proper site grading, a compacted decomposed granite base layer, commercial-grade weed barrier fabric, and turf secured with appropriate infill for a natural look and feel.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Installation Is Everything",
          text: "Here's what most homeowners don't realize about artificial turf: the installation is everything. The turf product itself matters, but even premium turf will fail if the base isn't graded correctly, the seams aren't properly glued, or the infill ratio is wrong. Proper base work, precise seaming, and correct infill application are what make the difference.",
          image: turfLargeYard,
        },
        {
          title: "Real Savings, Real Results",
          text: "We recently converted a 2,500-square-foot backyard in the Willow Glen area of San Jose from patchy, water-hungry natural grass to premium artificial turf with integrated paver borders. Within the first year, the turf installation paid for itself in water savings alone - and the yard looked better on day 365 than their natural lawn ever did.",
          image: turfFrontYard,
        },
      ]} />

      {/* Card grid — bg-brand-cream */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Artificial Turf Options</h2>
            <p className="text-muted-foreground mt-3 font-light">Premium synthetic turf systems matched to how you'll actually use the space</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {turfTypes.map((t) => (
              <div key={t.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{t.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist — bg-background */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Where Artificial Turf Works Best</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            Artificial turf is versatile enough for nearly any residential application. Here's where Bay Area homeowners use it most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Full front or backyard lawn replacement",
              "Side yards and narrow utility corridors",
              "Pet-friendly play and exercise areas",
              "Pool and spa surrounds",
              "Children's play areas and play sets",
              "Rooftop decks and balconies",
              "Shaded areas where natural grass won't grow",
              "Integrated borders around pavers and hardscape",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Benefits of Professional Turf Installation</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed font-light text-lg">
            <p><strong className="text-foreground font-medium">Eliminates water costs:</strong> No irrigation system needed. In drought-prone areas like the Bay Area, where water rates continue to climb, the savings add up fast. Most homeowners recoup their turf investment within 3–5 years in water savings alone.</p>
            <p><strong className="text-foreground font-medium">Zero mowing, fertilizing, or chemical treatments:</strong> Reclaim your weekends. No lawn equipment costs, no fertilizer runs, no seasonal aerating or overseeding. Your yard looks perfect without any of the work.</p>
            <p><strong className="text-foreground font-medium">Looks green year-round:</strong> No brown patches in August heat, no mud in January rain. Consistent, uniform appearance regardless of season, weather, or shade conditions.</p>
            <p><strong className="text-foreground font-medium">Pet and kid-friendly:</strong> Modern premium turf drains quickly, resists odor with proper infill, and holds up to heavy daily use. Easy to rinse and keep clean - no more muddy paw prints tracked through the house.</p>
            <p><strong className="text-foreground font-medium">Long lifespan with minimal maintenance:</strong> Quality turf with proper professional installation lasts 15–20 years before needing replacement. Occasional brushing and rinsing is all that's required to keep it looking fresh.</p>
          </div>
        </div>
      </section>

      <ProcessSteps title="Turf Installation Process" steps={[
        { title: "Site Assessment", description: "We measure your space, assess drainage patterns, evaluate soil conditions, and discuss your goals - pet area, full lawn replacement, or landscape integration." },
        { title: "Demolition & Base Prep", description: "Remove existing grass and organic material, grade the site for drainage, compact the sub-base, and install decomposed granite base and weed barrier." },
        { title: "Turf Installation", description: "Cut, fit, and seam premium turf to your space. Secure edges, apply infill for natural weight and feel, and brush fibers upright for a realistic finish." },
        { title: "Final Inspection", description: "Walk the completed installation, check seams, drainage, and edge details. Provide care instructions for long-term turf maintenance." },
      ]} />

      <FAQAccordion faqs={faqs} />

      <CTABanner title="Get a Turf Installation Estimate" subtitle="Request a consultation and we'll provide a detailed proposal for your artificial turf project - no obligation." />
    </Layout>
  );
};

export default ArtificialTurf;