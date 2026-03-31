import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import DesignProcessBlock from "@/components/sections/DesignProcessBlock";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const Landscaping = () => {
  useEffect(() => {
    document.title = "Luxury Landscaping San Jose | Design-Build Landscape Contractor | Stones Landscaping";
  }, []);

  const landscapeTypes = [
    { name: "Front Yard Landscaping", desc: "Transform your home's first impression with structured planting, clean hardscape borders, and drought-tolerant design that elevates curb appeal. In the Bay Area's competitive real estate market, your front yard is your property's handshake — make it count." },
    { name: "Backyard Living Landscapes", desc: "Create functional outdoor living areas with defined zones for dining, cooking, relaxation, and entertaining — all connected by thoughtful landscape design that feels intentional, not random." },
    { name: "Low-Maintenance Luxury", desc: "Designed for busy professionals who want a beautiful, polished landscape without constant upkeep. Drought-tolerant natives, efficient smart irrigation, and premium ground covers that look manicured year-round." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Design-Build Landscaping for Bay Area Homes"
        subtitle="Complete landscape design and installation — front yards, backyards, and full-property transformations. Thoughtfully planned for the Bay Area climate, professionally built to last."
        backgroundImage={IMAGES.landscaping}
      />
      <TrustBar />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Landscaping That Transforms How You Experience Your Property</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Landscaping is far more than planting a few shrubs and laying sod. A thoughtfully designed landscape changes how you experience your home every single day — it creates functional outdoor rooms, improves curb appeal, reduces long-term maintenance, and adds real, measurable value to your property. In the Bay Area, where outdoor living is a year-round lifestyle, your landscape is effectively additional living space.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            At {BUSINESS.name}, we take a design-build approach to every landscaping project. That means we handle the entire process in-house: site evaluation, design concepts, material selection, irrigation planning, grading, drainage, and full installation. You work with one team from start to finish, which means fewer miscommunications, faster timelines, and a cohesive result where every element — from the paver borders to the plant spacing to the irrigation zones — is coordinated.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            We've designed and built landscapes for properties across the Bay Area spectrum — from $1.5 million San Jose homes where a front yard renovation transforms the entire street presence, to $10–$20 million estates in Atherton and Hillsborough where the landscape needs to complement world-class architecture. The scope varies, but our approach doesn't: we start with your property's specific conditions, your lifestyle, and your vision — then we design a landscape that serves all three.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            One thing we've learned building landscapes in this climate: the Bay Area's Mediterranean weather — warm dry summers and cool wet winters — rewards certain plants and punishes others. We select species that are proven performers in our specific microclimate, which means your landscape looks healthy and vibrant in August heat just as it does after January rains. No seasonal die-off, no constant replacement, no wasted water on plants that shouldn't be here.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Whether you're looking to overhaul a tired front yard, convert a bare backyard into a complete outdoor living environment, or install a sophisticated low-maintenance landscape that looks polished year-round — we build landscapes that are designed for the Bay Area and built to perform.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What We Build</h2>
            <p className="text-muted-foreground mt-3 font-light">Every landscape project is custom-designed for your property and lifestyle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {landscapeTypes.map((item) => (
              <div key={item.name} className="bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Landscaping Scope</h2>
          <p className="text-muted-foreground mb-8 font-light leading-relaxed">
            We handle every element of your landscape — from soil preparation to final plant placement. Here's what's included in a typical project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Custom planting plans and plant procurement",
              "Smart irrigation design and installation",
              "Sod and natural turf installation",
              "Premium mulch, gravel, and ground covers",
              "Specimen tree and shrub planting",
              "Raised planters and garden beds",
              "Drainage solutions and French drains",
              "Grading, soil amendment, and site prep",
              "Artificial turf integration",
              "Hardscape coordination and borders",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DesignProcessBlock />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Landscape Warranty</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Every landscaping project we complete includes a {BUSINESS.landscapeWarrantyDays}-day warranty on plants and materials. If anything we installed doesn't perform as expected within that period, we'll address it — no runaround, no excuses. We also provide detailed care instructions, watering schedules, and seasonal maintenance guidance to help your new landscape establish properly and thrive long-term.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            We stand behind our work because we know how it's built. When the soil prep is right, the irrigation is dialed in, and the plants are matched to the conditions — the landscape performs. And when it does, the warranty is just a piece of paper you never need to use.
          </p>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "Do you offer landscape design services?", answer: "Yes — we're a design-build firm, meaning we create the design and handle the full installation with one team. For qualifying projects, we provide professional 2D and 3D renderings so you can visualize your new landscape before we break ground." },
        { question: "What plants work best in the Bay Area?", answer: "We select plants suited to our Mediterranean climate — drought-tolerant California natives, ornamental grasses, succulents, flowering perennials, and select non-native species that thrive with efficient irrigation. Every plant we install is chosen for your property's specific sun exposure, soil type, and microclimate conditions." },
        { question: "How long does a landscaping project take?", answer: "Depending on scope, most residential landscaping projects take 1–3 weeks. Full-property renovations that include hardscape integration, drainage work, and irrigation may take 3–6 weeks. We provide a detailed timeline before starting work." },
        { question: "Do you handle irrigation systems?", answer: "Yes. We design and install complete irrigation systems, including drip and spray zones, smart WiFi controllers, rain sensors, and zone-specific scheduling optimized for the Bay Area's seasonal patterns. Efficient irrigation is essential to long-term landscape health in our climate." },
        { question: "Can you coordinate landscaping with hardscape work?", answer: "Absolutely — and we strongly recommend it. Building the hardscape and landscape together ensures proper drainage integration, clean transitions between surfaces and plantings, and a cohesive overall design. Most of our projects include both hardscape and landscape elements." },
      ]} />

      <CTABanner title="Plan Your Landscape Renovation" subtitle="Request a complimentary consultation and receive a clear, detailed proposal for your landscaping project." />
    </Layout>
  );
};

export default Landscaping;