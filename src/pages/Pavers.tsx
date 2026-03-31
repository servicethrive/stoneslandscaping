import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const Pavers = () => {
  useEffect(() => {
    document.title = "Paver Patio Contractor San Jose | Custom Patios, Walkways & Driveways | Stones Landscaping";
  }, []);

  const materials = [
    { name: "Techo-Bloc", desc: "Industry-leading interlocking pavers with advanced surface textures and color-through technology. Preferred by discerning homeowners for their superior finish and durability." },
    { name: "Travertine", desc: "Natural stone pavers with a timeless, elegant appearance. Ideal for luxury patios, pool decks, and grand walkways that complement high-end architecture." },
    { name: "Porcelain", desc: "Low-porosity, stain-resistant pavers with a clean, modern aesthetic. Perfect for contemporary outdoor living spaces and sleek entertainment areas." },
    { name: "Limestone & Bluestone", desc: "Classic natural stone options that offer rich color variation and a refined finish. Popular among Bay Area homeowners seeking a sophisticated, estate-quality look." },
    { name: "Permeable Pavers", desc: "Eco-friendly interlocking pavers that allow water drainage, reducing runoff and meeting Bay Area stormwater requirements without sacrificing design quality." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Custom Paver Installations for Bay Area Homes"
        subtitle={`Premium paver patios, walkways, and driveways crafted with the finest materials and backed by our ${BUSINESS.paverWarrantyYears}-year warranty. From $1.5M San Jose properties to $20M Atherton estates — built with precision.`}
        backgroundImage={IMAGES.pavers}
      />
      <TrustBar />

      {/* Main Content Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Paver Installation Engineered for Excellence</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Pavers are one of the most versatile and durable materials for outdoor surfaces. Whether you're building a sprawling backyard entertainment patio, replacing a front walkway to enhance curb appeal, or upgrading your driveway with an estate-quality finish, pavers offer a level of design flexibility and longevity that standard concrete simply cannot match.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            At {BUSINESS.name}, paver installation is one of our core specialties. Every project starts with proper excavation and grading, followed by a compacted aggregate base, leveling sand, and precision-placed pavers with edge restraint and polymeric sand joints. The result is a surface that stays flat, drains correctly, and holds up for decades — not years.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            We've installed pavers across hundreds of residential properties in San Jose, Atherton, Los Gatos, Saratoga, and throughout Santa Clara County. Each project receives the same meticulous attention to detail: correct base depth, proper slope for drainage, clean cuts, and a finished product that looks precise and intentional. Our clients include homeowners in some of Silicon Valley's most prestigious neighborhoods — from Atherton estates to custom homes in the Los Gatos hills.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            The Bay Area's unique climate — warm, dry summers and cool, wet winters — demands a paver installation approach that accounts for temperature shifts, moisture, and soil movement. We design every base system to handle these conditions, ensuring your patio, walkway, or driveway performs beautifully through every season without cracking, shifting, or settling.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Whether your project calls for a grand paver patio surrounding a custom fire pit, an elegant front entry walkway with natural stone borders, or a complete driveway transformation with interlocking pavers, our team brings the experience, equipment, and craftsmanship to deliver results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Premium Paver Materials</h2>
            <p className="text-muted-foreground mt-3 font-light">Carefully selected for beauty, durability, and performance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((m) => (
              <div key={m.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{m.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Where Pavers Elevate Your Property</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            From intimate garden paths to grand driveway approaches, pavers bring structure, elegance, and lasting value to every corner of your outdoor space.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Expansive backyard entertainment patios",
              "Grand front walkways and entryways",
              "Estate-quality driveways",
              "Pool decks and luxury surrounds",
              "Outdoor dining and kitchen areas",
              "Garden paths and side yard corridors",
              "Custom fire pit surrounds",
              "Garden borders and decorative edging",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Our Paver Installation Process" steps={[
        { title: "Site Assessment", description: "We evaluate your property, discuss layout options, and take precise measurements for your paver project." },
        { title: "Design & Material Selection", description: "Choose from premium paver brands and styles. For qualifying projects, receive professional 2D/3D renderings." },
        { title: "Professional Installation", description: "Excavation, grading, base compaction, precision paver placement, edge restraint, and polymeric sand — done right." },
        { title: "Final Inspection & Warranty", description: `Walk the finished project with us, confirm every detail, and receive your ${BUSINESS.paverWarrantyYears}-year warranty documentation.` },
      ]} />

      <FAQAccordion faqs={[
        { question: "How long do pavers last?", answer: "Properly installed pavers last 25–50+ years. With correct base preparation and edge restraint, they significantly outlast poured concrete and maintain their appearance through decades of Bay Area weather." },
        { question: "Are pavers better than concrete for my home?", answer: "Pavers offer superior flexibility, easier individual repair, better drainage options, and far more design variety. They also handle ground movement without cracking — a critical advantage on Bay Area soils. See our detailed comparison on the Pavers vs Concrete page." },
        { question: `What does your ${BUSINESS.paverWarrantyYears}-year warranty cover?`, answer: `Our warranty covers materials and workmanship for ${BUSINESS.paverWarrantyYears} years. If anything related to our installation fails within that period, we make it right — no questions asked.` },
        { question: "How long does a paver patio installation take?", answer: "Most residential paver patios take 3–7 days depending on size and complexity. Larger projects — estate driveways, multi-zone patios with integrated kitchens — may take 1–3 weeks." },
        { question: "Do you serve high-end communities like Atherton and Los Gatos?", answer: "Absolutely. We regularly work on properties in Atherton, Los Gatos, Saratoga, Hillsborough, and other premium Bay Area neighborhoods. Our team is experienced with HOA requirements, large-lot properties, and the elevated expectations that come with luxury residential projects." },
      ]} />

      <CTABanner title="Ready for a Custom Paver Installation?" subtitle="Request a complimentary consultation and see why Bay Area homeowners trust Stones Landscaping for their most important outdoor projects." />
    </Layout>
  );
};

export default Pavers;