import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const hardscapeServices = [
  { title: "Pavers", path: "/pavers", desc: "Custom paver patios, walkways, driveways, and pool decks using premium materials like Techo-Bloc, travertine, and porcelain." },
  { title: "Retaining Walls", path: "/retaining-walls", desc: "Structural and decorative retaining walls that manage slopes, prevent erosion, and add architectural interest." },
  { title: "Patio & Walkway Installations", path: "/patio-walkway-installations", desc: "Complete patio and walkway construction designed for durability, drainage, and visual impact." },
  { title: "Outdoor Kitchens", path: "/outdoor-kitchens", desc: "Custom-built outdoor kitchens with countertops, grill stations, and entertainment features." },
];

const Hardscape = () => {
  useEffect(() => {
    document.title = "Hardscape Services San Jose | Pavers, Retaining Walls & More | Stones Landscaping";
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Hardscape Construction Built to Last"
        subtitle="From paver patios to retaining walls, our hardscape projects are engineered for durability and designed for impact. Serving San Jose and the greater Bay Area."
        backgroundImage={IMAGES.hardscape}
      />
      <TrustBar />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">What Is Hardscape?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Hardscape refers to the non-living structural elements of your outdoor space — patios, walkways, retaining walls, driveways, fire features, and outdoor kitchens. These are the permanent features that define how your yard functions, flows, and feels. Unlike softscape (plants, grass, mulch), hardscape elements are built to last decades with minimal maintenance.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            At {BUSINESS.name}, we specialize in residential hardscape construction across San Jose, Santa Clara County, and the surrounding Bay Area. Every hardscape project we take on is built with proper grading, compacted base preparation, and materials selected for both performance and aesthetics.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're replacing an aging concrete patio, adding a retaining wall to manage a slope, or building a complete outdoor living area from the ground up, hardscape is the foundation of a well-designed yard. And when it's done right, it adds usable space, property value, and visual impact that lasts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Our Hardscape Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {hardscapeServices.map((s) => (
              <Link key={s.path} to={s.path} className="group bg-background rounded-lg border p-6 hover:shadow-lg hover:border-primary transition-all">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{s.desc}</p>
                <span className="text-sm font-medium text-primary inline-flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Invest in Professional Hardscape?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>A well-built hardscape project changes how you use your yard. It gives you defined spaces for cooking, dining, relaxing, or entertaining — without the limitations of a basic lawn or deteriorating concrete.</p>
            <p>Professionally installed hardscape also increases property value. According to multiple industry studies, outdoor living improvements consistently deliver strong return on investment, especially in competitive Bay Area real estate markets where buyers expect polished outdoor spaces.</p>
            <p>The difference between DIY or budget hardscape and professional installation comes down to what's underneath. Proper base preparation, correct drainage grading, edge restraint systems, and material-specific installation methods determine whether your patio or wall holds up for five years or twenty-five. That's where experience matters — and it's why our paver installations carry a {BUSINESS.paverWarrantyYears}-year warranty.</p>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={[
        { question: "What types of hardscape projects do you handle?", answer: "We handle pavers, retaining walls, outdoor kitchens, patios, walkways, fire features, pergolas, and pool decks — essentially all structural outdoor elements for residential properties." },
        { question: "How long does a typical hardscape project take?", answer: "Most residential hardscape projects take 1–4 weeks depending on scope and complexity. We provide estimated timelines in every proposal." },
        { question: "Do you handle permits and grading?", answer: "Yes. For projects that require permits, grading, or engineering, we manage the process. We assess permit needs during the initial consultation." },
        { question: "What materials do you use?", answer: "We work with Techo-Bloc pavers, natural stone, travertine, porcelain, concrete block, and other premium materials selected for the Bay Area climate and your specific project needs." },
      ]} />

      <CTABanner title="Plan Your Hardscape Project" subtitle="Schedule a free on-site consultation and get a detailed project proposal." />
    </Layout>
  );
};

export default Hardscape;
