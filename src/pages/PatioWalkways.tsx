import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const PatioWalkways = () => {
  useEffect(() => { document.title = "Patio & Walkway Installation San Jose | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <HeroSection title="Patio & Walkway Installations" subtitle="Custom-built patios and walkways that define your outdoor space — designed for durability, drainage, and visual impact." backgroundImage={IMAGES.pavers} />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Patios & Walkways That Connect Your Outdoor Space</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Patios and walkways are the backbone of any well-designed outdoor space. A properly built patio gives you a defined area for dining, lounging, or entertaining, while walkways connect different zones of your yard and create flow between your home and outdoor features.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">At {BUSINESS.name}, we build patios and walkways using pavers, natural stone, and concrete — selected based on your aesthetic preferences, property conditions, and budget. Every installation includes proper excavation, compacted base preparation, and drainage planning to ensure long-term performance.</p>
          <p className="text-muted-foreground leading-relaxed">Whether you're adding a small side-yard path or a large backyard patio with integrated seating walls, we handle the full scope from design through installation.</p>
          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Common Patio & Walkway Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Backyard entertaining patios", "Front entry walkways", "Side yard paths", "Garden walkways", "Pool deck patios", "Fire pit seating areas", "Stepping stone paths", "Connected patio-to-kitchen transitions"].map((item) => (
              <div key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Plan Your Patio or Walkway" subtitle="Get a free estimate for your patio or walkway installation project." />
    </Layout>
  );
};
export default PatioWalkways;
