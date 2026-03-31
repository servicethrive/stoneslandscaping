import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const ConcreteDriveways = () => {
  useEffect(() => {
    document.title = "Concrete Driveway Installation San Jose | Stamped & Colored | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Concrete Driveway Installation & Replacement"
        subtitle="Professional concrete driveways built for the Bay Area — standard, stamped, and colored options available. Clean work, proper grading, and lasting results."
        backgroundImage={IMAGES.concrete}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">New Driveways and Full Replacements</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Your driveway is one of the first things people notice about your home — and one of the most heavily used surfaces on your property. Whether it's cracked, sunken, stained, or just outdated, a new concrete driveway improves curb appeal, functionality, and property value.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {BUSINESS.name} handles complete driveway projects from demo to pour. We remove the old surface, evaluate the sub-base, grade for proper drainage, set forms, pour and finish the concrete, and apply sealant. Every driveway we build is reinforced, properly sloped, and built to handle the Bay Area's soil and weather conditions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We're licensed for concrete-related services under classification C-61/D06, and our work reflects that specialization. This isn't a side service — it's a core part of what we do.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Concrete Driveway Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Standard Concrete", desc: "Clean, durable, cost-effective. Brushed finish with proper reinforcement and control joints. The reliable choice for most homes." },
              { title: "Stamped Concrete", desc: "Textured patterns that mimic natural stone, brick, or slate. Adds visual interest and a custom look without the cost of natural materials." },
              { title: "Colored Concrete", desc: "Integral color mixed into the concrete for a consistent, fade-resistant tone. Available in earth tones, grays, and custom colors to complement your home." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">When It's Time for a New Driveway</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Large or spreading cracks", "Sunken or uneven sections", "Standing water or drainage issues",
              "Significant staining or surface deterioration", "Selling your home and need curb appeal",
              "Old asphalt or failing concrete surface",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Driveway Project Process" steps={[
        { title: "Assessment", description: "We inspect your current driveway, evaluate sub-base conditions, and discuss your goals and finish preferences." },
        { title: "Demo & Prep", description: "Remove the old surface, grade the sub-base, install rebar reinforcement, and set precise forms." },
        { title: "Pour & Finish", description: "Fresh concrete is poured, leveled, finished with your chosen texture, and sealed for protection." },
        { title: "Curing & Handoff", description: "We outline proper curing timelines and provide care instructions for your new driveway." },
      ]} />

      <FAQAccordion faqs={[
        { question: "How long does a driveway replacement take?", answer: "Most single-family driveway replacements take 3–5 days, including demo, prep, pour, and initial curing time." },
        { question: "How long before I can drive on my new driveway?", answer: "We typically recommend waiting 5–7 days before driving on new concrete. Walking is usually safe after 24–48 hours." },
        { question: "Is stamped concrete more expensive?", answer: "Yes, stamped concrete costs more than standard finishes due to the additional labor and materials involved, but it's significantly less expensive than natural stone pavers for a similar look." },
        { question: "Do you pour concrete for other projects?", answer: "Yes. In addition to driveways, we handle concrete walkways, patios, and slabs as part of larger outdoor renovation projects." },
      ]} />

      <CTABanner title="Get a Quote for Your Driveway Project" subtitle="Schedule a free assessment and receive a detailed proposal for your concrete driveway." />
    </Layout>
  );
};

export default ConcreteDriveways;
