import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ComparisonTable from "@/components/sections/ComparisonTable";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/constants";

const ArtificialTurfVsSod = () => {
  useEffect(() => { document.title = "Artificial Turf vs Sod | Bay Area Cost & Performance Comparison | Stones Landscaping"; }, []);
  return (
    <Layout>
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Artificial Turf vs Natural Sod</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto font-light">A practical comparison of long-term costs, maintenance demands, water savings, and real-world performance for Bay Area homeowners.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">The Real Cost of Your Lawn — Beyond the Sticker Price</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            Both artificial turf and natural sod create green, usable lawn areas — but they differ dramatically in ongoing maintenance requirements, water usage, long-term costs, and environmental impact. In the Bay Area, where water rates continue to climb, drought restrictions are a recurring reality, and weekend time is precious, this comparison is especially relevant for homeowners weighing their options.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            At {BUSINESS.name}, we install both artificial turf and natural sod — so we don't have a financial incentive to push one over the other. What we do have is years of experience seeing how both perform across hundreds of Bay Area properties, and that gives us a practical perspective that goes beyond marketing claims from turf manufacturers or lawn care companies.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Here's the reality: natural sod costs less upfront, but it demands continuous investment in water, mowing, fertilizing, aerating, overseeding, and pest management. In the Bay Area's Mediterranean climate — dry summers that stress grass and wet winters that encourage disease — maintaining a healthy natural lawn requires real commitment. Many homeowners start with great intentions and find themselves three years later with a patchy, water-hungry lawn they resent maintaining.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Artificial turf costs more upfront but eliminates virtually all ongoing maintenance costs. No water bill, no mowing equipment, no fertilizer, no seasonal treatments. For busy Bay Area professionals — especially in communities like San Jose, Los Gatos, and Saratoga where homeowners value their time — turf often represents a lifestyle upgrade as much as a landscape one.
          </p>
        </div>
      </section>

      <ComparisonTable title="Feature Comparison" optionALabel="Artificial Turf" optionBLabel="Natural Sod" rows={[
        { feature: "Water Required", optionA: "None", optionB: "Regular irrigation year-round" },
        { feature: "Mowing", optionA: "Never", optionB: "Weekly during growing season" },
        { feature: "Fertilizing", optionA: "Never", optionB: "3–4 times per year" },
        { feature: "Lifespan", optionA: "15–20 years", optionB: "Ongoing with constant maintenance" },
        { feature: "Initial Cost", optionA: "Higher ($8–15/sq ft installed)", optionB: "Lower ($1–3/sq ft installed)" },
        { feature: "Annual Maintenance Cost", optionA: "Near zero", optionB: "$1,000–3,000+ (water, mowing, treatments)" },
        { feature: "Appearance Year-Round", optionA: "Always green and uniform", optionB: "Seasonal variation — brown in drought" },
        { feature: "Pet-Friendly", optionA: true, optionB: true },
        { feature: "Eco Considerations", optionA: "No water use, no chemicals", optionB: "Supports natural ecosystem" },
        { feature: "Heat Retention", optionA: "Warmer in direct sun", optionB: "Cooler natural surface" },
      ]} />

      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Which Should You Choose?</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            If you want a consistently green, virtually maintenance-free yard and you're comfortable with the higher upfront investment, artificial turf is the practical choice for most Bay Area homeowners. The long-term savings on water bills, lawn care services, mowing equipment, and weekend time are significant. Most homeowners we've worked with break even within 3–5 years and save money every year after that.
          </p>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light">
            Natural sod makes sense if you genuinely prefer the feel and environmental benefits of real grass — the way it cools the air, supports pollinators, and absorbs rainwater — and you're willing to commit to the ongoing maintenance that keeps it healthy. There's nothing wrong with choosing natural grass; the key is going in with realistic expectations about what it takes to maintain a healthy lawn in our climate.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            Many of our clients choose a hybrid approach: artificial turf in the backyard and side yards for low-maintenance living space, with natural plantings and ground covers in the front yard for curb appeal and environmental benefit. It's a practical compromise that gives you the best of both worlds.
          </p>
          <div className="mt-8">
            <Link to="/artificial-turf" className="text-sm font-medium text-primary hover:underline tracking-wide">Learn about our turf installation services →</Link>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "How much money will I save switching to artificial turf?", answer: "The average Bay Area homeowner spends $1,500–$3,000+ per year on lawn irrigation, mowing, fertilizing, and maintenance. With artificial turf, those costs drop to near zero. On a typical 1,500-square-foot lawn, most homeowners recoup their turf investment within 3–5 years in water and maintenance savings alone." },
        { question: "Does artificial turf look fake?", answer: "Modern premium turf products are remarkably realistic — most people can't tell the difference from the street. The key is professional installation with proper infill, varied blade heights, and correct brushing. Budget turf installed poorly can look fake; premium turf installed correctly looks natural year-round." },
        { question: "Is artificial turf bad for the environment?", answer: "It's a trade-off. Turf eliminates water consumption and chemical fertilizer/pesticide use, which are significant environmental benefits in drought-prone California. However, it's a synthetic product that doesn't support pollinators or absorb CO2 like natural grass. Many homeowners offset this by maintaining natural plantings in other areas of their landscape." },
        { question: "Can I install turf in just part of my yard?", answer: "Absolutely — partial installations are very common. Many homeowners install turf in the backyard for a low-maintenance living area while keeping natural plantings, ground covers, or native landscaping in the front yard. We can design a layout that makes sense for your specific property and lifestyle." },
      ]} />

      <CTABanner title="Need Help Deciding?" subtitle="Request a consultation and we'll recommend the best option based on your yard, budget, and lifestyle." />
    </Layout>
  );
};
export default ArtificialTurfVsSod;