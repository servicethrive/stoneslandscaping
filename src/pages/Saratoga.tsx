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
import woodFinishWalkway from "@/assets/projects/Wood_finish_Porcelain_walkway.jpg";
import outdoorKitchenFirepit from "@/assets/projects/outdoor_kitchen_and_firepit.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";

const Saratoga = () => {
  useEffect(() => {
    document.title = "Premium Landscaping & Hardscape Saratoga, CA | Luxury Outdoor Living | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Premium Landscaping & Hardscape in Saratoga"
        subtitle="Outdoor transformations for Saratoga's upscale residential properties - custom pavers, outdoor kitchens, fire features, landscape design-build, and hardscape construction crafted for the Bay Area's most refined neighborhood."
        backgroundImage={IMAGES.pavers}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Serving Saratoga's Most Distinguished Properties</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Saratoga's combination of spacious lots, mature heritage trees, and beautiful residential properties makes it one of the most rewarding communities in the Bay Area for outdoor living investment. Homeowners here don't just want a new patio - they want an outdoor environment that matches the quality and character of their home.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            {BUSINESS.name} has completed paver installations, landscape renovations, retaining wall projects, outdoor kitchen builds, and complete backyard transformations across Saratoga. From the quiet cul-de-sacs near Saratoga Village to the larger foothill properties along Mt. Eden Road and Saratoga-Sunnyvale Road, each project reflects the character of the neighborhood.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Terrain-Specific Design",
          text: "Here's what most homeowners don't realize about outdoor renovation in Saratoga: the terrain varies significantly from one street to the next. Properties closer to the foothills often require retaining walls, terraced layouts, and sophisticated drainage engineering, while lots in the flatland neighborhoods present different opportunities for expansive entertainment patios and resort-style pool surrounds.",
          image: woodFinishWalkway,
        },
        {
          title: "Refined Craftsmanship",
          text: `We've built sunken conversation pits around custom gas fireplaces, grand front walkways with natural bluestone and landscape lighting, complete outdoor kitchen pavilions with countertops, built-in grills, and bar seating, and multi-zone backyards that transition seamlessly from entertaining space to quiet garden retreats. Every project is licensed (#${BUSINESS.license}), fully insured, and backed by our ${BUSINESS.paverWarrantyYears}-year paver warranty.`,
          image: outdoorKitchenFirepit,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Saratoga Homeowners Are Building</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            Saratoga outdoor projects tend to be larger in scope and higher in material quality than most Bay Area communities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Expansive paver patios for year-round entertaining",
              "Custom outdoor kitchens with granite and tile finishes",
              "Sunken fire pit seating areas with natural stone",
              "Estate-quality paver driveways and motor courts",
              "Retaining walls and terraced hillside gardens",
              "Pool deck resurfacing in travertine or porcelain",
              "Complete front yard curb appeal transformations",
              "Pergolas and covered outdoor dining structures",
              "Low-maintenance artificial turf installations",
              "Integrated low-voltage landscape lighting",
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Services in Saratoga</h2>
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

      <ProcessSteps title="Our Saratoga Project Process" steps={[
        { title: "Property Consultation", description: "We visit your Saratoga property, discuss your vision, assess terrain and conditions, and take detailed measurements." },
        { title: "Design & Material Selection", description: "Choose from premium materials - natural stone, Techo-Bloc, porcelain, travertine. Qualifying projects receive professional 2D/3D renderings." },
        { title: "Expert Construction", description: "Our crews handle every phase - excavation, grading, base preparation, installation, planting, and finish work - managed by a dedicated lead." },
        { title: "Final Walkthrough & Warranty", description: `Inspect the completed project, confirm every specification, and receive your ${BUSINESS.paverWarrantyYears}-year warranty documentation.` },
      ]} />

      <FAQAccordion faqs={[
        { question: "What makes Saratoga outdoor projects different?", answer: "Saratoga properties tend to have larger lots, more mature landscaping, and higher material expectations. Many also involve terrain variations that require retaining walls, drainage engineering, and multi-level design." },
        { question: "Which materials do you recommend for Saratoga homes?", answer: "For Saratoga's upscale aesthetic, we most often recommend natural travertine, Techo-Bloc's premium series, limestone, and large-format porcelain pavers." },
        { question: "Do you work on properties near the Saratoga foothills?", answer: "Absolutely. Foothill properties often require specialized approach - retaining walls, terraced layouts, enhanced drainage, and structural engineering." },
        { question: "How much does a typical Saratoga backyard renovation cost?", answer: "Saratoga projects vary widely based on scope, materials, and site conditions. We provide detailed, transparent estimates for every project." },
        { question: "What warranty do you offer?", answer: `Our paver installations are backed by a ${BUSINESS.paverWarrantyYears}-year warranty covering materials and workmanship. Landscape installations include a ${BUSINESS.landscapeWarrantyDays}-day plant establishment warranty.` },
      ]} />

      <CTABanner title="Start Your Saratoga Outdoor Project" subtitle="Request a complimentary consultation - we'll visit your property and deliver a custom proposal tailored to your home." />
    </Layout>
  );
};

export default Saratoga;
