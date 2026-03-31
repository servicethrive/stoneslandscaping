import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/constants";

const PaversVsConcrete = () => {
  useEffect(() => { document.title = "Pavers vs Concrete | Which Is Better for Bay Area Homes? | Stones Landscaping"; }, []);
  return (
    <Layout>
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Pavers vs Concrete</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto font-light">An honest, contractor-perspective comparison to help you choose the right surface material for your patio, driveway, or walkway project in the Bay Area.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Choosing Between Pavers and Concrete - A Contractor's Honest Take</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            This is one of the most common questions we hear from Bay Area homeowners: should I go with pavers or poured concrete? Both are solid, proven surface materials - and we install both regularly. But they perform differently over time, and the right choice depends on your project goals, aesthetic preferences, long-term maintenance expectations, and budget.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Here's what {new Date().getFullYear() - BUSINESS.founded}+ years of building patios, driveways, and walkways across San Jose, Atherton, Saratoga, and the South Bay has taught us: the best material is the one that matches both your expectations and your property's conditions. That sounds obvious, but we've seen plenty of homeowners choose the wrong material because they were making decisions based on initial cost alone - and regretting it three years later.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            The Bay Area presents a unique set of challenges for outdoor surfaces. Our expansive clay soils swell when wet and shrink when dry, which creates ground movement that rigid surfaces like poured concrete can't flex with. Our temperature swings - while mild compared to the Midwest - still create thermal expansion and contraction cycles throughout the year. And in hillside communities like Los Gatos and Saratoga, slope and drainage management add another layer of complexity.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Pavers handle these conditions naturally because each individual unit can move independently, absorbing ground shifts without cracking. Poured concrete, by contrast, is one continuous slab - and when the ground moves, the slab either cracks or heaves. That's not a flaw in the concrete; it's physics. Understanding that distinction is the starting point for making the right choice.
          </p>
        </div>
      </section>

      <ComparisonTable title="Feature Comparison" optionALabel="Pavers" optionBLabel="Poured Concrete" rows={[
        { feature: "Durability", optionA: "25–50+ years", optionB: "10–25 years" },
        { feature: "Crack Resistance", optionA: true, optionB: false },
        { feature: "Design Variety", optionA: "Extensive - colors, patterns, textures", optionB: "Limited - stamped or colored options" },
        { feature: "Repairability", optionA: "Individual paver replacement", optionB: "Full slab replacement" },
        { feature: "Drainage Options", optionA: true, optionB: false },
        { feature: "Initial Cost", optionA: "Higher", optionB: "Lower" },
        { feature: "Long-Term Value", optionA: "Higher - less maintenance, longer life", optionB: "Moderate - cracking reduces lifespan" },
        { feature: "Color Stability", optionA: "Color-through technology", optionB: "Surface only - fades over time" },
        { feature: "Installation Time", optionA: "3–7 days", optionB: "1–3 days + curing" },
        { feature: "Warranty (Stones)", optionA: "20 years", optionB: "Standard craftsmanship" },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Recommendation</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            For most residential patios, walkways, pool decks, and outdoor living areas in the Bay Area, pavers are the stronger long-term investment. They handle our soil movement without cracking, offer virtually unlimited design flexibility, drain better with permeable options, and can be individually replaced if ever damaged by equipment or tree roots - without tearing up the entire surface. Our {BUSINESS.paverWarrantyYears}-year paver warranty reflects that confidence.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Poured concrete remains a solid choice for driveways, utility slabs, and projects where cost efficiency is the primary deciding factor. A well-poured concrete driveway with proper reinforcement and control joints can perform reliably for 15–20 years in Bay Area conditions - and stamped or colored concrete adds visual interest at a lower cost than premium pavers.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            We install both - and we have no financial incentive to push one over the other. During your consultation, we'll look at your specific project, your property conditions, and your priorities, and recommend the material that makes the most sense for your situation. That's how we've earned {BUSINESS.googleReviews}+ five-star Google reviews - by being honest about what works.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/pavers" className="text-sm font-medium text-primary hover:underline tracking-wide">Learn about our paver services →</Link>
            <Link to="/concrete-driveways" className="text-sm font-medium text-primary hover:underline tracking-wide">Learn about concrete driveways →</Link>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "Are pavers more expensive than concrete?", answer: "Yes - pavers typically cost more upfront due to the materials and the more labor-intensive installation process. However, pavers last significantly longer, require less maintenance, and don't need full replacement when damaged. When you factor in lifetime costs, pavers often cost less over 20+ years than concrete that needs to be replaced." },
        { question: "Do stamped concrete patios crack?", answer: "Stamped concrete is still poured concrete - it's susceptible to the same cracking issues. Ground movement, tree roots, freeze-thaw cycles, and settling can all cause cracks. Unlike pavers, you can't replace individual sections - a major crack typically requires replacing the entire slab to maintain the pattern." },
        { question: "Which is better for driveways specifically?", answer: "Both work well for driveways. Concrete is the more traditional and cost-effective choice for standard driveways. Paver driveways offer a more distinctive look and handle ground movement better, but cost more. For high-end properties where curb appeal is a priority, paver driveways deliver a luxury appearance that concrete can't match." },
        { question: "Can you convert a concrete patio to pavers?", answer: "Yes - we regularly remove old concrete patios and replace them with paver installations. The demo process adds cost, but it also gives us the opportunity to correct any base or drainage issues that may have existed under the old slab. Many of our most dramatic before-and-after transformations are concrete-to-paver conversions." },
      ]} />

      <CTABanner title="Not Sure Which Material Is Right?" subtitle="Request a consultation and we'll recommend the best option based on your specific project, property, and budget." />
    </Layout>
  );
};
export default PaversVsConcrete;