import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ZigZagSection from "@/components/sections/ZigZagSection";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const PatioWalkways = () => {
  useEffect(() => {
    document.title = "Patio & Walkway Installation San Jose | Custom Patios & Paths | Stones Landscaping";
  }, []);

  const patioTypes = [
    { name: "Paver Patios", desc: "Interlocking paver patios built with premium materials like Techo-Bloc, travertine, and porcelain. The most popular choice among Bay Area homeowners for durability, design flexibility, and long-term value." },
    { name: "Concrete Patios", desc: "Poured concrete patios in standard, stamped, or colored finishes. A cost-effective option that delivers clean lines and solid performance — ideal for properties where budget and durability are top priorities." },
    { name: "Natural Stone Patios", desc: "Flagstone, bluestone, and limestone patios that bring organic texture and timeless elegance. Preferred by homeowners in Atherton, Saratoga, and Los Gatos who want a distinctive, estate-quality finish." },
    { name: "Mixed-Material Designs", desc: "Patios that combine pavers, stone, and concrete in a single cohesive design. These custom approaches create visual interest, define different zones, and make your outdoor space feel intentional and layered." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Custom Patio & Walkway Installations"
        subtitle="Patios and walkways that define your outdoor space — designed for durability, proper drainage, and the kind of visual impact that elevates your entire property."
        backgroundImage={IMAGES.pavers}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Patios & Walkways That Connect and Define Your Outdoor Space</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Patios and walkways are the backbone of any well-designed outdoor living space. A properly built patio gives you a defined area for dining, lounging, cooking, or entertaining — it's the foundation that every other outdoor feature builds upon. Walkways connect the different zones of your yard and create flow between your home's interior and the outdoor spaces you use most.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            At {BUSINESS.name}, we build patios and walkways using pavers, natural stone, and concrete — selected based on your aesthetic preferences, property conditions, and budget. Every installation includes proper excavation to the correct depth, compacted aggregate base preparation, precise grading for drainage, and finishing details that make the difference between a surface that settles and one that stays flat for decades.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Here's what we've learned after building hundreds of patios across the Bay Area: the biggest factor in long-term performance isn't the surface material — it's what's underneath. We've pulled up patios that were only three years old where the pavers were perfectly fine, but the base had compacted unevenly because it wasn't prepared correctly. The surface follows the base. That's why we invest the time to get the foundation right on every project, even when it means an extra day of base work that nobody will ever see.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            We recently completed a 1,200-square-foot paver patio for a homeowner in San Jose's Willow Glen neighborhood. The project included a built-in seating wall, integrated fire pit, and a walkway connecting the patio to a new outdoor kitchen area. The homeowner told us it completely changed how their family uses the backyard — they went from never going outside to eating dinner on the patio five nights a week. That's the kind of transformation a well-designed patio delivers.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Whether you're adding a small side-yard path, replacing an old concrete slab with elegant pavers, or building a large backyard patio with integrated seating walls, fire features, and kitchen access — we handle the full scope from design through installation and final cleanup.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Patio & Surface Options</h2>
            <p className="text-muted-foreground mt-3 font-light">Selected to match your home's style, your usage, and the Bay Area climate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patioTypes.map((p) => (
              <div key={p.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Common Patio & Walkway Applications</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            Every property is different, but these are the most popular patio and walkway projects we build for Bay Area homeowners.
          </p>
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
      </section>

      <ProcessSteps title="Patio & Walkway Installation Process" steps={[
        { title: "Site Assessment", description: "We evaluate your property, measure the space, assess drainage and soil conditions, and discuss your vision for how the space will be used." },
        { title: "Design & Material Selection", description: "Choose from pavers, natural stone, or concrete. We help you select the material, pattern, and color that best complements your home and outdoor features." },
        { title: "Excavation & Base Work", description: "Proper excavation, grading for drainage, compacted aggregate base installation, and leveling sand — the critical foundation work that determines long-term performance." },
        { title: "Installation & Finishing", description: "Precision placement of your chosen material, edge restraint, polymeric sand or grout joints, and final cleanup. Walkthrough and handoff." },
      ]} />

      <FAQAccordion faqs={[
        { question: "How long does a patio installation take?", answer: "Most residential patios take 3–7 days depending on size, material, and complexity. A simple 200-square-foot walkway might take 2 days, while a large paver patio with integrated features could take 1–2 weeks. We provide a detailed timeline before construction begins." },
        { question: "What's the best patio material for the Bay Area?", answer: "Interlocking pavers are the most popular choice among our Bay Area clients because they handle ground movement without cracking, offer excellent drainage, and provide virtually unlimited design options. Natural stone is preferred by homeowners seeking a premium, estate-quality look. Concrete works well for budget-conscious projects that still need to look clean and professional." },
        { question: "How much does a patio installation cost?", answer: "Patio costs depend on size, material, site conditions, and any integrated features like seating walls or fire pits. We provide transparent, itemized proposals after every on-site consultation so you know exactly what you're investing in — no surprises or hidden costs." },
        { question: "Can you build a patio on a sloped yard?", answer: "Yes — we regularly build patios on properties with grade changes. The approach might include retaining walls to create a level pad, stepped patio areas that follow the natural grade, or a combination of both. Sloped sites require more planning and base work, but the result is often more dramatic and interesting than a flat-lot patio." },
        { question: "Do walkways add value to a home?", answer: "Absolutely. A well-designed front walkway is one of the highest-ROI curb appeal improvements you can make. It signals to buyers and visitors that the property is well-maintained and thoughtfully designed. In the Bay Area's competitive real estate market, that first impression matters more than most homeowners realize." },
      ]} />

      <CTABanner title="Plan Your Patio or Walkway" subtitle="Request a complimentary consultation and get a detailed estimate for your patio or walkway installation project." />
    </Layout>
  );
};

export default PatioWalkways;