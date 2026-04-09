import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import WarrantyBlock from "@/components/sections/WarrantyBlock";
import CTABanner from "@/components/sections/CTABanner";
import { BUSINESS } from "@/lib/constants";

const Warranties = () => {
  useEffect(() => {
    document.title = "Warranties | Stones Landscaping Inc. | 21-Year Paver & 90-Day Landscape";
  }, []);

  return (
    <Layout>
      <section className="bg-brand-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Warranty Commitment</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            We back our work with clear, meaningful warranties because quality construction should last - and you should have confidence that it will.
          </p>
        </div>
      </section>

      <WarrantyBlock />

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">What's Covered</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">{BUSINESS.paverWarrantyYears}-Year Paver Warranty</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed text-lg">
                Our paver warranty covers defects in materials and workmanship for {BUSINESS.paverWarrantyYears} years from the date of project completion. This includes issues like shifting, settling beyond normal tolerances, and joint failure - provided the installation was not damaged by unauthorized modifications, heavy equipment, or natural events outside normal conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                If a covered issue occurs, we assess the situation, determine the cause, and make repairs at no cost. This warranty reflects our confidence in the base preparation, materials, and installation methods we use on every paver project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">{BUSINESS.landscapeWarrantyDays}-Day Landscape Warranty</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed text-lg">
                Our landscape warranty covers plants, sod, and installed materials for {BUSINESS.landscapeWarrantyDays} days from project completion. If plants fail to establish, sod doesn't take, or installed components show defects within the warranty window, we replace them.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This warranty is contingent on following the watering schedule and care instructions we provide at project handoff. We set you up for success with clear guidance on irrigation timing, seasonal adjustments, and plant care - so your new landscape thrives long after the warranty period ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why We Offer Strong Warranties</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Warranties aren't marketing tools - they're a signal of how a contractor builds. A {BUSINESS.paverWarrantyYears}-year paver warranty only makes business sense if the installation is done properly in the first place. That means correct excavation depth, quality aggregate base, proper compaction, edge restraint, and the right sand and jointing material. When those steps are followed, warranty claims are rare - which is exactly the point.
          </p>
        </div>
      </section>

      <CTABanner title="Build With Confidence" subtitle="Every project comes with clear warranty documentation and a commitment to quality." />
    </Layout>
  );
};

export default Warranties;
