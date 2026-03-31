import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const LosGatos = () => {
  useEffect(() => { document.title = "Landscaping & Hardscape Los Gatos, CA | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <HeroSection title="Landscaping & Hardscape Services in Los Gatos" subtitle="Custom outdoor renovations for Los Gatos homeowners. Paver patios, landscape design-build, retaining walls, and more — built for the hillside and valley properties that make Los Gatos unique." backgroundImage={IMAGES.landscaping} />
      <TrustBar />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Outdoor Renovation in Los Gatos</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Los Gatos sits at the base of the Santa Cruz Mountains, which means many properties here deal with slopes, elevation changes, and terrain that requires thoughtful hardscape and landscape planning. Retaining walls, terraced gardens, hillside drainage, and graded patios are common project elements — and they require a contractor who understands how to build on varied terrain.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">Stones Landscaping has completed projects across Los Gatos, from downtown hillside lots to larger properties along the mountain corridors. We handle the grading, structural work, and design needed to turn challenging terrain into beautiful, functional outdoor space.</p>
          <p className="text-muted-foreground leading-relaxed">The town's mix of established homes, mid-century properties, and newer construction means every project is different — and we approach each one with site-specific planning, not template solutions.</p>
        </div>
      </section>
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-foreground text-center mb-10">Services in Los Gatos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICES.map((s) => (<Link key={s.path} to={s.path} className="flex items-center gap-2 p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all group"><span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span><ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" /></Link>))}
          </div>
        </div>
      </section>
      <CTABanner title="Get a Free Estimate in Los Gatos" subtitle="Schedule a free on-site consultation at your Los Gatos property." />
    </Layout>
  );
};
export default LosGatos;
