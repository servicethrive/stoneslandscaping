import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProcessSteps from "@/components/sections/ProcessSteps";
import DesignProcessBlock from "@/components/sections/DesignProcessBlock";
import CTABanner from "@/components/sections/CTABanner";

const OurProcess = () => {
  useEffect(() => {
    document.title = "Our Process | How We Work | Stones Landscaping Inc.";
  }, []);

  return (
    <Layout>
      <section className="bg-brand-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            From the first phone call to the final walkthrough, every Stones Landscaping project follows a clear, proven process, including 2D/3D design for qualifying projects.
          </p>
        </div>
      </section>

      <ProcessSteps
        title="Your Project, Step by Step"
        steps={[
          { title: "Initial Contact", description: "Reach out by phone, email, or our contact form. We'll ask a few questions about your project and schedule a free on-site consultation." },
          { title: "On-Site Consultation", description: "We visit your property, take detailed measurements, photograph the space, and discuss your goals, preferences, and budget range." },
          { title: "Design & Proposal", description: "You receive a detailed written proposal with scope, materials, timeline, and pricing. For qualifying projects, we include 2D site plans and 3D renderings so you can visualize the finished result." },
          { title: "Project Build", description: "Once approved, our crew begins construction. We maintain a clean job site, communicate progress regularly, and stick to the agreed timeline." },
          { title: "Final Walkthrough", description: "We walk the finished project together, confirm every detail meets your expectations, and hand over your warranty documentation." },
        ]}
      />

      <DesignProcessBlock />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-6">What You Receive</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed font-light text-lg">
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

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-6">What to Expect During Construction</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed font-light text-lg">
            <p>
              Once construction begins, you'll have a clear point of contact for updates and questions. We believe that good communication is as important as good construction. You should never have to chase your contractor for a status update.
            </p>
            <p>
              Our crews arrive on time, keep the job site organized, and protect your property throughout the build. If anything comes up that requires a change to the plan, we discuss it with you before proceeding. No surprises, no unilateral decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-6">After Your Project</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed font-light text-lg">
            <p>
              Our relationship doesn't end when the crew leaves. You'll receive warranty documentation, care instructions for any landscaping or hardscape, and our contact information for any future questions or needs.
            </p>
            <p>
              If you have additional phases planned or want to add to your project down the road, we keep your project records on file so future work can be coordinated seamlessly with what was already built.
            </p>
          </div>
        </div>
      </section>

      <CTABanner title="Start the Conversation" subtitle="Call us or request a free estimate online. The first step is always a simple conversation about your project." />
    </Layout>
  );
};

export default OurProcess;
