import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const ArtificialTurf = () => {
  useEffect(() => {
    document.title = "Artificial Turf Installation San Jose | Low-Maintenance Lawns | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Artificial Turf Installation for Bay Area Homes"
        subtitle="A green, maintenance-free yard year-round — no mowing, no watering, no brown patches. Professionally installed artificial turf that looks and feels natural."
        backgroundImage={IMAGES.turf}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Bay Area Homeowners Are Switching to Turf</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Water restrictions, drought cycles, and the constant upkeep of natural grass have pushed more Bay Area homeowners toward artificial turf — and the results speak for themselves. Modern synthetic turf looks realistic, drains properly, stays green year-round, and eliminates mowing, fertilizing, aerating, and overseeding from your routine.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            At {BUSINESS.name}, we install premium artificial turf systems designed for residential use. Every installation includes proper site grading, a compacted base layer, weed barrier fabric, and turf secured with infill for a natural look and feel. We don't cut corners on base prep — it's what separates turf that performs for 15+ years from turf that wrinkles, bunches, or drains poorly.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're replacing a full lawn, converting a side yard, adding a pet area, or integrating turf into a larger landscape design, we handle the installation from start to finish.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Where Artificial Turf Works Best</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Full front or backyard lawns", "Side yards and narrow spaces", "Pet-friendly play areas",
              "Around pools and spas", "Play areas for children", "Rooftops and patios",
              "Shaded areas where grass won't grow", "Around pavers and hardscape features",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Benefits of Professional Turf Installation</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Eliminates water costs:</strong> No irrigation needed. In drought-prone areas like the Bay Area, this adds up fast.</p>
            <p><strong className="text-foreground">Zero mowing or fertilizing:</strong> Reclaim your weekends. No lawn equipment, no chemicals, no seasonal maintenance.</p>
            <p><strong className="text-foreground">Looks great year-round:</strong> No brown patches in summer, no mud in winter. Consistent appearance regardless of season.</p>
            <p><strong className="text-foreground">Pet and kid-friendly:</strong> Modern turf drains quickly, resists odor, and holds up to heavy use.</p>
            <p><strong className="text-foreground">Long lifespan:</strong> Quality turf with proper installation lasts 15–20 years before needing replacement.</p>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "How long does artificial turf last?", answer: "Professionally installed turf typically lasts 15–20 years with minimal maintenance. Quality of base prep and turf product are the biggest factors." },
        { question: "Does artificial turf get hot?", answer: "Direct sunlight can warm turf surfaces, similar to any outdoor surface. Shaded areas stay cool, and modern turf products with lighter backing and infill help manage heat." },
        { question: "Is artificial turf safe for pets?", answer: "Yes. Turf drains well, is easy to clean, and doesn't harbor fleas or ticks. Proper infill and drainage keep odor under control." },
        { question: "How does it compare to real grass?", answer: "Turf eliminates watering, mowing, and fertilizing costs. Initial installation costs more than sod, but lifetime savings on water and maintenance are significant. See our Artificial Turf vs Sod comparison page for details." },
      ]} />

      <CTABanner title="Get a Free Turf Installation Estimate" subtitle="Tell us about your space and we'll provide a detailed proposal for your artificial turf project." />
    </Layout>
  );
};

export default ArtificialTurf;
