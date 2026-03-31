import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/sections/CTABanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Financing = () => {
  useEffect(() => { document.title = "Financing Options | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Financing Options</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">Make your outdoor renovation project more accessible with flexible financing.</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Flexible Payment Options for Your Project</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">We understand that outdoor renovation projects are a significant investment. That's why we offer financing options to help qualified homeowners move forward with their projects without having to delay or compromise on scope.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">Financing is available for qualifying projects and applicants. During your consultation, ask about current financing availability and we'll walk you through the options.</p>
          <p className="text-muted-foreground mb-6 leading-relaxed">Details on specific financing terms, lender partnerships, and application processes will be shared during your project consultation. We're working to make this process as straightforward as possible.</p>
          <Button asChild><Link to="/contact">Inquire About Financing</Link></Button>
        </div>
      </section>
      <CTABanner title="Ready to Get Started?" subtitle="Contact us to discuss your project and financing options." dark={false} />
    </Layout>
  );
};
export default Financing;
