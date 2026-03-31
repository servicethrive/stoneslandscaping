import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TeamBlock from "@/components/sections/TeamBlock";
import WarrantyBlock from "@/components/sections/WarrantyBlock";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Stones Landscaping | Licensed Bay Area Hardscape & Outdoor Living Contractor";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="About Stones Landscaping"
        subtitle={`A Bay Area hardscape and outdoor living contractor built on hands-on experience, honest communication, and craftsmanship that lasts. Serving San Jose and Silicon Valley since ${BUSINESS.founded}.`}
        backgroundImage={IMAGES.heroAbout}
        primaryCTA={{ text: "Request a Consultation", link: "/contact" }}
      />

      <TeamBlock />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">How We Got Here</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            {BUSINESS.name} was founded in {BUSINESS.founded} with a simple idea: build outdoor spaces the way they should be built - with proper engineering, premium materials, honest pricing, and craftsmanship that holds up for decades, not just long enough to collect a check. That's still how we operate today.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            We started as a small crew building paver patios and retaining walls in San Jose neighborhoods. Over the years, our scope expanded naturally because homeowners kept asking us to do more - outdoor kitchens, pergolas, complete backyard transformations, driveway replacements. We grew by doing good work and earning referrals, not by running ads promising the lowest price. Today, we serve homeowners across the Bay Area - from cozy suburban homes in Campbell to expansive estates in Atherton, Hillsborough, Los Gatos, and Saratoga.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Our clients are successful people who value quality, transparency, and professionalism. They're tech executives, business owners, physicians, and professionals who expect the same standard of excellence from their outdoor contractor that they demand in every other area of their lives. We appreciate that trust, and we work hard to earn it on every project.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            We're not the cheapest option in the Bay Area - and we don't try to be. What we offer is work that's done right the first time, by experienced crews who take pride in their craft, backed by warranties that mean something. When your paver patio still looks perfect in 15 years and your retaining wall is still straight in 20, you'll understand why the investment mattered.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What Sets Us Apart</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed font-light">
            There are hundreds of landscaping contractors in the Bay Area. Here's why homeowners in San Jose, Atherton, Los Gatos, and Saratoga choose {BUSINESS.name} - and keep referring us to their neighbors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Transparent, Detailed Proposals", desc: "You'll receive a clear scope, timeline, material specifications, and price before any work begins. No padded invoices, no surprise charges, no vague line items. You know exactly what you're paying for." },
              { title: "Responsive Communication", desc: "We answer calls and messages promptly - during and after your project. Your project manager keeps you updated at every phase with photos and progress reports. No chasing for answers." },
              { title: "Design Capability", desc: "For qualifying projects, we offer professional 2D and 3D design renderings so you can visualize the finished result before construction starts. Design decisions made on paper cost nothing to change; decisions made on-site cost time and money." },
              { title: "Experienced, Full-Time Crews", desc: "We run trained, full-time crews - not day laborers hired per project. Our team members have years of experience with the specific materials, techniques, and conditions of Bay Area residential construction." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-8 rounded-sm border border-border/60">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Licensing & Credentials</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed font-light">
            We're fully licensed, insured, and credentialed for the work we do. When you hire {BUSINESS.name}, you're working with a legitimate, established contractor - not someone operating out of a pickup truck with a Craigslist ad.
          </p>
          <div className="space-y-4">
            {[
              `California Contractor License #${BUSINESS.license} - Active and in good standing`,
              `License Classifications: ${BUSINESS.licenseClassifications}`,
              `${BUSINESS.googleReviews}+ Five-Star Google Reviews from verified Bay Area homeowners`,
              `${BUSINESS.yelpReviews}+ Five-Star Yelp Reviews`,
              "Fully Licensed, Bonded, and Insured",
              `Serving the Bay Area since ${BUSINESS.founded}`,
              `${BUSINESS.paverWarrantyYears}-Year Paver Installation Warranty`,
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WarrantyBlock />

      <CTABanner title="Let's Talk About Your Project" subtitle="Request a complimentary consultation and see how we work - no obligation, no pressure, just a clear conversation about what's possible." />
    </Layout>
  );
};

export default About;