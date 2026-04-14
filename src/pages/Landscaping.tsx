import { usePageMeta } from "@/hooks/use-page-meta";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ZigZagSection from "@/components/sections/ZigZagSection";
import { IMAGES, BUSINESS, SERVICES } from "@/lib/constants";
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import sodLandscape from "@/assets/projects/sod_landscape_with_circle_accent.jpg";
import lowMaintenanceLandscape from "@/assets/projects/Low_maintenance_Landscape.jpg";
import { CheckCircle } from "lucide-react";

const landscapeTypes = [
  { name: "Front Yard Landscaping", desc: "Transform your home's first impression with structured planting, clean hardscape borders, and drought-tolerant design that elevates curb appeal." },
  { name: "Backyard Living Landscapes", desc: "Create functional outdoor living areas with defined zones for dining, cooking, relaxation, and entertaining - all connected by thoughtful landscape design." },
  { name: "Low-Maintenance Luxury", desc: "Designed for busy professionals who want a beautiful, polished landscape without constant upkeep. Drought-tolerant natives, efficient smart irrigation, and premium ground covers." },
];

const Landscaping = () => {
  usePageMeta(
    "Luxury Landscaping San Jose | Design-Build Landscape Contractor | Stones Landscaping",
    "Luxury landscaping contractor in San Jose. Full design-build services for Bay Area homeowners. Drought-tolerant, custom plantings & more."
  );

  const svc = SERVICES.find(s => s.path === "/landscaping")!;
  const faqs = [
    { question: "Do you offer landscape design services?", answer: "Yes - we're a design-build firm. For qualifying projects, we provide professional 2D and 3D renderings so you can visualize your new landscape before we break ground." },
    { question: "What plants work best in the Bay Area?", answer: "We select plants suited to our Mediterranean climate - drought-tolerant California natives, ornamental grasses, succulents, flowering perennials, and select non-native species that thrive with efficient irrigation." },
    { question: "How long does a landscaping project take?", answer: "Most residential landscaping projects take 1–3 weeks. Full-property renovations that include hardscape integration and drainage may take 3–6 weeks." },
    { question: "Do you handle irrigation systems?", answer: "Yes. We design and install complete irrigation systems, including drip and spray zones, smart WiFi controllers, rain sensors, and zone-specific scheduling." },
    { question: "Can you coordinate landscaping with hardscape work?", answer: "Absolutely - and we strongly recommend it. Building the hardscape and landscape together ensures proper drainage integration and a cohesive overall design." },
  ];

  return (
    <Layout>
      <StructuredData data={getServiceSchema(svc.title, svc.description, svc.image, svc.path)} />
      <StructuredData data={getBreadcrumbSchema([{ name: "Landscaping", path: "/landscaping" }])} />
      <StructuredData data={getFAQSchema(faqs)} />
      <HeroSection
        title="Design-Build Landscaping in San Jose"
        subtitle="Complete landscape design and installation - front yards, backyards, and full-property transformations. Thoughtfully planned for the San Jose climate, professionally built to last."
        backgroundImage={IMAGES.landscaping}
      />
      <TrustBar />

      {/* Intro — bg-background */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Landscaping That Transforms How You Experience Your Property</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Landscaping is far more than planting a few shrubs and laying sod. A thoughtfully designed landscape changes how you experience your home every single day - it creates functional outdoor rooms, improves curb appeal, reduces long-term maintenance, and adds real, measurable value to your property.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            At {BUSINESS.name}, we take a design-build approach to every landscaping project. That means we handle the entire process in-house: site evaluation, design concepts, material selection, irrigation planning, grading, drainage, and full installation. Every landscaping project we complete includes a {BUSINESS.landscapeWarrantyDays}-day warranty on plants and materials.
          </p>
        </div>
      </section>

      {/* ZigZag — alternating bg */}
      <ZigZagSection items={[
        {
          title: "Every Property, Every Scale",
          text: "We've designed and built landscapes for properties across the Bay Area spectrum - from San Jose homes where a front yard renovation transforms the entire street presence, to grand estates in Atherton and Hillsborough where the landscape needs to complement world-class architecture. The scope varies, but our approach doesn't: we start with your property's specific conditions, your lifestyle, and your vision.",
          image: sodLandscape,
        },
        {
          title: "Climate-Smart Plant Selection",
          text: "One thing we've learned building landscapes in this climate: the Bay Area's Mediterranean weather - warm dry summers and cool wet winters - rewards certain plants and punishes others. We select species that are proven performers in our specific microclimate, which means your landscape looks healthy and vibrant in August heat just as it does after January rains.",
          image: lowMaintenanceLandscape,
        },
      ]} />

      {/* Card grid — bg-brand-cream */}
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

      {/* Checklist — bg-background */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Landscaping Scope</h2>
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

      {/* ProcessSteps — bg-brand-light-grey (component default) */}
      <ProcessSteps title="Our Landscaping Process" steps={[
        { title: "Consultation & Site Evaluation", description: "We assess your property's soil, sun exposure, drainage, and existing conditions - then discuss your vision and lifestyle needs." },
        { title: "Design & Plant Selection", description: "Receive a detailed landscape plan with plant selections, irrigation layout, and material choices. 2D/3D renderings available for qualifying projects." },
        { title: "Professional Installation", description: "Our crew handles grading, irrigation, planting, mulching, and all finishing details with clean job sites and clear communication." },
        { title: "Final Walkthrough & Care Guide", description: `Walk the finished landscape with us, receive your ${BUSINESS.landscapeWarrantyDays}-day warranty, and get a detailed care and watering guide.` },
      ]} />

      {/* FAQ — bg-background */}
      <FAQAccordion faqs={faqs} />

      <CTABanner title="Plan Your Landscape Renovation" subtitle="Request a complimentary consultation and receive a clear, detailed proposal for your landscaping project." />
    </Layout>
  );
};

export default Landscaping;
