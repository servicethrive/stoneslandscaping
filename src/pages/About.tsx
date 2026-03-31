import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TeamBlock from "@/components/sections/TeamBlock";
import WarrantyBlock from "@/components/sections/WarrantyBlock";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Stones Landscaping Inc. | Bay Area Landscaping Contractor Since 2017";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="About Stones Landscaping"
        subtitle="A Bay Area landscaping and hardscape contractor built on hands-on experience, clear communication, and quality craftsmanship. Serving San Jose and surrounding communities since 2017."
        backgroundImage={IMAGES.heroAbout}
        primaryCTA={{ text: "Request a Free Estimate", link: "/contact" }}
      />

      <TeamBlock />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">What Sets Us Apart</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            There are a lot of landscaping contractors in the Bay Area. What makes {BUSINESS.name} different isn't a gimmick — it's how we run projects. Every project gets the same process: a thorough on-site consultation, a clear and detailed proposal, a well-organized build with real communication, and a final walkthrough before we consider the job done.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "No-Surprise Proposals", desc: "You'll receive a clear scope, timeline, and price before any work begins. We don't pad invoices or add surprise charges." },
              { title: "Responsive Communication", desc: "We answer calls and messages promptly. Your project manager keeps you updated at every phase — no chasing for answers." },
              { title: "Design Capability", desc: "For qualifying projects, we offer 2D and 3D renderings so you can see the finished result before construction starts." },
              { title: "Experienced Crews", desc: "We run trained, full-time crews — not day laborers. Our team has the skills and equipment to handle complex residential builds." },
            ].map((item) => (
              <div key={item.title} className="border rounded-lg p-5">
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Licensing & Credentials</h2>
          <div className="space-y-3">
            {[
              `California Contractor License #${BUSINESS.license} — Active`,
              BUSINESS.licenseClassifications,
              `${BUSINESS.googleReviews} Five-Star Google Reviews`,
              `${BUSINESS.yelpReviews} Five-Star Yelp Reviews`,
              "Fully Licensed and Insured",
              "Operating Since 2017",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WarrantyBlock />

      <CTABanner title="Let's Talk About Your Project" subtitle="Schedule a free consultation and see how we work." />
    </Layout>
  );
};

export default About;
