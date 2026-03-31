import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServiceCard from "@/components/sections/ServiceCard";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TestimonialBlock from "@/components/sections/TestimonialBlock";
import ServiceAreaGrid from "@/components/sections/ServiceAreaGrid";
import CTABanner from "@/components/sections/CTABanner";
import DesignProcessBlock from "@/components/sections/DesignProcessBlock";
import { Button } from "@/components/ui/button";
import { SERVICES, IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Stones Landscaping Inc. | Premium Landscaping & Hardscape in San Jose, CA";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Transform Your Outdoor Space"
        subtitle="Premium landscaping, hardscape, and outdoor living construction for Bay Area homeowners. From custom paver patios to complete backyard renovations — built with precision and backed by industry-leading warranties."
        backgroundImage={IMAGES.hero}
        primaryCTA={{ text: "Get a Free Estimate", link: "/contact" }}
        secondaryCTA={{ text: "View Our Work", link: "/gallery" }}
      />

      <TrustBar />

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From design concept to finished build, we handle every phase of your outdoor renovation project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.path}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Homeowners Choose Stones Landscaping</h2>
              <div className="space-y-4">
                {[
                  { title: "Clear Communication", desc: "You'll always know where your project stands. We explain every phase, respond promptly, and keep you informed throughout construction." },
                  { title: "Transparent Process", desc: "Detailed proposals with clear scope, pricing, and timelines. No hidden costs, no scope creep, no surprises." },
                  { title: "Industry-Leading Warranties", desc: `${BUSINESS.paverWarrantyYears}-year paver warranty and ${BUSINESS.landscapeWarrantyDays}-day landscape warranty. We stand behind our work.` },
                  { title: "2D/3D Design Capability", desc: "Visualize your project before construction starts with professional renderings available for qualifying projects." },
                  { title: "Large Crew Capacity", desc: "We run experienced crews capable of handling complex residential projects efficiently and on schedule." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      <p className="text-white/65 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={IMAGES.pavers}
                alt="Professional paver patio installation by Stones Landscaping in San Jose"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        subtitle="Every project follows a proven workflow designed to keep things organized, on budget, and on schedule."
      />

      <DesignProcessBlock />

      <TestimonialBlock />

      <ServiceAreaGrid />

      <CTABanner
        title="Ready to Start Your Outdoor Project?"
        subtitle="Request a free estimate and let's discuss how to bring your vision to life."
      />
    </Layout>
  );
};

export default Index;
