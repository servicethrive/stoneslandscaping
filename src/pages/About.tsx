import { usePageMeta } from "@/hooks/use-page-meta";
import { useState } from "react";
import ImageLightbox from "@/components/ui/ImageLightbox";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TeamBlock from "@/components/sections/TeamBlock";
import WarrantyBlock from "@/components/sections/WarrantyBlock";
import CTABanner from "@/components/sections/CTABanner";
import ZigZagSection from "@/components/sections/ZigZagSection";
import { IMAGES, BUSINESS } from "@/lib/constants";
import landscapingSanJose from "@/assets/projects/landscaping-san-jose-ca.jpg";
import { Star, Shield, Truck, CheckCircle, FileText, MessageSquare, Palette, Users, User } from "lucide-react";

const About = () => {
  const [fleetLightboxOpen, setFleetLightboxOpen] = useState(false);
  const [fleetLightboxIndex, setFleetLightboxIndex] = useState(0);
  usePageMeta(
    "About Stones Landscaping | Licensed San Jose Hardscape & Outdoor Living Contractor",
    "Meet Stones Landscaping — licensed San Jose hardscape & outdoor living contractor. Experienced crews, premium materials, proven results."
  );

  return (
    <Layout>
      <HeroSection
        title="About Stones Landscaping"
        subtitle={`A Bay Area hardscape and outdoor living contractor built on hands-on experience, honest communication, and craftsmanship that lasts. Serving San Jose and Silicon Valley since ${BUSINESS.founded}.`}
        backgroundImage={IMAGES.heroAbout}
        primaryCTA={{ text: "Request a Free Quote", link: "/contact" }}
      />

      {/* Awards Banner */}
      <section className="py-16 lg:py-20 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Award-Winning Craftsmanship</h2>
            <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
              Recognized by Business Rate as the Best Landscaper in Willow Glen, San Jose — two years running.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { year: "2026", title: "Best Landscaper", location: "Willow Glen, San Jose", body: "Business Rate", badge: "/images/best-of-2026-about.webp" },
              { year: "2025", title: "Best Landscaper", location: "San Jose", body: "Business Rate", badge: "/images/best-of-2025-business-rate.webp" },
            ].map((award) => (
              <div key={award.year} className="bg-background border border-border/60 rounded-sm p-8 text-center">
                <img src={award.badge} alt={`Best of ${award.year} Landscaper award`} className="w-32 h-32 object-contain mx-auto mb-4" />
                <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">{award.year}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{award.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{award.location}</p>
                <p className="text-xs text-muted-foreground mt-2">Awarded by {award.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamBlock />

      {/* Social Proof — Reviews */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Bay Area Homeowners</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              Our reputation is built on verified reviews from real clients across Silicon Valley.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href={BUSINESS.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cream border border-border/60 rounded-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 justify-center mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
              </div>
              <p className="font-display text-4xl font-bold text-foreground mb-1">{BUSINESS.googleReviews}</p>
              <p className="text-sm text-muted-foreground font-light">Five-Star Google Reviews</p>
            </a>
            <a
              href={BUSINESS.yelpProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cream border border-border/60 rounded-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 justify-center mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
              </div>
              <p className="font-display text-4xl font-bold text-foreground mb-1">{BUSINESS.yelpReviews}</p>
              <p className="text-sm text-muted-foreground font-light">Five-Star Yelp Reviews</p>
            </a>
          </div>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "How We Got Here",
          text: `${BUSINESS.name} was founded in ${BUSINESS.founded} with a simple idea: build outdoor spaces the way they should be built - with proper engineering, premium materials, honest pricing, and craftsmanship that holds up for decades, not just long enough to collect a check. That's still how we operate today.\n\nWe started as a small crew building paver patios and retaining walls in San Jose neighborhoods. Over the years, our scope expanded naturally because homeowners kept asking us to do more - outdoor kitchens, pergolas, complete backyard transformations, driveway replacements. We grew by doing good work and earning referrals, not by running ads promising the lowest price. Today, we serve homeowners across the Bay Area - from cozy suburban homes in Campbell to expansive estates in Atherton, Hillsborough, Los Gatos, and Saratoga.`,
          image: "/images/stones-landscaping-storage-yard.jpg",
        },
        {
          title: "Who We Work With",
          text: `Our clients are successful people who value quality, transparency, and professionalism. They're tech executives, business owners, physicians, and professionals who expect the same standard of excellence from their outdoor contractor that they demand in every other area of their lives. We appreciate that trust, and we work hard to earn it on every project.\n\nWe're not the cheapest option in the Bay Area - and we don't try to be. What we offer is work that's done right the first time, by experienced crews who take pride in their craft, backed by warranties that mean something. When your paver patio still looks perfect in 15 years and your retaining wall is still straight in 20, you'll understand why the investment mattered.`,
          image: landscapingSanJose,
        },
      ]} />

      {/* What Sets Us Apart */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What Sets Us Apart</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed font-light text-lg">
            There are hundreds of landscaping contractors in the Bay Area. Here's why homeowners in San Jose, Atherton, Los Gatos, and Saratoga choose {BUSINESS.name} - and keep referring us to their neighbors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Transparent, Detailed Proposals", desc: "You'll receive a clear scope, timeline, material specifications, and price before any work begins. No padded invoices, no surprise charges, no vague line items. You know exactly what you're paying for.", icon: FileText },
              { title: "Responsive Communication", desc: "We answer calls and messages promptly - during and after your project. Your project manager keeps you updated at every phase with photos and progress reports. No chasing for answers.", icon: MessageSquare },
              { title: "Design Capability", desc: "For qualifying projects, we offer professional 2D and 3D design renderings so you can visualize the finished result before construction starts. Design decisions made on paper cost nothing to change; decisions made on-site cost time and money.", icon: Palette },
              { title: "Experienced, Full-Time Crews", desc: "We run trained, full-time crews - not day laborers hired per project. Our team members have years of experience with the specific materials, techniques, and conditions of Bay Area residential construction.", icon: Users },
            ].map((item, index) => (
              <div key={item.title} className="bg-brand-cream p-8 rounded-sm border border-border/60 border-l-4 border-l-primary">
                <span className="text-4xl font-bold text-primary/20 font-display leading-none">{String(index + 1).padStart(2, '0')}</span>
                <div className="flex items-center gap-2 mt-3 mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing & Credentials */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Licensing & Credentials</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed font-light text-lg">
            We're fully licensed, insured, and credentialed for the work we do. When you hire {BUSINESS.name}, you're working with a legitimate, established contractor - not someone operating out of a pickup truck with a Craigslist ad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-border/60 rounded-sm p-8">
              <Shield className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">California License</h3>
              <p className="text-sm text-muted-foreground font-light mb-1">License #{BUSINESS.license}</p>
              <p className="text-sm text-muted-foreground font-light">Active and in good standing</p>
            </div>
            <div className="bg-background border border-border/60 rounded-sm p-8">
              <CheckCircle className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Classifications</h3>
              <p className="text-sm text-muted-foreground font-light">C27 — Landscaping</p>
              <p className="text-sm text-muted-foreground font-light">C-61/D06 — Concrete</p>
            </div>
            <div className="bg-background border border-border/60 rounded-sm p-8">
              <Shield className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Bonded & Insured</h3>
              <p className="text-sm text-muted-foreground font-light">Fully licensed, bonded, and insured for residential construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Equipment */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Fleet & Equipment</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed font-light max-w-3xl">
            We invest in professional-grade equipment and maintain a fleet of branded vehicles because how a contractor shows up tells you how they'll build. Our storage yard houses everything we need to execute projects efficiently - from CAT skid steers to full trailer rigs.
          </p>
          {(() => {
            const fleetImages = [
              { src: "/images/stones-landscaping-storage-yard.jpg", alt: "Stones Landscaping storage yard with fleet and materials" },
              { src: "/images/stones-landscaping-dump-trailer.jpg", alt: "Stones Landscaping dump trailer loaded with materials" },
              { src: "/images/stones-landscaping-trailer-skid-steer.jpg", alt: "Stones Landscaping trailer with CAT skid steer" },
              { src: "/images/stones-landscaping-truck-trailer.jpg", alt: "Stones Landscaping Inc. truck and trailer at job site" },
              { src: "/images/stones-landscaping-company-vehicle.jpg", alt: "Stones Landscaping Inc. branded company vehicle" },
              { src: "/images/stones-landscaping-2018.jpg", alt: "Stones Landscaping fleet vehicles on job site in 2018" },
            ];
            return (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fleetImages.map((img, i) => (
                    <div
                      key={img.src}
                      className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => { setFleetLightboxIndex(i); setFleetLightboxOpen(true); }}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  ))}
                </div>
                <ImageLightbox
                  images={fleetImages}
                  currentIndex={fleetLightboxIndex}
                  isOpen={fleetLightboxOpen}
                  onClose={() => setFleetLightboxOpen(false)}
                  onNavigate={setFleetLightboxIndex}
                />
              </>
            );
          })()}
        </div>
      </section>

      <WarrantyBlock />

      <CTABanner title="Let's Talk About Your Project" subtitle="Request a complimentary consultation and see how we work - no obligation, no pressure, just a clear conversation about what's possible." />
    </Layout>
  );
};

export default About;