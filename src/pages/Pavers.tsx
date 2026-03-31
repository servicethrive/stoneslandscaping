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
    document.title = "Paver Installation San Jose | Patios, Walkways & Driveways | Stones Landscaping";
  }, []);

  const materials = [
    { name: "Techo-Bloc", desc: "Industry-leading interlocking pavers with advanced surface textures and color-through technology." },
    { name: "Travertine", desc: "Natural stone pavers with a timeless, elegant appearance. Ideal for patios, pool decks, and walkways." },
    { name: "Porcelain", desc: "Low-porosity, stain-resistant pavers with a clean, modern look. Great for contemporary outdoor spaces." },
    { name: "Limestone & Bluestone", desc: "Classic natural stone options that offer rich color variation and a refined finish." },
    { name: "Permeable Pavers", desc: "Eco-friendly interlocking pavers that allow water drainage, reducing runoff and meeting Bay Area stormwater requirements." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Custom Paver Installation for San Jose Homeowners"
        subtitle={`Premium paver patios, walkways, and driveways built with top-tier materials and backed by a ${BUSINESS.paverWarrantyYears}-year warranty. Designed for your home, built to last.`}
        backgroundImage={IMAGES.pavers}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Paver Installation Done Right</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Pavers are one of the most versatile and durable materials for outdoor surfaces. Whether you're building a backyard patio, replacing a front walkway, or upgrading your driveway, pavers offer a level of design flexibility and longevity that standard concrete can't match. They handle the Bay Area's temperature shifts without cracking, drain properly when installed with the right base, and can be repaired individually if ever damaged.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            At {BUSINESS.name}, paver installation is one of our core specialties. Every project starts with proper excavation and grading, followed by a compacted aggregate base, leveling sand, and precision-placed pavers with edge restraint and polymeric sand joints. The result is a surface that stays flat, drains correctly, and holds up for decades — not years.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We've installed pavers across hundreds of residential properties in San Jose, Atherton, Los Gatos, Saratoga, and throughout Santa Clara County. Each project gets the same attention to detail: correct base depth, proper slope for drainage, clean cuts, and a finished product that looks precise and intentional.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Paver Materials We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((m) => (
              <div key={m.name} className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-bold text-foreground mb-2">{m.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Where Pavers Work Best</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Backyard patios", "Front walkways and entryways", "Driveways", "Pool decks and surrounds", "Outdoor dining areas", "Side yard paths", "Fire pit surrounds", "Garden borders and edging"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Our Paver Installation Process" steps={[
        { title: "Site Assessment", description: "We evaluate your property, discuss layout options, and take precise measurements for your paver project." },
        { title: "Design & Material Selection", description: "Choose from premium paver brands and styles. For qualifying projects, receive 2D/3D renderings." },
        { title: "Professional Installation", description: "Excavation, grading, base compaction, paver placement, edge restraint, and polymeric sand — done right." },
        { title: "Final Inspection & Warranty", description: `Walk the finished project with us, confirm every detail, and receive your ${BUSINESS.paverWarrantyYears}-year warranty documentation.` },
      ]} />

      <FAQAccordion faqs={[
        { question: "How long do pavers last?", answer: "Properly installed pavers last 25–50+ years. With correct base preparation and edge restraint, they outlast poured concrete significantly." },
        { question: "Are pavers better than concrete?", answer: "Pavers offer superior flexibility, easier repair, better drainage options, and more design variety. They also handle ground movement without cracking. See our detailed comparison on the Pavers vs Concrete page." },
        { question: `What does your ${BUSINESS.paverWarrantyYears}-year warranty cover?`, answer: `Our warranty covers materials and workmanship for ${BUSINESS.paverWarrantyYears} years. If anything related to our installation fails within that period, we make it right.` },
        { question: "How long does a paver patio installation take?", answer: "Most residential paver patios take 3–7 days depending on size and complexity. Driveways and larger projects may take 1–2 weeks." },
      ]} />

      <CTABanner title="Ready for a New Paver Patio or Walkway?" subtitle="Request a free estimate and see why Bay Area homeowners trust Stones Landscaping for their paver projects." />
    </Layout>
  );
};

export default Pavers;
