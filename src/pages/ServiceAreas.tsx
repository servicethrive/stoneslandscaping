import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ServiceAreaGrid from "@/components/sections/ServiceAreaGrid";
import CTABanner from "@/components/sections/CTABanner";
import { BUSINESS } from "@/lib/constants";

const ServiceAreas = () => {
  useEffect(() => {
    document.title = "Service Areas | San Jose & Bay Area | Stones Landscaping Inc.";
  }, []);

  return (
    <Layout>
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Service Areas</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            {BUSINESS.name} serves homeowners across San Jose, Santa Clara County, and select Bay Area communities. We handle premium residential landscaping and hardscape projects throughout the region.
          </p>
        </div>
      </section>

      <ServiceAreaGrid
        title="Cities We Serve"
        subtitle="Click on any city to learn more about our services in your area."
      />

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Service Region</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Our primary service area covers San Jose and the surrounding cities in Santa Clara County, including Atherton, Los Gatos, Saratoga, Campbell, and Santa Clara. We also serve homeowners in select Bay Area communities like Palo Alto, Menlo Park, and Hillsborough for qualifying projects.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Bay Area's unique combination of Mediterranean climate, diverse terrain, and high property values makes outdoor renovation projects especially valuable for homeowners. Whether you're working with a flat suburban lot in Campbell or a hillside property in Los Gatos, our team has the experience to handle the specific conditions of your property.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If your city isn't listed above, contact us — we may still be able to serve your area depending on the project scope and location.
          </p>
        </div>
      </section>

      <CTABanner title="Serving Your Area?" subtitle="Contact us to confirm availability and schedule a free on-site consultation." />
    </Layout>
  );
};

export default ServiceAreas;
