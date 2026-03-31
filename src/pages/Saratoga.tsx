import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Saratoga = () => {
  useEffect(() => { document.title = "Landscaping & Hardscape Saratoga, CA | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <HeroSection title="Premium Landscaping & Hardscape in Saratoga" subtitle="Outdoor transformations for Saratoga homeowners — custom pavers, landscape design, outdoor kitchens, and hardscape construction built for the area's upscale residential properties." backgroundImage={IMAGES.pavers} />
      <TrustBar />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Serving Saratoga's Residential Properties</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Saratoga's combination of spacious lots, mature trees, and upscale homes makes it one of the best communities in the Bay Area for outdoor living investment. Homeowners here value quality materials, thoughtful design, and construction that lasts — and that's exactly what Stones Landscaping delivers.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">We've completed paver installations, landscape renovations, retaining wall projects, and outdoor kitchen builds across Saratoga. Each project reflects the character of the neighborhood and the preferences of the homeowner — there's no one-size-fits-all approach.</p>
          <p className="text-muted-foreground leading-relaxed">From quiet cul-de-sac backyards to larger Saratoga hillside properties with complex grading needs, our team has the experience and crew capacity to handle the scope.</p>
        </div>
      </section>
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-foreground text-center mb-10">Services in Saratoga</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICES.map((s) => (<Link key={s.path} to={s.path} className="flex items-center gap-2 p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all group"><span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span><ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" /></Link>))}
          </div>
        </div>
      </section>
      <CTABanner title="Start Your Saratoga Project" subtitle="Request a free estimate for your Saratoga home." />
    </Layout>
  );
};
export default Saratoga;
