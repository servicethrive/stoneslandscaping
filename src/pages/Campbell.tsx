import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Campbell = () => {
  useEffect(() => { document.title = "Landscaping & Hardscape Campbell, CA | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <HeroSection title="Landscaping & Hardscape in Campbell" subtitle="Quality outdoor renovations for Campbell homeowners — paver patios, landscaping, driveways, and more. Locally based and ready to serve your neighborhood." backgroundImage={IMAGES.hardscape} />
      <TrustBar />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Outdoor Renovation for Campbell Homes</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Campbell is one of our closest service areas, located just minutes from our office on Almaden Expressway. The city's established neighborhoods, mid-sized lots, and active homeowner community make it a natural fit for our residential outdoor renovation services.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">Common projects in Campbell include paver patio replacements, front yard landscaping upgrades, concrete driveway installations, and backyard transformations that add functional outdoor living space. Many homeowners here are updating older properties with modern outdoor features — and we help them do it with professional design and construction.</p>
          <p className="text-muted-foreground leading-relaxed">Campbell's flat terrain and typical lot sizes make most projects straightforward to plan and execute, which often translates to efficient timelines and competitive project costs.</p>
        </div>
      </section>
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-foreground text-center mb-10">Services in Campbell</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICES.map((s) => (<Link key={s.path} to={s.path} className="flex items-center gap-2 p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all group"><span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span><ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" /></Link>))}
          </div>
        </div>
      </section>
      <CTABanner title="Get a Free Estimate in Campbell" subtitle="Schedule a consultation — we're right around the corner." />
    </Layout>
  );
};
export default Campbell;
