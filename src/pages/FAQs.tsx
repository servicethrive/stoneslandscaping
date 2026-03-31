import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";

const faqs = [
  { question: "How do I get started with a project?", answer: "Call us at (408) 204-8418 or submit an estimate request through our contact page. We'll ask a few questions and schedule a free on-site consultation." },
  { question: "Do you provide free estimates?", answer: "Yes. Every project starts with a free on-site consultation. After the visit, you'll receive a detailed written proposal within 48 hours." },
  { question: "What areas do you serve?", answer: "We serve San Jose, Atherton, Los Gatos, Saratoga, Campbell, Santa Clara, and select Bay Area communities. Contact us to confirm availability in your area." },
  { question: "Are you licensed and insured?", answer: "Yes. We hold California Contractor License #1032828 with classifications C27 (Landscaping) and C-61/D06 (Concrete Related Services). We are fully insured." },
  { question: "What warranties do you offer?", answer: "We offer a 21-year warranty on paver installations and a 90-day warranty on landscaping projects covering plants and materials." },
  { question: "Do you offer design services?", answer: "Yes. For qualifying projects, we provide 2D and 3D design renderings so you can visualize the finished result before construction begins." },
  { question: "How long do projects typically take?", answer: "Timelines vary by project type and scope. Paver patios: 3–7 days. Landscaping: 1–3 weeks. Full outdoor renovations: 3–6 weeks. We provide estimated timelines in every proposal." },
  { question: "Do you handle permits?", answer: "Yes. For projects that require permits, we assess requirements during the consultation and manage the permitting process." },
  { question: "Can I see examples of your work?", answer: "Visit our Gallery page to see project examples. We'll also share relevant project photos during your consultation." },
  { question: "Do you offer financing?", answer: "Financing options are available for qualifying projects and applicants. Ask about current availability during your consultation." },
  { question: "What happens if I'm not satisfied with the work?", answer: "We schedule a final walkthrough at the end of every project. If anything doesn't meet your expectations, we address it before considering the job complete. Our warranties provide additional protection after project completion." },
  { question: "Do you do maintenance or lawn care?", answer: "We focus on design-build projects — installations, renovations, and construction. We don't offer ongoing maintenance or lawn care services." },
];

const FAQs = () => {
  useEffect(() => { document.title = "Frequently Asked Questions | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">Answers to common questions about our services, process, and what to expect when working with Stones Landscaping.</p>
        </div>
      </section>
      <FAQAccordion faqs={faqs} title="Common Questions" />
      <CTABanner title="Still Have Questions?" subtitle="Contact us directly — we're happy to answer anything about your specific project." />
    </Layout>
  );
};
export default FAQs;
