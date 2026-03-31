import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const OutdoorKitchens = () => {
  useEffect(() => {
    document.title = "Outdoor Kitchen Construction San Jose | Custom Design & Build | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Custom Outdoor Kitchens for Bay Area Living"
        subtitle="Design and build a fully functional outdoor kitchen — grills, countertops, storage, and entertainment features tailored to your space and lifestyle."
        backgroundImage={IMAGES.outdoorKitchen}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Outdoor Kitchens Built for Year-Round Use</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Bay Area's mild climate makes outdoor kitchens one of the best investments for homeowners who enjoy cooking, entertaining, or simply spending more time outside. A well-designed outdoor kitchen extends your living space, creates a natural gathering point, and adds significant value to your home.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            At {BUSINESS.name}, we design and build custom outdoor kitchens from the ground up. Every kitchen we construct is tailored to your property, cooking habits, and entertainment needs — not pulled from a catalog. We handle the structural build, countertops, utility connections, and finishing details so the result is a space you'll actually use, not just look at.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From compact grilling stations to full outdoor kitchen islands with built-in refrigeration and bar seating, we build kitchens that match both your budget and your vision.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Features & Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Built-in gas or charcoal grills", "Stone or granite countertops", "Outdoor refrigerators and ice makers",
              "Bar seating and serving areas", "Pizza ovens", "Storage cabinets and drawers",
              "Sinks with plumbing connections", "Lighting and electrical", "Pergola or shade cover integration",
              "Gas line and utility hookups",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Planning Your Outdoor Kitchen</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Outdoor kitchen projects require more planning than a standard patio or landscape install. Layout, utility access, material selection, traffic flow, and weather exposure all need to be considered before construction begins. That's why we start every outdoor kitchen project with a thorough on-site consultation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            During the consultation, we evaluate your space, discuss how you cook and entertain, review utility access points, and outline a scope that fits your budget. For qualifying projects, we can provide 2D or 3D design renderings so you can see exactly what your kitchen will look like before we break ground.
          </p>
        </div>
      </section>

      <ProcessSteps title="Outdoor Kitchen Build Process" steps={[
        { title: "Consultation & Layout", description: "We assess your space, review utility access, and discuss your cooking and entertainment needs." },
        { title: "Design & Materials", description: "Finalize the layout, countertop material, appliance placement, and overall design. Renderings available." },
        { title: "Construction", description: "Foundation, framing, stone/veneer work, countertop installation, utility connections, and finishing details." },
        { title: "Final Walkthrough", description: "We walk the completed kitchen with you, test all connections, and confirm everything meets your expectations." },
      ]} />

      <FAQAccordion faqs={[
        { question: "How much does an outdoor kitchen cost?", answer: "Outdoor kitchen costs vary widely based on size, materials, and features. We provide detailed proposals after on-site consultations so you know exactly what to expect." },
        { question: "Do I need a permit for an outdoor kitchen?", answer: "In most cases, yes — especially for gas, electrical, and plumbing connections. We assess permit requirements during the consultation and handle the process." },
        { question: "How long does construction take?", answer: "Most outdoor kitchens take 2–4 weeks to build, depending on complexity and material lead times." },
        { question: "What's the difference between an outdoor kitchen and a built-in BBQ?", answer: "A built-in BBQ is typically a grill set into a simple island. An outdoor kitchen includes countertops, storage, plumbing, and multiple cooking or prep features — it's a complete outdoor cooking and entertaining space." },
      ]} />

      <CTABanner title="Design Your Outdoor Kitchen" subtitle="Schedule a free consultation and get a custom plan for your outdoor kitchen project." />
    </Layout>
  );
};

export default OutdoorKitchens;
