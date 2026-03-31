import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Atherton = () => {
  useEffect(() => { document.title = "Landscaping & Hardscape Atherton, CA | Estate-Level Outdoor Renovation | Stones Landscaping"; }, []);
  return (
    <Layout>
      <HeroSection title="Estate-Level Landscaping & Hardscape in Atherton" subtitle="Premium outdoor renovations for Atherton's luxury homes. Custom pavers, hardscape, outdoor kitchens, and complete landscape design-build — crafted for properties where quality is non-negotiable." backgroundImage={IMAGES.hero} />
      <TrustBar />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Outdoor Construction for Atherton Estates</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Atherton is one of the most exclusive residential communities in the Bay Area, and the outdoor spaces here reflect that standard. Large lots, mature landscaping, and high-value properties require a contractor who understands both the scale and the expectations involved in estate-level outdoor work.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">Stones Landscaping serves Atherton homeowners with the same precision and attention to detail we bring to every project — but with the capacity and experience to handle the larger scopes and premium material selections that Atherton properties demand. From expansive paver driveways and motor courts to custom outdoor kitchens, pool decks, and multi-zone landscape installations, we build outdoor environments that match the quality of the homes they surround.</p>
          <p className="text-muted-foreground leading-relaxed">Our design capability, including 2D and 3D renderings for qualifying projects, is especially valuable for Atherton clients who want to visualize complex layouts before construction begins. We work closely with homeowners, architects, and property managers to deliver results that meet exact specifications.</p>
        </div>
      </section>
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-foreground text-center mb-10">Services Available in Atherton</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICES.map((s) => (<Link key={s.path} to={s.path} className="flex items-center gap-2 p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all group"><span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span><ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" /></Link>))}
          </div>
        </div>
      </section>
      <CTABanner title="Schedule a Consultation in Atherton" subtitle="We'll visit your property, assess the scope, and deliver a detailed proposal tailored to your estate." />
    </Layout>
  );
};
export default Atherton;
