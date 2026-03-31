import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import DesignProcessBlock from "@/components/sections/DesignProcessBlock";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";

const DesignProcess = () => {
  useEffect(() => {
    document.title = "2D/3D Design Process | Stones Landscaping Inc. | Visualize Before You Build";
  }, []);

  return (
    <Layout>
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Design Process</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            See your outdoor project in 2D and 3D before construction begins. Our design process removes guesswork and gives you confidence in the final result.
          </p>
        </div>
      </section>

      <DesignProcessBlock />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">What You Receive</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              For qualifying projects, our design phase includes a complete visual package that shows you exactly what your finished outdoor space will look like. This typically includes a 2D site plan with dimensions, material callouts, and layout details, plus 3D renderings that give you a realistic perspective of the finished project.
            </p>
            <p>
              This visual approach helps you make confident decisions about materials, colors, layout, and features before any construction starts. It also makes it easier to share the plan with family members, HOAs, or anyone else involved in the decision.
            </p>
            <p>
              Design services are included for projects that meet a minimum scope threshold. During your initial consultation, we'll discuss whether your project qualifies and what the design deliverables will include.
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps
        title="Design Workflow"
        steps={[
          { title: "On-Site Consultation", description: "We visit your property, take detailed measurements, photograph the space, and discuss your goals, preferences, and budget range." },
          { title: "Concept Development", description: "Our team creates initial layout concepts based on the site evaluation, your input, and best practices for your specific property conditions." },
          { title: "2D/3D Renderings", description: "You receive visual renderings showing the proposed design from multiple angles. We review together, gather feedback, and make revisions." },
          { title: "Final Approval", description: "Once you're satisfied with the design, we finalize the scope, materials, and timeline — and transition into the build phase." },
        ]}
      />

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Design Matters</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Skipping the design phase is the most common mistake homeowners make when hiring a contractor. Without a clear visual plan, you're relying on verbal descriptions and assumptions — which is how projects end up looking different from what you imagined.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our design process eliminates that risk. You see the materials, the proportions, the flow, and the finished look before we pour a single bag of base material. Changes are easy on paper — they're expensive on the job site.
          </p>
        </div>
      </section>

      <CTABanner title="Start With a Design Consultation" subtitle="Schedule a free on-site visit and find out if your project qualifies for 2D/3D design." />
    </Layout>
  );
};

export default DesignProcess;
