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

const Campbell = () => {
  useEffect(() => {
    document.title = "Landscaping & Hardscape Campbell, CA | Paver Patios & Outdoor Living | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Landscaping & Hardscape in Campbell"
        subtitle="Quality outdoor renovations for Campbell homeowners - paver patios, custom landscaping, driveways, outdoor kitchens, and complete backyard transformations. Locally based and ready to serve your neighborhood."
        backgroundImage={IMAGES.hardscape}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Outdoor Renovation for Campbell Homes</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Campbell is one of our closest service areas, located just minutes from our office on Almaden Expressway. The city's established neighborhoods, well-maintained mid-sized lots, and active homeowner community make it a natural fit for our residential outdoor renovation services.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Common projects in Campbell include paver patio replacements, front yard landscaping upgrades, concrete driveway installations, and complete backyard transformations that add functional outdoor living space.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Transforming Campbell Backyards",
          text: "Many homeowners here are updating older properties with modern outdoor features - replacing tired concrete with interlocking pavers, adding outdoor kitchen areas for weekend entertaining, or installing artificial turf to eliminate maintenance while keeping the yard looking pristine year-round. We help them do it with professional design, premium materials, and construction that's built to last.",
          image: IMAGES.zigzag7,
        },
        {
          title: "Same Quality, Every Project",
          text: `Campbell's flat terrain and typical lot sizes make most projects straightforward to plan and execute, which often translates to efficient timelines and competitive project costs. That said, we bring the same level of craftsmanship and attention to detail to every Campbell project that we deliver on the largest estate projects in the Bay Area - the same base preparation, the same premium materials, the same ${BUSINESS.paverWarrantyYears}-year warranty.`,
          image: IMAGES.zigzag1,
        },
        {
          title: "Your Local Contractor",
          text: "Whether you're on a tree-lined street near downtown Campbell, in one of the neighborhoods along Campbell Avenue, or in the residential areas near Pruneyard, we know the area and we know the properties. Our proximity means fast response times, easy access for material delivery, and the convenience of working with a contractor who's genuinely local.",
          image: IMAGES.zigzag8,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Campbell Homeowners Are Building</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Paver patio installations for backyard entertaining",
              "Front yard landscape redesigns for curb appeal",
              "Concrete driveway replacement and upgrades",
              "Outdoor kitchen and BBQ island construction",
              "Artificial turf for low-maintenance lawns",
              "Retaining walls for yard leveling and aesthetics",
              "Custom walkways and garden path installations",
              "Pergolas and shade structures for outdoor comfort",
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Services in Campbell</h2>
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

      <ProcessSteps title="Our Campbell Project Process" steps={[
        { title: "Free On-Site Estimate", description: "We visit your Campbell property, discuss your goals, take measurements, and provide a detailed written estimate - no obligation." },
        { title: "Design & Material Selection", description: "Choose from premium pavers, natural stone, concrete finishes, and landscape materials." },
        { title: "Professional Installation", description: "Our crews handle excavation, grading, base preparation, installation, and cleanup - with a dedicated project lead." },
        { title: "Final Walkthrough & Warranty", description: `Inspect the finished project with us and receive your ${BUSINESS.paverWarrantyYears}-year warranty documentation.` },
      ]} />

      <FAQAccordion faqs={[
        { question: "How close are you to Campbell?", answer: "Our office is on Almaden Expressway in San Jose - just a few minutes from most Campbell neighborhoods." },
        { question: "What's the most popular project in Campbell?", answer: "Paver patio installations are our most-requested service in Campbell. Homeowners are replacing old concrete slabs with interlocking pavers that look better, last longer, and add significant value." },
        { question: "How much does a typical Campbell outdoor project cost?", answer: "Campbell projects vary based on scope and materials. We provide detailed, transparent estimates for every project." },
        { question: "Do you handle Campbell city permits?", answer: "Yes. We manage permit applications for projects that require them and ensure all work meets City of Campbell building codes." },
        { question: "What warranty do you provide?", answer: `Paver installations are backed by our ${BUSINESS.paverWarrantyYears}-year warranty covering materials and workmanship. Landscape installations include a ${BUSINESS.landscapeWarrantyDays}-day plant establishment warranty.` },
      ]} />

      <CTABanner title="Get a Free Estimate in Campbell" subtitle="Schedule a consultation - we're right around the corner and ready to transform your outdoor space." />
    </Layout>
  );
};

export default Campbell;
