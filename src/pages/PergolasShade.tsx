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

const PergolasShade = () => {
  useEffect(() => {
    document.title = "Pergola Builder San Jose | Custom Pergolas & Patio Covers | Stones Landscaping";
  }, []);

  const pergolaTypes = [
    { name: "Freestanding Pergolas", desc: "Independent structures that define outdoor rooms anywhere on your property. Ideal for creating a dining area, lounge space, or focal point in the middle of a backyard without connecting to your home's structure." },
    { name: "Attached Patio Covers", desc: "Connected directly to your home, extending your indoor living space seamlessly outdoors. Perfect for shading a patio adjacent to your kitchen or living room - the most popular choice among our Bay Area clients." },
    { name: "Modern Aluminum Structures", desc: "Sleek, low-maintenance aluminum pergolas with clean lines and contemporary styling. Available with motorized louvered roof systems that let you control sun and rain exposure with the touch of a button." },
    { name: "Cedar & Redwood Pergolas", desc: "Classic wood pergolas built with premium, naturally rot-resistant lumber. Cedar and redwood develop a beautiful patina over time and complement both traditional and transitional architectural styles." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Custom Pergolas & Shade Structures"
        subtitle="Architectural pergolas and patio covers that extend your outdoor living season, add vertical interest, and create defined spaces for dining, lounging, and entertaining."
        backgroundImage={IMAGES.hardscape}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Pergolas That Define Your Outdoor Living Experience</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            A pergola transforms an open patio or deck into a defined outdoor room. It provides filtered shade, creates vertical architectural interest, and establishes a focal point that anchors your entire outdoor living space.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            In the Bay Area, where outdoor living is a year-round reality, pergolas solve a practical problem: how to enjoy your patio comfortably during the warm months without retreating indoors.
          </p>
        </div>
      </section>

      <ZigZagSection items={[
        {
          title: "Integrated Design, Not Afterthoughts",
          text: `At ${BUSINESS.name}, we build custom pergolas and shade structures as part of larger outdoor renovation projects. Our pergola builds are designed and integrated with the surrounding hardscape, landscape, and outdoor features - not bolted on as afterthoughts. We recently built a cedar pergola over a complete outdoor kitchen for a homeowner in Los Gatos with recessed LED lighting, a ceiling fan, and electrical outlets.`,
          image: IMAGES.zigzag3,
        },
        {
          title: "Premium Materials & Engineering",
          text: "We work with premium materials: western red cedar, redwood, powder-coated aluminum, and engineered wood products. Every pergola we build includes proper post footings, engineered connections, and structural hardware rated for the loads and wind conditions in your area.",
          image: IMAGES.zigzag1,
        },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Pergola & Shade Structure Styles</h2>
            <p className="text-muted-foreground mt-3 font-light">Built to complement your home's architecture and outdoor lifestyle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pergolaTypes.map((p) => (
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Pergola Applications</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            Pergolas and shade structures work across nearly every outdoor setting. Here's where Bay Area homeowners use them most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Patio covers for outdoor dining",
              "Shade over outdoor kitchen areas",
              "Pool-side cabana structures",
              "Garden walkway arbors",
              "Hot tub and spa enclosures",
              "Louvered roof systems for adjustable shade",
              "Pergolas with integrated string or LED lighting",
              "Fire pit seating area covers",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps title="Pergola Build Process" steps={[
        { title: "Consultation & Design", description: "We visit your property, discuss your shade needs and aesthetic preferences, and assess structural requirements including post footing locations." },
        { title: "Material & Style Selection", description: "Choose between cedar, redwood, aluminum, or engineered wood. Select rafter spacing, post style, and optional features like lighting or fans." },
        { title: "Construction", description: "Post footings, structural framing, rafter and beam installation, and all finishing details including stain, paint, or powder coating." },
        { title: "Final Details & Walkthrough", description: "Lighting, electrical, and fan installation if applicable. Final inspection and walkthrough to confirm everything meets your vision." },
      ]} />

      <FAQAccordion faqs={[
        { question: "Do I need a permit for a pergola in San Jose?", answer: "It depends on the size and whether the structure is attached to your home. Many freestanding pergolas under a certain square footage may not require permits, but attached structures and larger builds typically do. We assess permit requirements during the consultation and handle the process if needed." },
        { question: "What's the best pergola material for the Bay Area climate?", answer: "Western red cedar and aluminum are the two most popular choices. Cedar offers a warm, natural aesthetic and is naturally rot-resistant, though it requires periodic sealing. Aluminum is virtually maintenance-free and works well for modern or contemporary homes. We help you choose based on your style, maintenance tolerance, and budget." },
        { question: "How much shade does a pergola provide?", answer: "That depends on rafter spacing and orientation. A traditional open-rafter pergola provides filtered, dappled shade - roughly 50-70% coverage depending on the time of day. For full shade, we offer louvered roof systems or solid patio covers that provide complete coverage while still feeling open." },
        { question: "Can you add a pergola to an existing patio?", answer: "Yes - we regularly add pergolas to existing paver patios, concrete slabs, and deck surfaces. We install post footings adjacent to or through the existing surface, depending on the situation. Adding a pergola is one of the most impactful upgrades you can make to an existing outdoor space." },
        { question: "How long does a pergola last?", answer: "Cedar and redwood pergolas, when properly maintained with periodic sealing, last 20-30+ years. Aluminum pergolas can last a lifetime with virtually no maintenance. The structural connections and post footings we use are rated for decades of performance in Bay Area conditions." },
      ]} />

      <CTABanner title="Add a Pergola to Your Outdoor Space" subtitle="Request a consultation and let's design a shade structure that transforms how you use your backyard." />
    </Layout>
  );
};

export default PergolasShade;