import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ZigZagSection from "@/components/sections/ZigZagSection";
import { IMAGES, BUSINESS, SERVICES } from "@/lib/constants";
import { CheckCircle, ArrowRight } from "lucide-react";

const LosGatos = () => {
  useEffect(() => {
    document.title = "Landscaping & Hardscape Los Gatos, CA | Hillside & Luxury Outdoor Renovation | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Luxury Landscaping & Hardscape in Los Gatos"
        subtitle="Custom outdoor renovations for Los Gatos homeowners. Paver patios, retaining walls, outdoor kitchens, and complete landscape design-build — engineered for the hillside and valley properties that make Los Gatos extraordinary."
        backgroundImage={IMAGES.landscaping}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Outdoor Renovation Built for Los Gatos Terrain</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Los Gatos sits at the base of the Santa Cruz Mountains, and that geography defines what outdoor renovation looks like here. Properties range from charming downtown lots to sprawling hillside estates with dramatic elevation changes, mature redwoods, and terrain that demands a contractor who understands both structural engineering and refined design.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            {BUSINESS.name} has completed projects across Los Gatos — from the neighborhoods surrounding downtown to larger properties along Kennedy Road, Shannon Road, and the mountain corridors. We handle the grading, drainage engineering, retaining wall construction, and terraced patio design needed to transform challenging terrain into stunning, functional outdoor living space.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Year-Round Outdoor Enjoyment",
          text: "Los Gatos homeowners invest in their outdoor spaces because the climate allows year-round enjoyment and the property values justify premium materials and craftsmanship. We've built sunken fire pit lounges overlooking the valley, expansive natural stone patios framed by heritage oaks, and custom outdoor kitchens with granite countertops and built-in grills.",
          image: IMAGES.zigzag3,
        },
        {
          title: "Hillside Expertise",
          text: `Whether your Los Gatos home needs a complete backyard transformation, a hillside retaining wall system with terraced planting beds, or an elegant front entry approach with natural stone pavers, our team delivers results that honor the setting. Licensed (#${BUSINESS.license}), fully insured, and backed by our ${BUSINESS.paverWarrantyYears}-year paver warranty.`,
          image: IMAGES.zigzag5,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Projects in Los Gatos</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            The town's mix of established homes, mid-century properties, and newer luxury construction means every project is different.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Hillside retaining wall systems with terraced gardens",
              "Custom paver patios with fire pit surrounds",
              "Natural stone walkways through sloped landscapes",
              "Outdoor kitchens with mountain-view dining areas",
              "Pool deck installations in travertine or porcelain",
              "Front yard landscape redesigns for curb appeal",
              "Pergolas and covered outdoor living structures",
              "Drainage solutions for hillside water management",
              "Artificial turf for low-maintenance lawn areas",
              "Low-voltage landscape lighting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Services in Los Gatos</h2>
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

      <ProcessSteps title="Our Los Gatos Project Process" steps={[
        { title: "Site Evaluation", description: "We assess your property's terrain, grade, drainage patterns, and access points — critical for hillside and sloped-lot projects." },
        { title: "Custom Design", description: "Receive a tailored design plan with material recommendations, layout options, and 2D/3D renderings for qualifying scopes." },
        { title: "Expert Construction", description: "Our crews handle excavation, structural work, paver installation, planting, and finish details — managed by a dedicated project lead." },
        { title: "Final Inspection & Warranty", description: `Walk the completed project with us, verify every detail, and receive your ${BUSINESS.paverWarrantyYears}-year warranty documentation.` },
      ]} />

      <FAQAccordion faqs={[
        { question: "Can you build on hillside properties in Los Gatos?", answer: "Absolutely. Hillside construction is one of our specialties. We engineer retaining walls, terraced patios, and proper drainage systems for sloped properties throughout the Los Gatos hills." },
        { question: "What materials work best for Los Gatos properties?", answer: "Natural stone — travertine, bluestone, and limestone — complements the organic feel of Los Gatos landscapes. We also recommend Techo-Bloc interlocking pavers for patios and driveways." },
        { question: "How do you handle drainage on sloped lots?", answer: "Every hillside project includes a drainage assessment. We design and install French drains, channel drains, graded swales, and permeable surfaces to manage water flow." },
        { question: "Do you handle Los Gatos permitting?", answer: "Yes. We're familiar with the Town of Los Gatos permitting requirements for hardscape, retaining walls, and landscape construction." },
        { question: "What's the typical timeline for a Los Gatos backyard renovation?", answer: "A standard patio and landscape renovation takes 2-4 weeks. More complex hillside projects with retaining walls and multiple terraces can run 4-8 weeks." },
      ]} />

      <CTABanner title="Get a Free Estimate in Los Gatos" subtitle="Schedule a complimentary on-site consultation at your Los Gatos property — we'll assess the terrain and deliver a custom proposal." />
    </Layout>
  );
};

export default LosGatos;
