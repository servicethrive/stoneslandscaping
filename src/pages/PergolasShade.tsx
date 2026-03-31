import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const PergolasShade = () => {
  useEffect(() => { document.title = "Pergolas & Shade Structures San Jose | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <HeroSection title="Pergolas & Shade Structures" subtitle="Custom pergolas and shade structures that extend your outdoor living season and add architectural interest to your yard." backgroundImage={IMAGES.hardscape} />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Pergolas That Define Your Outdoor Space</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">A pergola transforms an open patio or deck into a defined outdoor room. It provides shade, creates vertical interest, and establishes a focal point for your outdoor living area. Whether freestanding or attached to your home, a well-designed pergola adds both function and architectural character.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">We build custom pergolas and shade structures as part of larger outdoor renovation projects. Our pergola builds are integrated with the surrounding hardscape, landscape, and outdoor features — not bolted on as afterthoughts.</p>
          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Pergola & Shade Options</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Freestanding pergolas", "Attached patio covers", "Modern aluminum structures", "Wood pergolas (cedar, redwood)", "Pergolas with integrated lighting", "Shade sails and canopy systems", "Louvered roof systems", "Pergolas over outdoor kitchens"].map((item) => (
              <div key={item} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary shrink-0" /><span className="text-sm text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Add a Pergola to Your Outdoor Space" subtitle="Contact us to discuss pergola options for your property." />
    </Layout>
  );
};
export default PergolasShade;
