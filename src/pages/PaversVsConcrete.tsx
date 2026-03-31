import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CTABanner from "@/components/sections/CTABanner";
import { Link } from "react-router-dom";

const PaversVsConcrete = () => {
  useEffect(() => { document.title = "Pavers vs Concrete | Which Is Better? | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pavers vs Concrete</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">A practical comparison to help you choose the right surface material for your patio, driveway, or walkway project.</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Choosing Between Pavers and Concrete</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Both pavers and poured concrete are solid choices for outdoor surfaces, but they differ in durability, appearance, maintenance, cost, and repairability. The right choice depends on your project goals, aesthetic preferences, and budget.</p>
          <p className="text-muted-foreground leading-relaxed">Here's a side-by-side comparison based on real-world performance in Bay Area conditions.</p>
        </div>
      </section>
      <ComparisonTable title="Feature Comparison" optionALabel="Pavers" optionBLabel="Poured Concrete" rows={[
        { feature: "Durability", optionA: "25–50+ years", optionB: "10–25 years" },
        { feature: "Crack Resistance", optionA: true, optionB: false },
        { feature: "Design Variety", optionA: "Extensive", optionB: "Limited" },
        { feature: "Repairability", optionA: "Individual paver replacement", optionB: "Full slab replacement" },
        { feature: "Drainage Options", optionA: true, optionB: false },
        { feature: "Initial Cost", optionA: "Higher", optionB: "Lower" },
        { feature: "Long-Term Value", optionA: "Higher", optionB: "Moderate" },
        { feature: "Color Stability", optionA: "Color-through technology", optionB: "Surface only" },
        { feature: "Installation Time", optionA: "3–7 days", optionB: "1–3 days" },
        { feature: "Warranty (Stones)", optionA: "21 years", optionB: "Standard" },
      ]} />
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Recommendation</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">For most residential patios, walkways, and outdoor living areas, pavers are the stronger long-term investment. They handle the Bay Area's soil movement without cracking, offer far more design flexibility, and can be individually replaced if ever damaged. Our 21-year paver warranty reflects that confidence.</p>
          <p className="text-muted-foreground leading-relaxed">Poured concrete remains a solid choice for driveways, utility slabs, and projects where cost efficiency is the primary factor. We install both — and we'll recommend the right option based on your specific project during the consultation.</p>
          <div className="flex gap-4 mt-6">
            <Link to="/pavers" className="text-sm font-medium text-primary hover:underline">Learn about our paver services →</Link>
            <Link to="/concrete-driveways" className="text-sm font-medium text-primary hover:underline">Learn about concrete driveways →</Link>
          </div>
        </div>
      </section>
      <CTABanner title="Not Sure Which to Choose?" subtitle="Schedule a free consultation and we'll recommend the right material for your specific project." />
    </Layout>
  );
};
export default PaversVsConcrete;
