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

const OutdoorKitchens = () => {
  useEffect(() => {
    document.title = "Outdoor Kitchen Contractor San Jose | Custom BBQ Islands & Kitchens | Stones Landscaping";
  }, []);

  const kitchenStyles = [
    { name: "Custom BBQ Islands", desc: "Stone-veneer islands with built-in grills, side burners, and prep space. The foundation of most outdoor kitchens." },
    { name: "Full Outdoor Kitchens", desc: "Complete cooking and entertaining stations with countertops, sinks, refrigeration, storage, and multiple cooking zones." },
    { name: "Pizza Oven Installations", desc: "Wood-fired or gas pizza ovens integrated into your outdoor kitchen or installed as standalone features." },
    { name: "Bar & Entertainment Areas", desc: "Dedicated bar seating, beverage centers, and serving counters designed for hosting." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Custom Outdoor Kitchens for Bay Area Living"
        subtitle="Design and build a fully functional outdoor kitchen - custom BBQ islands, stone countertops, pizza ovens, and complete entertainment areas tailored to your space and lifestyle."
        backgroundImage={IMAGES.outdoorKitchen}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Outdoor Kitchens Built for How You Actually Live</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            The Bay Area's mild climate gives you something most of the country can only dream of - the ability to cook and entertain outdoors nearly year-round. A custom outdoor kitchen transforms your backyard from unused green space into the most popular room in your home.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            At {BUSINESS.name}, we design and build custom outdoor kitchens from the ground up. Every kitchen we construct is tailored to your property, your cooking habits, and how you actually entertain - not pulled from a catalog.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Layout, Workflow & Integration",
          text: "Here's what separates a great outdoor kitchen from a mediocre one: it's not the appliances - it's the layout, the workflow, and the integration with the rest of your outdoor space. We think about where the cook stands relative to guests, how smoke and heat travel, where utilities connect, and how the kitchen relates to your patio, seating areas, and landscape.",
          image: IMAGES.zigzag4,
        },
        {
          title: "Complete Build, Every Detail",
          text: "We handle every aspect of the build: structural foundation, steel or block framing, stone veneer or tile finishing, granite or quartzite countertops, gas and electrical connections, plumbing for sinks, and integrated lighting. Our outdoor kitchens are built with the same attention to detail you'd expect from an interior kitchen remodel.",
          image: IMAGES.zigzag1,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Outdoor Kitchen Styles</h2>
            <p className="text-muted-foreground mt-3 font-light">From compact grilling stations to full chef's kitchens</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kitchenStyles.map((s) => (
              <div key={s.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Features & Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Built-in gas or charcoal grills",
              "Stone, granite, or quartzite countertops",
              "Outdoor refrigerators and ice makers",
              "Bar seating and serving counters",
              "Wood-fired or gas pizza ovens",
              "Weatherproof storage cabinets and drawers",
              "Sinks with hot and cold water plumbing",
              "Integrated landscape lighting and electrical",
              "Pergola or shade cover integration",
              "Gas line and utility hookups",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Outdoor Kitchen Build Process" steps={[
        { title: "Consultation & Layout", description: "We assess your space, review utility access points, discuss your cooking style and entertainment needs." },
        { title: "Design & Materials", description: "Finalize the layout, countertop material, appliance selection, and veneer style." },
        { title: "Construction", description: "Foundation, structural framing, stone or tile finishing, countertop installation, utility connections, and all finishing details." },
        { title: "Final Walkthrough", description: "We test every connection, walk the completed kitchen with you, and confirm every detail meets your expectations." },
      ]} />

      <FAQAccordion faqs={[
        { question: "How much does an outdoor kitchen cost in the Bay Area?", answer: "Costs vary widely based on size, materials, appliance selection, and utility requirements. We provide detailed, transparent proposals after every on-site consultation." },
        { question: "Do I need a permit for an outdoor kitchen in San Jose?", answer: "In most cases, yes - especially for gas, electrical, and plumbing connections. We handle the entire permitting process." },
        { question: "How long does outdoor kitchen construction take?", answer: "Most outdoor kitchens take 2–4 weeks to build, depending on complexity. Larger projects may extend to 4–6 weeks." },
        { question: "What countertop materials work best outdoors?", answer: "Granite, quartzite, and certain porcelain slabs are the most popular choices for Bay Area outdoor kitchens." },
        { question: "Can you build an outdoor kitchen as part of a larger backyard remodel?", answer: "Absolutely - and that's how most of our outdoor kitchen projects happen. We frequently integrate kitchens with paver patios, pergolas, fire pits, and landscape plantings." },
      ]} />

      <CTABanner title="Design Your Dream Outdoor Kitchen" subtitle="Request a complimentary consultation and let's design an outdoor kitchen that matches how you live and entertain." />
    </Layout>
  );
};

export default OutdoorKitchens;
