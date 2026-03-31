import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, BUSINESS, SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const SanJose = () => {
  useEffect(() => {
    document.title = "Landscaping & Hardscape San Jose, CA | Stones Landscaping Inc.";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="San Jose's Trusted Landscaping & Hardscape Contractor"
        subtitle="Premium outdoor transformations for San Jose homeowners — from Almaden Valley to Willow Glen, Rose Garden to Evergreen. Licensed, insured, and backed by industry-leading warranties."
        backgroundImage={IMAGES.hero}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Landscaping & Hardscape Services in San Jose</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            San Jose is where {BUSINESS.name} was founded and where we complete the majority of our projects. We know the city's neighborhoods, soil conditions, typical lot configurations, and what homeowners here are looking for when they invest in outdoor renovation. Our office is located on Almaden Expressway, and our crews work across every part of the city.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Whether you're in Willow Glen and want to replace an aging concrete patio with natural stone pavers, in Almaden Valley planning a complete backyard transformation with an outdoor kitchen, or in Evergreen looking to install artificial turf and clean up your front yard — we handle the design, permitting, and construction in-house.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            San Jose's Mediterranean climate means outdoor spaces get used year-round, which makes quality materials and professional installation especially important. We build outdoor environments designed for the way San Jose homeowners actually live — spaces for family dinners, weekend entertaining, morning coffee, and evening relaxation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Services Available in San Jose</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICES.map((s) => (
              <Link key={s.path} to={s.path} className="flex items-center gap-2 p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all group">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span>
                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">San Jose Neighborhoods We Serve</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We work across all San Jose neighborhoods including Willow Glen, Almaden Valley, Rose Garden, Cambrian, Evergreen, Silver Creek, Berryessa, South San Jose, and beyond. Each neighborhood has its own character, lot sizes, and common outdoor project needs — and we've worked in most of them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a San Jose-based contractor with our office at {BUSINESS.address}, we're nearby, accessible, and familiar with local permitting requirements, HOA considerations, and the specific conditions that affect outdoor construction in our city.
          </p>
        </div>
      </section>

      <CTABanner title="Get a Free Estimate in San Jose" subtitle="Schedule an on-site consultation at your San Jose home. We'll assess your property and deliver a detailed proposal." />
    </Layout>
  );
};

export default SanJose;
