import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { ArrowRight, CheckCircle } from "lucide-react";

const hardscapeServices = [
  { title: "Pavers", path: "/pavers", desc: "Custom paver patios, walkways, driveways, and pool decks using premium materials like Techo-Bloc, travertine, and porcelain." },
  { title: "Retaining Walls", path: "/retaining-walls", desc: "Structural and decorative retaining walls that manage slopes, prevent erosion, and add architectural interest." },
  { title: "Patio & Walkway Installations", path: "/patio-walkway-installations", desc: "Complete patio and walkway construction designed for durability, drainage, and visual impact." },
  { title: "Outdoor Kitchens", path: "/outdoor-kitchens", desc: "Custom-built outdoor kitchens with stone countertops, grill stations, and full entertainment features." },
  { title: "Pergolas & Shade Structures", path: "/pergolas-shade-structures", desc: "Architectural pergolas, patio covers, and louvered roof systems that extend your outdoor living season." },
];

const Hardscape = () => {
  useEffect(() => {
    document.title = "Hardscape Contractor San Jose | Patios, Walls & Outdoor Living | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Hardscape Construction Built to Last"
        subtitle="From expansive paver patios to engineered retaining walls and custom outdoor kitchens — hardscape projects designed for Bay Area living and built to perform for decades."
        backgroundImage={IMAGES.hardscape}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What Is Hardscape — and Why It Matters More Than You Think</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Hardscape refers to the non-living structural elements of your outdoor space — patios, walkways, retaining walls, driveways, fire features, outdoor kitchens, and pergolas. These are the permanent features that define how your yard functions, flows, and feels. Unlike softscape (plants, grass, mulch), hardscape elements are engineered to last decades with minimal maintenance, and they form the architectural foundation of every well-designed outdoor living space.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            At {BUSINESS.name}, hardscape construction is our primary specialty. We've built hundreds of hardscape projects across San Jose, Atherton, Los Gatos, Saratoga, Campbell, Santa Clara, and throughout the South Bay. From compact urban patios in downtown San Jose to multi-zone outdoor living environments on acre-plus properties in Atherton and Hillsborough — we've seen the full range, and we bring that depth of experience to every project.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Here's what separates professional hardscape from the work you see failing after a few years: it's the parts you don't see. The excavation depth, the base material, the compaction, the grading for drainage, the edge restraint systems, the footing depth on walls — these invisible details determine whether your patio stays flat, your wall stays straight, and your outdoor kitchen stays level. We've pulled up enough failed hardscape to know exactly what happens when contractors skip these steps. We don't.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Every hardscape project we take on is built with proper engineering, premium materials selected for the Bay Area climate, and craftsmanship that reflects our {new Date().getFullYear() - BUSINESS.founded}+ years of residential outdoor construction experience. Our paver installations carry a {BUSINESS.paverWarrantyYears}-year warranty because we stand behind the way we build.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Whether you're replacing an aging concrete patio, adding a retaining wall to reclaim a hillside, building a complete outdoor kitchen and entertainment area, or transforming your entire backyard into a luxury outdoor living space — hardscape is the foundation of a property that works as beautifully as it looks.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Hardscape Services</h2>
            <p className="text-muted-foreground mt-3 font-light">Each service is a dedicated specialty — not a side offering</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why Invest in Professional Hardscape</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            A well-built hardscape project changes how you use your property. It gives you defined spaces for cooking, dining, relaxing, and entertaining — without the limitations of a basic lawn or deteriorating concrete slab. It turns unused outdoor square footage into functional living space that you'll actually use year-round.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Professionally installed hardscape also increases property value. In the Bay Area's competitive real estate market, where outdoor living space is a premium amenity, a well-executed patio, retaining wall system, or outdoor kitchen can significantly enhance your home's market position. Buyers in communities like Atherton, Los Gatos, and Saratoga expect polished outdoor environments — and they're willing to pay for them.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            The return on investment for hardscape improvements consistently ranks among the highest of any home improvement category. And unlike interior renovations that may go in and out of style, quality hardscape construction has timeless appeal — a well-built stone patio looks as good in twenty years as it does the day it's finished.
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
        { question: "What types of hardscape projects do you handle?", answer: "We build paver patios, driveways, and walkways; structural and decorative retaining walls; custom outdoor kitchens and BBQ islands; pergolas and patio covers; fire pits and fire features; pool decks; and complete backyard remodels that integrate multiple hardscape elements into a cohesive outdoor living environment." },
        { question: "How long does a typical hardscape project take?", answer: "Most residential hardscape projects take 1–4 weeks depending on scope and complexity. A single patio or walkway might take 3–5 days, while a full backyard remodel with walls, kitchen, and patio could take 4–6 weeks. We provide detailed timelines in every proposal." },
        { question: "Do you handle permits, engineering, and grading?", answer: "Yes. For projects that require permits — retaining walls over 4 feet, outdoor kitchens with utility connections, attached pergolas — we manage the entire permitting process. We also coordinate structural engineering when needed and handle all grading and drainage work as part of the build." },
        { question: "What materials do you work with?", answer: "We use premium materials selected for the Bay Area climate: Techo-Bloc and Belgard interlocking pavers, natural travertine and bluestone, porcelain pavers, segmental retaining wall block, natural stone, granite and quartzite countertops, and western red cedar and aluminum for pergola structures." },
        { question: "How does your warranty work?", answer: `Our paver installations carry a ${BUSINESS.paverWarrantyYears}-year warranty on materials and workmanship. Other hardscape elements are covered under our standard craftsmanship guarantee. If anything related to our installation fails within the warranty period, we address it — no runaround.` },
      ]} />

      <CTABanner title="Plan Your Hardscape Project" subtitle="Request a complimentary consultation and receive a detailed, transparent proposal for your outdoor project." />
    </Layout>
  );
};

export default Hardscape;