import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServiceAreaGrid from "@/components/sections/ServiceAreaGrid";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { BUSINESS, IMAGES } from "@/lib/constants";

const ServiceAreas = () => {
  useEffect(() => {
    document.title = "Service Areas | San Jose & Bay Area | Landscaping & Hardscape Contractor | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Serving San Jose & the Bay Area's Finest Communities"
        subtitle="Premium landscaping, hardscape, and outdoor living construction across Santa Clara, San Mateo, Alameda, and Santa Cruz Counties — from first-time renovations to grand estate transformations. Licensed, insured, and locally based."
        backgroundImage={IMAGES.hero}
      />
      <TrustBar />

      {/* Regional Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Service Region</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            {BUSINESS.name} is headquartered on Almaden Expressway in San Jose, and our primary service area covers San Jose and the surrounding cities in Santa Clara County. We also serve homeowners in select Bay Area communities like Palo Alto, Menlo Park, and Hillsborough for qualifying projects. Our location gives us efficient access to every community we serve — most jobsites are within 30 minutes of our office.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            The Bay Area's unique combination of Mediterranean climate, diverse terrain, and high property values makes outdoor renovation projects especially valuable for homeowners. Whether you're working with a flat suburban lot in Campbell, a hillside property in Los Gatos, or a multi-acre estate in Atherton, our team has the experience to handle the specific conditions of your property. We've completed projects across every type of residential terrain the Bay Area offers — from level valley floors to steep hillside grades requiring engineered retaining wall systems.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Our client base spans a wide range of homeowners — from families upgrading a starter home's backyard in Campbell or Santa Clara, to executives investing in resort-style outdoor living on Atherton estates valued at $10M–$20M. The common thread is a commitment to quality: every client receives the same level of craftsmanship, communication, and warranty protection regardless of project size. We bring the same base preparation standards, the same premium material options, and the same {BUSINESS.paverWarrantyYears}-year paver warranty to a $15,000 patio as we do to a $200,000 estate renovation.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Each community we serve has unique characteristics — terrain, lot sizes, architectural styles, HOA requirements, and permitting processes. We know these details because we work in these neighborhoods regularly. Click on any city below to learn more about what we build in your area, or contact us directly if your community isn't listed — we may still be able to serve you depending on the project scope and location.
          </p>
        </div>
      </section>

      <ServiceAreaGrid
        title="Cities We Serve"
        subtitle="Click on any city to learn more about our services in your area."
      />

      {/* Why Local Matters */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why a Local Contractor Matters</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Outdoor construction isn't like ordering a product online — it's deeply tied to your specific location. Soil composition, drainage patterns, climate conditions, local building codes, and even neighborhood aesthetics all influence how a project should be designed and built. A contractor who knows the Bay Area builds differently than one who doesn't.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Here's what most homeowners don't realize: the expansive clay soils common throughout Santa Clara County require deeper base preparation and specific compaction techniques to prevent paver settling and concrete cracking. The Mediterranean climate — dry summers and wet winters — demands drainage engineering that accounts for seasonal water flow. And the seismic activity in our region means retaining walls need to meet structural standards that go beyond what's required in most parts of the country.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            We've been building in this region since {BUSINESS.founded}, and that experience translates into better outcomes for our clients. We know which materials perform best in Bay Area conditions, which base systems prevent long-term problems, and how to navigate permitting in every city we serve. That local knowledge — combined with our {BUSINESS.googleReviews} five-star Google reviews and {BUSINESS.yelpReviews} five-star Yelp reviews — is why Bay Area homeowners trust us with their most important outdoor projects.
          </p>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "What is your primary service area?", answer: "Our primary service area is San Jose and surrounding cities in Santa Clara County, including Atherton, Los Gatos, Saratoga, Campbell, and Santa Clara. We also serve select Bay Area communities like Palo Alto, Menlo Park, and Hillsborough for qualifying projects." },
        { question: "Do you travel outside Santa Clara County?", answer: "For qualifying projects — typically larger-scope outdoor renovations — we serve communities in San Mateo County (Hillsborough, Menlo Park, Atherton) and parts of the broader Bay Area. Contact us with your project details and we'll confirm availability." },
        { question: "Does your location affect project pricing?", answer: "Our pricing is based on scope, materials, and site conditions — not distance. Because we're centrally located in San Jose, most of our service area is within a 30-minute drive, which keeps logistics efficient and avoids unnecessary travel costs." },
        { question: "How do I know if you serve my area?", answer: "If you're in San Jose or any of the cities listed on this page, we absolutely serve your area. If your city isn't listed, contact us — we evaluate projects case-by-case and may be able to accommodate your location depending on scope." },
        { question: "Are you licensed to work in all these cities?", answer: `Yes. Our California contractor's license (#{BUSINESS.license}) covers ${BUSINESS.licenseClassifications}. This license is valid statewide, and we maintain full insurance coverage for every project.` },
      ]} />

      <CTABanner title="Serving Your Area?" subtitle="Contact us to confirm availability and schedule a free on-site consultation for your property." />
    </Layout>
  );
};

export default ServiceAreas;
