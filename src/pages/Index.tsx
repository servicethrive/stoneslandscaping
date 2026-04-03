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
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import DesignProcessBlock from "@/components/sections/DesignProcessBlock";
import { Button } from "@/components/ui/button";
import { SERVICES, IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Stones Landscaping Inc. | Premium Hardscape & Outdoor Living | San Jose, CA";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Landscape & Hardscape Design in San Jose, CA"
        subtitle="Custom paver patios, outdoor kitchens, pergolas, and complete backyard transformations for Silicon Valley's finest homes. Designed with precision, built with integrity."
        backgroundImage={IMAGES.hero}
        primaryCTA={{ text: "Request a Free Consultation", link: "/contact" }}
      />

      <TrustBar />

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              From concept to completion, we deliver premium outdoor spaces for discerning Bay Area homeowners.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

      <FeaturedProjects />

      {/* Mid-page CTA */}
      <CTABanner
        title="Transform Your Backyard Into an Outdoor Oasis"
        subtitle="From custom paver patios to full outdoor living spaces — let's bring your vision to life."
      />

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 warm-texture opacity-20" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-8 leading-tight">Why Silicon Valley Homeowners Choose Us</h2>
              <div className="space-y-5">
                {[
                  { title: "Uncompromising Quality", desc: "Every project is built with premium materials and meticulous attention to detail - from foundation to finish." },
                  { title: "Transparent Process", desc: "Detailed proposals with clear scope, pricing, and timelines. No hidden costs, no scope creep, no surprises." },
                  { title: "Industry-Leading Warranties", desc: `${BUSINESS.paverWarrantyYears}-year paver warranty and ${BUSINESS.landscapeWarrantyDays}-day landscape warranty. We stand behind our work.` },
                  { title: "2D/3D Design Visualization", desc: "See your project before construction begins with professional renderings for qualifying projects." },
                  { title: "Large Crew Capacity", desc: "Experienced crews capable of handling complex, high-end residential projects efficiently and on schedule." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold text-sm tracking-wide">{item.title}</h3>
                      <p className="text-white/55 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/images/2d-landscape-design.jpg"
                alt="2D aerial landscape design rendering by Stones Landscaping showing a custom backyard layout"
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

      {/* Mid-page CTA */}
      <CTABanner
        title="See What's Possible — Schedule a Design Consultation"
        subtitle="We'll walk your property, discuss your vision, and provide a detailed proposal — all complimentary."
      />

      <TestimonialBlock />

      <ServiceAreaGrid />

      <CTABanner
        title="Ready to Elevate Your Outdoor Space?"
        subtitle="Request a complimentary consultation and discover how we can transform your vision into reality."
      />
    </Layout>
  );
};

export default Index;
