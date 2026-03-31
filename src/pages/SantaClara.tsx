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

const SantaClara = () => {
  useEffect(() => {
    document.title = "Landscaping & Hardscape Santa Clara, CA | Outdoor Renovation Contractor | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Professional Landscaping & Hardscape in Santa Clara"
        subtitle="Premium outdoor renovation for Santa Clara homeowners - pavers, landscaping, concrete driveways, outdoor kitchens, and complete backyard transformations built by a locally based, licensed contractor."
        backgroundImage={IMAGES.concrete}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Outdoor Projects Built for Santa Clara Living</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Santa Clara sits at the heart of Silicon Valley, and the city's mix of established single-family neighborhoods, newer developments, and tech-corridor properties creates steady demand for quality outdoor renovation.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            {BUSINESS.name} handles projects of all sizes in Santa Clara, from compact front yard refreshes to complete backyard overhauls with paver patios, outdoor kitchens, fire features, and custom landscaping.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Thoughtful Transformations",
          text: "What we see most often in Santa Clara is homeowners who've been in their homes for several years and are ready to invest in the outdoor space they've been imagining. Maybe the concrete patio has cracked and settled, or the lawn has become more work than it's worth. These are the projects we excel at - thoughtful transformations that make your home feel bigger, more functional, and more valuable.",
          image: IMAGES.zigzag7,
        },
        {
          title: "Professional Results, Every Time",
          text: `Every Santa Clara project receives the same level of craftsmanship we deliver across the Bay Area - proper base preparation, premium materials, clean execution, and a finished product that lasts. Licensed (#${BUSINESS.license}), fully insured, and backed by our ${BUSINESS.paverWarrantyYears}-year paver warranty.`,
          image: IMAGES.zigzag2,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Santa Clara Outdoor Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Paver patio installations for backyard living",
              "Concrete driveway replacement and resurfacing",
              "Front yard landscape redesigns and curb appeal upgrades",
              "Outdoor kitchens and BBQ island construction",
              "Artificial turf for zero-maintenance lawns",
              "Retaining walls for property grading and aesthetics",
              "Custom walkways and garden path installations",
              "Pergolas and shade structures for outdoor comfort",
              "Fire pit surrounds and evening entertaining areas",
              "Low-voltage landscape lighting systems",
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Services in Santa Clara</h2>
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

      <ProcessSteps title="Our Santa Clara Project Process" steps={[
        { title: "Free Consultation", description: "We visit your Santa Clara property, discuss your goals, evaluate conditions, and provide a detailed written estimate." },
        { title: "Design & Planning", description: "Select materials, finalize layout, and review your project plan. Qualifying projects include professional 2D/3D design renderings." },
        { title: "Professional Construction", description: "Our crews handle excavation, preparation, installation, and finish work - managed by a dedicated project lead." },
        { title: "Walkthrough & Warranty", description: `Review the finished project with us, confirm every detail, and receive your ${BUSINESS.paverWarrantyYears}-year warranty documentation.` },
      ]} />

      <FAQAccordion faqs={[
        { question: "How close are you to Santa Clara?", answer: "Our office is on Almaden Expressway in San Jose - a short drive from most Santa Clara neighborhoods." },
        { question: "What outdoor projects add the most value in Santa Clara?", answer: "Paver patio installations, driveway upgrades, and front yard landscape redesigns consistently deliver the highest ROI." },
        { question: "How long does a typical Santa Clara project take?", answer: "A standard paver patio takes 3-7 days. A complete backyard renovation typically runs 2-4 weeks." },
        { question: "Do you handle Santa Clara permits?", answer: "Yes. We handle the application process for projects that require permits. All work meets local building codes." },
        { question: "What's your warranty?", answer: `Paver installations include our ${BUSINESS.paverWarrantyYears}-year warranty on materials and workmanship. Landscape installations come with a ${BUSINESS.landscapeWarrantyDays}-day plant establishment guarantee.` },
      ]} />

      <CTABanner title="Get a Free Estimate in Santa Clara" subtitle="Contact us to schedule a complimentary on-site consultation at your Santa Clara property." />
    </Layout>
  );
};

export default SantaClara;
