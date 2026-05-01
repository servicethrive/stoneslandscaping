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
import seatedRetainingWalls from "@/assets/projects/seated_retaining_walls.jpg";
import woodFinishWalkway from "@/assets/projects/Wood_finish_Porcelain_walkway.jpg";
import { CheckCircle } from "lucide-react";

const RetainingWalls = () => {
  usePageMeta(
    "Retaining Walls San Jose | Structural & Hillside Wall Builder",
    "San Jose retaining wall contractor: structural, decorative & hillside walls. Engineered solutions, premium block & stone. Free site visit."
  );

  const wallTypes = [
    { name: "Segmental Block Walls", desc: "Interlocking concrete blocks engineered for structural strength with a clean, modern finish. Available in multiple textures, colors, and sizes." },
    { name: "Natural Stone Walls", desc: "Stacked or mortared natural stone walls that bring an organic, timeless quality to your landscape. Premium fieldstone, flagstone, and quarried stone." },
    { name: "Poured Concrete Walls", desc: "Steel-reinforced concrete walls for maximum structural capacity. Ideal for tall walls exceeding six feet and heavy load-bearing applications." },
    { name: "Decorative Garden Walls", desc: "Shorter accent walls used to define planting beds, create raised gardens, frame outdoor living spaces, or add visual depth to flat properties." },
  ];

  const svc = SERVICES.find(s => s.path === "/retaining-walls")!;
  const faqs = [
    { question: "Do retaining walls need permits in San Jose?", answer: "Walls over four feet in height typically require permits and may need structural engineering in most Bay Area jurisdictions. We handle the entire process." },
    { question: "How long do retaining walls last?", answer: "A properly engineered and constructed retaining wall lasts 50 years or more. Longevity depends on adequate footing depth, correct drainage, and properly compacted backfill." },
    { question: "What's the most cost-effective retaining wall type?", answer: "Segmental block walls typically offer the best balance of cost, structural performance, and visual appeal for most residential projects." },
    { question: "Can you integrate landscaping with retaining walls?", answer: "Absolutely - and we recommend it. We regularly integrate retaining walls with terraced planting beds, drip irrigation, landscape lighting, and other hardscape features." },
    { question: "What causes retaining walls to fail?", answer: "The most common causes are inadequate drainage behind the wall, insufficient footing depth, and poor backfill compaction." },
  ];

  return (
    <Layout>
      <StructuredData data={getServiceSchema(svc.title, svc.description, svc.image, svc.path)} />
      <StructuredData data={getBreadcrumbSchema([{ name: "Retaining Walls", path: "/retaining-walls" }])} />
      <StructuredData data={getFAQSchema(faqs)} />
      <HeroSection
        title="Retaining Wall Contractor in San Jose"
        subtitle="Structural and decorative retaining walls that solve complex grading challenges, prevent erosion, and add architectural impact - engineered for Silicon Valley's unique terrain."
        backgroundImage={IMAGES.retainingWall}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Retaining Walls That Solve Real Problems - and Look Exceptional Doing It</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Retaining walls are among the most critical hardscape elements on any Bay Area property. They hold back soil on sloped lots, manage seasonal water runoff, create level terraces for usable outdoor living space, and protect structures and landscaping from erosion.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            Here's what most homeowners don't realize: a retaining wall is only as good as what you can't see. The footing depth, drainage system, backfill material, and compaction behind the wall determine whether it performs for five years or fifty.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Engineered for Your Property",
          text: `At ${BUSINESS.name}, we build retaining walls that are engineered for the specific soil conditions, slope grades, and drainage patterns of your property. Every wall we construct includes proper footings sized to the height and soil type, compacted gravel backfill, perforated drain pipe with filter fabric, and appropriate batter for long-term stability. Our work is backed by our contractor's license #${BUSINESS.license}.`,
          image: seatedRetainingWalls,
        },
        {
          title: "Real-World Problem Solving",
          text: "We recently completed a multi-tiered natural stone wall system for a property in the Saratoga foothills that had been dealing with erosion for years. The previous homeowner had tried landscape timbers - they rotted within four seasons. Our solution used three stepped wall segments with integrated drainage that redirects water away from the foundation while creating beautiful terraced planting areas.",
          image: woodFinishWalkway,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Retaining Wall Types We Build</h2>
            <p className="text-muted-foreground mt-3 font-light">Matched to your property's terrain, aesthetic, and structural requirements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wallTypes.map((w) => (
              <div key={w.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{w.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">When You Need a Retaining Wall</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Sloped yard that's difficult or impossible to use",
              "Soil erosion threatening your property line or structures",
              "Hillside drainage problems causing water intrusion",
              "Creating level terraces for landscaping and outdoor living",
              "Foundation protection on sloped or hillside lots",
              "Adding usable flat space to a steep or uneven yard",
              "Replacing a failing timber or block wall",
              "Integrating walls with a larger backyard remodel",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Our Retaining Wall Process" steps={[
        { title: "Site Assessment & Engineering", description: "We evaluate your slope, soil conditions, drainage patterns, and determine the right wall type, height, and engineering requirements." },
        { title: "Design & Permits", description: "Finalize materials, wall layout, and drainage plan. For walls over 4 feet, we handle engineering and permit submissions." },
        { title: "Construction", description: "Excavation, footing installation, wall construction with proper backfill, drainage pipe, and compaction at every stage." },
        { title: "Grading & Walkthrough", description: "Final grading, landscape restoration, and a detailed walkthrough to confirm the wall meets our standards and yours." },
      ]} />

      <FAQAccordion faqs={faqs} />

      <CTABanner title="Schedule a Retaining Wall Assessment" subtitle="We'll evaluate your slope, soil, and drainage conditions and recommend the right wall solution - no obligation, no pressure." />
    </Layout>
  );
};

export default RetainingWalls;
