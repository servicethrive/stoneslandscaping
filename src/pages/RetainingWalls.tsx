import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const RetainingWalls = () => {
  useEffect(() => {
    document.title = "Retaining Wall Construction San Jose | Structural & Decorative | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Retaining Wall Construction for Bay Area Properties"
        subtitle="Structural and decorative retaining walls that solve grading challenges, prevent erosion, and add visual impact to your landscape."
        backgroundImage={IMAGES.retainingWall}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Retaining Walls That Solve Real Problems</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Retaining walls are among the most functional hardscape elements you can add to a property. They hold back soil on sloped lots, manage water runoff, create level terraces for usable outdoor space, and protect structures and landscaping from erosion. In hilly areas across San Jose and Santa Clara County, they're often a structural necessity — not just a design feature.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            At {BUSINESS.name}, we build retaining walls that are engineered for the specific soil conditions and slope grades of your property. We assess drainage patterns, determine the right wall type and material, and construct walls with proper footings, backfill, and drainage systems so they perform over time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether your property needs a short garden wall, a multi-tiered terrace system, or a tall structural wall with engineering, we handle the full scope — from assessment and design through construction and final grading.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Retaining Wall Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Segmental Block Walls", desc: "Interlocking concrete blocks that provide structural strength and a clean, modern look. Available in multiple textures and colors." },
              { title: "Natural Stone Walls", desc: "Stacked or mortared natural stone walls that blend seamlessly with the landscape. Ideal for properties with a rustic or organic aesthetic." },
              { title: "Poured Concrete Walls", desc: "Reinforced concrete walls for maximum structural capacity. Often used for tall walls, basement retaining, and heavy load-bearing applications." },
              { title: "Decorative Garden Walls", desc: "Shorter walls used to define planting beds, create raised gardens, or add visual layers to flat properties without major structural demands." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">When You Need a Retaining Wall</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Sloped yard that's hard to use", "Soil erosion along your property line",
              "Hillside drainage problems", "Creating level terraces for landscaping",
              "Foundation protection on sloped lots", "Adding usable flat space to a hilly yard",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "Do retaining walls need permits?", answer: "Walls over a certain height (typically 4 feet in most Bay Area jurisdictions) require permits and may need engineering. We assess this during the consultation and handle permit requirements." },
        { question: "How long do retaining walls last?", answer: "Properly built retaining walls last 50+ years. Longevity depends on materials, drainage, and base construction — all of which we spec for each project." },
        { question: "What's the most cost-effective retaining wall type?", answer: "Segmental block walls typically offer the best balance of cost, appearance, and structural performance for most residential applications." },
        { question: "Can you add landscaping around retaining walls?", answer: "Absolutely. We regularly integrate retaining walls with planting beds, irrigation, lighting, and other landscape features as part of a unified design." },
      ]} />

      <CTABanner title="Get a Retaining Wall Assessment" subtitle="We'll evaluate your slope, soil, and drainage to recommend the right wall solution for your property." />
    </Layout>
  );
};

export default RetainingWalls;
