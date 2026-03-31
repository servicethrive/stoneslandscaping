import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CTABanner from "@/components/sections/CTABanner";
import { Link } from "react-router-dom";

const ArtificialTurfVsSod = () => {
  useEffect(() => { document.title = "Artificial Turf vs Sod | Which Is Right for You? | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Artificial Turf vs Natural Sod</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">Compare the long-term costs, maintenance, and performance of artificial turf and natural grass for Bay Area homes.</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Making the Right Choice for Your Yard</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Both artificial turf and natural sod create green, usable lawn areas — but they differ significantly in maintenance requirements, water usage, long-term costs, and environmental considerations. In the Bay Area, where water costs are high and drought restrictions are common, this comparison is especially relevant.</p>
          <p className="text-muted-foreground leading-relaxed">Here's an honest breakdown based on what we see in real residential installations.</p>
        </div>
      </section>
      <ComparisonTable title="Feature Comparison" optionALabel="Artificial Turf" optionBLabel="Natural Sod" rows={[
        { feature: "Water Required", optionA: "None", optionB: "Regular irrigation" },
        { feature: "Mowing", optionA: "Never", optionB: "Weekly" },
        { feature: "Fertilizing", optionA: "Never", optionB: "Seasonal" },
        { feature: "Lifespan", optionA: "15–20 years", optionB: "Ongoing with maintenance" },
        { feature: "Initial Cost", optionA: "Higher", optionB: "Lower" },
        { feature: "Long-Term Cost", optionA: "Lower", optionB: "Higher (water + maintenance)" },
        { feature: "Appearance Year-Round", optionA: "Always green", optionB: "Seasonal variation" },
        { feature: "Pet-Friendly", optionA: true, optionB: true },
        { feature: "Eco Considerations", optionA: "No water use, no chemicals", optionB: "Natural ecosystem support" },
        { feature: "Heat Retention", optionA: "Warmer in direct sun", optionB: "Cooler surface" },
      ]} />
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Which Should You Choose?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">If you want a consistently green, low-maintenance yard and you're comfortable with the higher upfront cost, artificial turf is the practical choice for most Bay Area homeowners. The long-term savings on water, lawn equipment, and maintenance time are significant.</p>
          <p className="text-muted-foreground leading-relaxed">Natural sod makes sense if you prefer the feel and environmental benefits of real grass and don't mind the ongoing maintenance commitment. We install both and can help you decide based on your specific property, usage patterns, and priorities.</p>
          <div className="mt-6">
            <Link to="/artificial-turf" className="text-sm font-medium text-primary hover:underline">Learn about our turf installation services →</Link>
          </div>
        </div>
      </section>
      <CTABanner title="Need Help Deciding?" subtitle="Schedule a free consultation and we'll recommend the best option for your yard." />
    </Layout>
  );
};
export default ArtificialTurfVsSod;
