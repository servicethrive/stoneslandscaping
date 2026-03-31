import { useEffect } from "react";
import { Link } from "react-router-dom";
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
    document.title = "Landscaping Services San Jose | Design-Build Landscaping | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Design-Build Landscaping for Bay Area Homes"
        subtitle="Complete landscape design and installation — front yards, backyards, and full-property transformations. Thoughtfully planned, professionally built."
        backgroundImage={IMAGES.landscaping}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Full-Service Landscaping, Start to Finish</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Landscaping is more than planting a few shrubs and laying sod. A well-designed landscape changes how you experience your property — creating functional outdoor rooms, improving curb appeal, reducing maintenance, and adding real value to your home.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            At {BUSINESS.name}, we take a design-build approach to every landscaping project. That means we handle the entire process in-house: site evaluation, design concepts, material selection, irrigation planning, and full installation. You work with one team from start to finish, which means fewer miscommunications, faster timelines, and a cohesive result.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're looking to overhaul a tired front yard, convert a bare backyard into an outdoor living space, or install a low-maintenance landscape that looks great year-round, we build landscapes that are designed for the Bay Area climate and your specific property conditions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Front Yard Landscaping", desc: "Transform your home's first impression with structured planting, clean hardscape borders, and drought-tolerant design that fits the Bay Area aesthetic." },
              { title: "Backyard Landscaping", desc: "Create functional outdoor living areas with defined zones for dining, relaxation, play, and entertaining — all connected by thoughtful landscape design." },
              { title: "Low-Maintenance Landscapes", desc: "Designed for busy homeowners who want a beautiful yard without constant upkeep. Drought-tolerant plants, efficient irrigation, and smart material choices." },
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Landscaping Scope Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Custom planting plans", "Irrigation design and installation", "Sod and turf installation",
              "Mulch, gravel, and ground covers", "Tree and shrub planting", "Raised planters and garden beds",
              "Drainage solutions", "Grading and soil prep", "Artificial turf integration",
              "Hardscape coordination",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DesignProcessBlock />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Warranty</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every landscaping project we complete includes a {BUSINESS.landscapeWarrantyDays}-day warranty on plants and materials.
            If anything we installed doesn't perform as expected within that period, we'll address it. We also provide care
            instructions and watering schedules to help your new landscape establish properly.
          </p>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "Do you offer landscape design services?", answer: "Yes. We're a design-build company, which means we create the design and handle the installation. For qualifying projects, 2D/3D renderings are available." },
        { question: "What plants work best in the Bay Area?", answer: "We select plants suited to our Mediterranean climate — drought-tolerant natives, ornamental grasses, succulents, and select non-native species that thrive with minimal water." },
        { question: "How long does a landscaping project take?", answer: "Depending on scope, most residential landscaping projects take 1–3 weeks. Full-property renovations with hardscape may take 3–6 weeks." },
        { question: "Do you handle irrigation?", answer: "Yes. We design and install complete irrigation systems, including drip and sprinkler zones, smart controllers, and zone-specific scheduling." },
      ]} />

      <CTABanner title="Plan Your Landscape Renovation" subtitle="Schedule a free consultation and get a clear proposal for your landscaping project." />
    </Layout>
  );
};

export default Landscaping;
