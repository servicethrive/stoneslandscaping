import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";

const OurProcess = () => {
  useEffect(() => {
    document.title = "Our Process | How We Work | Stones Landscaping Inc.";
  }, []);

  return (
    <Layout>
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Every Stones Landscaping project follows a clear, proven process designed to keep your project organized, on budget, and on schedule from first call to final walkthrough.
          </p>
        </div>
      </section>

      <ProcessSteps
        title="Your Project, Step by Step"
        steps={[
          { title: "Initial Contact", description: "Reach out by phone, email, or our contact form. We'll ask a few questions about your project and schedule a free on-site consultation." },
          { title: "On-Site Consultation", description: "We visit your property, assess the space, discuss your goals, and take measurements. This is where we learn what you want and evaluate what's possible." },
          { title: "Proposal & Design", description: "You receive a detailed written proposal with scope, materials, timeline, and pricing. For qualifying projects, we include 2D/3D design renderings." },
          { title: "Project Build", description: "Once approved, our crew begins construction. We maintain a clean job site, communicate progress regularly, and stick to the agreed timeline." },
        ]}
      />

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">What to Expect During Construction</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Once construction begins, you'll have a clear point of contact for updates and questions. We believe that good communication is as important as good construction - you should never have to chase your contractor for a status update.
            </p>
            <p>
              Our crews arrive on time, keep the job site organized, and protect your property throughout the build. If anything comes up that requires a change to the plan, we discuss it with you before proceeding - no surprises, no unilateral decisions.
            </p>
            <p>
              At the end of every project, we schedule a final walkthrough where we review the completed work together. We address any remaining details, provide warranty documentation, and make sure you're completely satisfied before we consider the project complete.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">After Your Project</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Our relationship doesn't end when the crew leaves. You'll receive warranty documentation, care instructions for any landscaping or hardscape, and our contact information for any future questions or needs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you have additional phases planned or want to add to your project down the road, we keep your project records on file so future work can be coordinated seamlessly with what was already built.
          </p>
        </div>
      </section>

      <CTABanner title="Start the Conversation" subtitle="Call us or request a free estimate online. The first step is always a simple conversation about your project." />
    </Layout>
  );
};

export default OurProcess;
