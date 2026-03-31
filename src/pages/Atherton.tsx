import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS, SERVICES } from "@/lib/constants";
import { CheckCircle, ArrowRight } from "lucide-react";

const Atherton = () => {
  useEffect(() => {
    document.title = "Luxury Landscaping & Hardscape Atherton, CA | Estate Outdoor Renovation | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Estate-Level Landscaping & Hardscape in Atherton"
        subtitle="Premium outdoor renovations for Atherton's most distinguished properties. Custom pavers, outdoor kitchens, fire features, and complete landscape design-build — crafted for estates where only the finest will do."
        backgroundImage={IMAGES.hero}
      />
      <TrustBar />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Outdoor Construction for Atherton's Finest Estates</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Atherton is consistently ranked among the wealthiest communities in the United States, and the outdoor spaces here reflect that distinction. Properties routinely span one to three acres, with mature oak canopies, expansive lawns, and architecture that demands an outdoor environment of equal caliber. This isn't a market for template landscaping — it's a market that requires a contractor who understands estate-scale design, premium material sourcing, and the exacting standards of discerning homeowners.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            {BUSINESS.name} serves Atherton homeowners with the same precision and craftsmanship we bring to every project — but with the capacity, crew depth, and design experience to handle the larger scopes and elevated material selections that Atherton properties demand. We've built expansive paver motor courts with heated radiant systems, multi-zone outdoor kitchens with custom tile backsplashes and built-in BBQ islands, sunken seating areas surrounding natural stone fireplaces, and complete landscape installations that transform raw acreage into curated outdoor living environments.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            What sets our Atherton work apart is the level of coordination involved. Many projects here require close collaboration with architects, general contractors, and property managers. We're comfortable working within larger build schedules, adhering to town permitting requirements, and delivering results that integrate seamlessly with existing architecture. Our 2D and 3D design renderings — available for qualifying projects — give Atherton clients the ability to visualize complex layouts before a single paver is placed.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Whether you're reimagining the entire rear grounds of your estate, adding a resort-style pool deck with natural travertine, or building a grand front entry approach with an interlocking paver driveway and custom lighting, our team brings the experience, equipment, and attention to detail that Atherton homeowners expect. Licensed (#{BUSINESS.license}), fully insured, and backed by our {BUSINESS.paverWarrantyYears}-year paver warranty — we stand behind every square foot.
          </p>
        </div>
      </section>

      {/* What We Build in Atherton */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What We Build on Atherton Estates</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            Atherton projects often involve multiple outdoor zones — entertainment areas, garden rooms, utility spaces, and transitional corridors. Here's what we deliver most frequently for estate-level properties:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Expansive paver motor courts and estate driveways",
              "Custom outdoor kitchens with tile backsplash and BBQ islands",
              "Sunken seating areas with natural stone fireplaces",
              "Resort-style pool decks in travertine or porcelain",
              "Multi-zone landscape design with mature plantings",
              "Retaining walls and terraced garden structures",
              "Pergolas, pavilions, and covered outdoor dining",
              "Low-voltage landscape lighting systems",
              "Artificial turf installations for estate lawns",
              "Front entry walkways with decorative stone borders",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Services Available in Atherton</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICES.map((s) => (
              <Link key={s.path} to={s.path} className="flex items-center gap-2 p-5 bg-card rounded-sm border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span>
                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Our Estate Project Process" steps={[
        { title: "Property Assessment", description: "We walk your grounds, discuss your vision, assess terrain and access, and take detailed measurements for estate-scale planning." },
        { title: "Design & Coordination", description: "Receive professional 2D/3D renderings. We coordinate with your architect, GC, or property manager to align timelines and specifications." },
        { title: "Premium Construction", description: "Our crews handle excavation, grading, base preparation, material installation, and finish work — all managed by a dedicated project lead." },
        { title: "Final Walkthrough & Warranty", description: `Inspect every detail with us, confirm the finished scope, and receive your ${BUSINESS.paverWarrantyYears}-year warranty documentation.` },
      ]} />

      <FAQAccordion faqs={[
        { question: "Do you have experience with large estate properties?", answer: "Yes. We regularly work on Atherton properties ranging from half-acre lots to multi-acre estates. Our crew capacity, equipment, and project management systems are built to handle complex, multi-phase outdoor construction at scale." },
        { question: "Can you coordinate with our architect or general contractor?", answer: "Absolutely. Many of our Atherton projects involve collaboration with architects, designers, and GCs. We integrate smoothly into larger build schedules and communicate proactively with all parties involved." },
        { question: "What premium paver materials do you recommend for Atherton estates?", answer: "For estate-level properties, we most often recommend Techo-Bloc's Blu Grande or Borealis series, natural travertine, and large-format porcelain pavers. Material selection depends on your architecture, desired aesthetic, and functional requirements." },
        { question: "How long do large estate projects typically take?", answer: "Timeline depends on scope. A standalone paver motor court might take 2-3 weeks. A comprehensive outdoor renovation — driveway, patio, outdoor kitchen, landscaping, and lighting — can span 6-12 weeks. We provide a detailed schedule before construction begins." },
        { question: "Do you handle Atherton's permitting requirements?", answer: "Yes. We're familiar with the Town of Atherton's permitting process and setback requirements. We handle permit applications and ensure all work meets local building codes and HOA guidelines where applicable." },
        { question: "What warranty do you provide?", answer: `Our paver installations are backed by a ${BUSINESS.paverWarrantyYears}-year warranty covering materials and workmanship. Landscape installations include a ${BUSINESS.landscapeWarrantyDays}-day plant establishment warranty. We stand behind every project.` },
      ]} />

      <CTABanner title="Schedule an Estate Consultation in Atherton" subtitle="We'll visit your property, assess the scope, and deliver a detailed proposal crafted for your estate." />
    </Layout>
  );
};

export default Atherton;
