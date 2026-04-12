import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ZigZagSection from "@/components/sections/ZigZagSection";
import { IMAGES, BUSINESS } from "@/lib/constants";
import lavaRockHardscape from "@/assets/projects/lava-rock-hardscape-san-jose.jpg";
import paverWalkways from "@/assets/projects/paver_walkways.jpg";
import hollandstoneDriveway from "@/assets/projects/Hollandstone_driveway_paver.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

const hardscapeServices = [
  { title: "Pavers", path: "/pavers", desc: "Custom paver patios, walkways, driveways, and pool decks using premium materials like Techo-Bloc, travertine, and porcelain." },
  { title: "Retaining Walls", path: "/retaining-walls", desc: "Structural and decorative retaining walls that manage slopes, prevent erosion, and add architectural interest." },
  { title: "Outdoor Kitchens & Living Structures", path: "/outdoor-kitchens", desc: "Custom-built outdoor kitchens, pergolas, and shade structures for year-round entertaining." },
];

const patioTypes = [
  { name: "Paver Patios", desc: "Interlocking paver patios built with premium materials like Techo-Bloc, travertine, and porcelain. The most popular choice among Bay Area homeowners for durability, design flexibility, and long-term value." },
  { name: "Concrete Patios", desc: "Poured concrete patios in standard, stamped, or colored finishes. A cost-effective option that delivers clean lines and solid performance." },
  { name: "Natural Stone Patios", desc: "Flagstone, bluestone, and limestone patios that bring organic texture and timeless elegance. Preferred by homeowners in Atherton, Saratoga, and Los Gatos." },
  { name: "Mixed-Material Designs", desc: "Patios that combine pavers, stone, and concrete in a single cohesive design - creating visual interest, defining different zones, and making your outdoor space feel intentional." },
];

const Hardscape = () => {
  usePageMeta(
    "Hardscape Contractor San Jose | Patios, Walls & Outdoor Living | Stones Landscaping",
    "Full-service hardscape contractor in San Jose. Patios, retaining walls, fire features & outdoor living. Premium materials, expert craftsmanship."
  );

  return (
    <Layout>
      <HeroSection
        title="Hardscape Contractor in San Jose"
        subtitle="From expansive paver patios to engineered retaining walls and custom outdoor kitchens - hardscape projects designed for San Jose living and built to perform for decades."
        backgroundImage={IMAGES.hardscape}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What Is Hardscape - and Why It Matters More Than You Think</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Hardscape refers to the non-living structural elements of your outdoor space - patios, walkways, retaining walls, driveways, fire features, outdoor kitchens, and pergolas. These are the permanent features that define how your yard functions, flows, and feels.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            At {BUSINESS.name}, hardscape construction is our primary specialty. We've built hundreds of hardscape projects across San Jose, Atherton, Los Gatos, Saratoga, and throughout the South Bay.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "The Details You Don't See",
          text: "Here's what separates professional hardscape from the work you see failing after a few years: it's the parts you don't see. The excavation depth, the base material, the compaction, the grading for drainage, the edge restraint systems, the footing depth on walls - these invisible details determine whether your patio stays flat, your wall stays straight, and your outdoor kitchen stays level.",
          image: lavaRockHardscape,
        },
        {
          title: "Premium Materials, Proven Methods",
          text: `Every hardscape project we take on is built with proper engineering, premium materials selected for the Bay Area climate, and craftsmanship that reflects our ${new Date().getFullYear() - BUSINESS.founded}+ years of residential outdoor construction experience. Our paver installations carry a ${BUSINESS.paverWarrantyYears}-year warranty because we stand behind the way we build.`,
          image: paverWalkways,
        },
        {
          title: "Transform Your Outdoor Living",
          text: "Whether you're replacing an aging concrete patio, adding a retaining wall to reclaim a hillside, building a complete outdoor kitchen and entertainment area, or transforming your entire backyard into a luxury outdoor living space - hardscape is the foundation of a property that works as beautifully as it looks.",
          image: hollandstoneDriveway,
        },
      ]} />

      {/* Patios & Walkways Section (merged) */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Patios & Walkways</h2>
            <p className="text-muted-foreground mt-3 font-light">The backbone of any well-designed outdoor living space</p>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed font-light text-center max-w-3xl mx-auto">
            Patios and walkways define how you move through and use your outdoor space. A properly built patio gives you a defined area for dining, lounging, cooking, or entertaining. We build them using pavers, natural stone, and concrete - selected based on your aesthetic preferences, property conditions, and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patioTypes.map((p) => (
              <div key={p.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-4xl mx-auto">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Common Patio & Walkway Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Backyard entertainment patios",
                "Grand front entry walkways",
                "Side yard paths and utility corridors",
                "Garden walkways through planted areas",
                "Pool deck patios and surrounds",
                "Fire pit and seating area patios",
                "Stepping stone paths through landscape",
                "Connected patio-to-kitchen transitions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hardscape Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Hardscape Services</h2>
            <p className="text-muted-foreground mt-3 font-light">Each service is a dedicated specialty - not a side offering</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hardscapeServices.map((s) => (
              <Link key={s.path} to={s.path} className="group bg-background rounded-sm border border-border/60 p-8 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-light">{s.desc}</p>
                <span className="text-sm font-medium text-primary inline-flex items-center tracking-wide uppercase">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why Invest in Professional Hardscape</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            A well-built hardscape project changes how you use your property. It gives you defined spaces for cooking, dining, relaxing, and entertaining - without the limitations of a basic lawn or deteriorating concrete slab.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              "Adds usable square footage to your property",
              "Increases home value and market appeal",
              "Reduces long-term maintenance costs",
              "Creates defined outdoor living zones",
              "Solves drainage and grading problems",
              "Delivers decades of performance with minimal upkeep",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "What types of hardscape projects do you handle?", answer: "We build paver patios, driveways, and walkways; structural and decorative retaining walls; custom outdoor kitchens and BBQ islands; pergolas and patio covers; fire pits and fire features; pool decks; and complete backyard remodels." },
        { question: "How long does a typical hardscape project take?", answer: "Most residential hardscape projects take 1–4 weeks depending on scope and complexity." },
        { question: "Do you handle permits, engineering, and grading?", answer: "Yes. We manage the entire permitting process, coordinate structural engineering when needed, and handle all grading and drainage work." },
        { question: "What materials do you work with?", answer: "We use premium materials: Techo-Bloc and Belgard pavers, natural travertine and bluestone, porcelain pavers, segmental retaining wall block, natural stone, granite and quartzite countertops, and western red cedar and aluminum for pergolas." },
        { question: "How does your warranty work?", answer: `Our paver installations carry a ${BUSINESS.paverWarrantyYears}-year warranty on materials and workmanship. If anything related to our installation fails within the warranty period, we address it.` },
        { question: "What's the best patio material for the Bay Area?", answer: "Interlocking pavers are the most popular choice because they handle ground movement without cracking, offer excellent drainage, and provide unlimited design options. Natural stone is preferred for a premium, estate-quality look. Concrete works well for budget-conscious projects." },
      ]} />

      <CTABanner title="Plan Your Hardscape Project" subtitle="Request a complimentary consultation and receive a detailed, transparent proposal for your outdoor project." />
    </Layout>
  );
};

export default Hardscape;