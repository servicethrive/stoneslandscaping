import { usePageMeta } from "@/hooks/use-page-meta";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ZigZagSection from "@/components/sections/ZigZagSection";
import { IMAGES, BUSINESS } from "@/lib/constants";
import stampedConcrete from "@/assets/projects/Stamped_concrete.jpg";
import concreteWork from "@/assets/projects/concrete_work_in_san_jose.jpg";
import { CheckCircle } from "lucide-react";

const ConcreteDriveways = () => {
  usePageMeta(
    "Concrete Driveway Contractor San Jose | Stamped & Decorative | Stones Landscaping",
    "Stamped & decorative concrete driveway contractor in San Jose. Custom finishes, expert installation. Licensed & insured. Free estimates."
  );

  const concreteTypes = [
    { name: "Standard Brushed Concrete", desc: "Clean, durable, and cost-effective. A brushed finish with proper reinforcement and control joints delivers the reliable, professional look that most Bay Area homes need - and it performs beautifully for decades." },
    { name: "Stamped Concrete", desc: "Textured patterns that replicate the look of natural stone, brick, slate, or flagstone. Stamped concrete adds distinctive visual character to your driveway at a fraction of the cost of natural materials - a popular upgrade for homeowners seeking visual impact." },
    { name: "Colored & Stained Concrete", desc: "Integral color mixed throughout the concrete for a consistent, fade-resistant tone, or acid stains applied after curing for rich, variegated earth tones. Available in a range of colors to complement your home's exterior palette." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Concrete Driveway Contractor in San Jose"
        subtitle="Professional concrete driveways built for San Jose homes - standard, stamped, and decorative finishes. Proper grading, reinforcement, and lasting results backed by our craftsmanship guarantee."
        backgroundImage={IMAGES.concrete}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">New Driveways and Complete Replacements</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Your driveway is the first surface people see when they approach your home - and one of the most heavily used areas on your entire property. A new concrete driveway transforms your curb appeal, improves daily functionality, and adds measurable value.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            At {BUSINESS.name}, we handle complete driveway projects from demolition to final seal coat. Every driveway we build is properly reinforced with rebar, sloped for positive drainage, and designed to handle the Bay Area's expansive clay soils.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "The Sub-Base Is Everything",
          text: "Here's something most homeowners don't think about until it's too late: the sub-base is everything. A beautiful concrete surface poured over a poorly prepared base will crack within a few years, guaranteed. We excavate to the proper depth, compact the sub-grade, and install a gravel base layer before any concrete is placed.",
          image: stampedConcrete,
        },
        {
          title: "Licensed Concrete Specialists",
          text: `We're licensed for concrete-related services under classification C-61/D06 (License #${BUSINESS.license}), and our work reflects that specialization. Concrete isn't a side service for us - it's one of the core trades we've built our reputation on. We've poured driveways for properties across San Jose, Campbell, Santa Clara, and throughout the South Bay.`,
          image: concreteWork,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Concrete Driveway Options</h2>
            <p className="text-muted-foreground mt-3 font-light">Select the finish that matches your home's style and your expectations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {concreteTypes.map((c) => (
              <div key={c.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">When It's Time for a New Driveway</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            If your driveway shows any of these signs, replacement is likely more cost-effective than continued patching or repair.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Large or spreading cracks across the surface",
              "Sunken or uneven sections creating trip hazards",
              "Standing water or drainage flowing toward your home",
              "Significant staining or surface deterioration",
              "Preparing to sell and need curb appeal",
              "Old asphalt or failing concrete past repair",
              "Driveway doesn't match a recently renovated home",
              "Widening or extending for additional vehicles",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Driveway Project Process" steps={[
        { title: "Assessment & Planning", description: "We inspect your current driveway, evaluate sub-base conditions, check drainage patterns, and discuss your finish preferences and budget." },
        { title: "Demo & Base Prep", description: "Remove the old surface, excavate to proper depth, grade the sub-base for drainage, compact the soil, and install gravel base and rebar reinforcement." },
        { title: "Pour & Finish", description: "Fresh concrete is poured, leveled, and finished with your chosen texture - brushed, stamped, or smooth. Control joints are cut and sealant is applied." },
        { title: "Curing & Handoff", description: "We outline proper curing timelines, provide care instructions, and schedule a follow-up check to ensure everything is performing as expected." },
      ]} />

      <FAQAccordion faqs={[
        { question: "How long does a driveway replacement take?", answer: "Most single-family driveway replacements take 3–5 days, including demolition, base preparation, forming, pouring, and initial curing. Larger driveways or stamped/colored finishes may add 1–2 additional days." },
        { question: "How long before I can drive on my new driveway?", answer: "We recommend waiting 5–7 days before driving on new concrete. Walking is typically safe after 24–48 hours. We provide detailed curing instructions and mark the timeline clearly so you know exactly when your driveway is ready for full use." },
        { question: "Is stamped concrete more expensive than standard?", answer: "Yes - stamped concrete costs more due to the additional labor, stamping tools, release agents, and often integral color that's involved. However, it's significantly less expensive than installing natural stone or pavers for a similar aesthetic result, making it an excellent value for homeowners who want visual impact without the premium material cost." },
        { question: "How thick should a residential concrete driveway be?", answer: "We pour residential driveways at a minimum of 4 inches thick, with 5-6 inches at transitions and areas that bear heavier loads. Every driveway includes steel rebar reinforcement and properly spaced control joints to manage cracking. The exact specifications depend on your soil conditions and expected use." },
        { question: "Do you also pour concrete patios and walkways?", answer: "Yes. In addition to driveways, we handle concrete patios, walkways, pool decks, and utility slabs as part of larger outdoor renovation projects. Many of our clients combine a driveway replacement with a new concrete or paver patio in the backyard - and building them together saves on mobilization costs." },
      ]} />

      <CTABanner title="Get a Quote for Your Driveway Project" subtitle="Schedule a free assessment and receive a detailed, transparent proposal for your concrete driveway installation or replacement." />
    </Layout>
  );
};

export default ConcreteDriveways;