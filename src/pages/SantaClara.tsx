import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import CTABanner from "@/components/sections/CTABanner";
import { IMAGES, SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const SantaClara = () => {
  useEffect(() => { document.title = "Landscaping & Hardscape Santa Clara, CA | Stones Landscaping Inc."; }, []);
  return (
    <Layout>
      <HeroSection title="Landscaping & Hardscape Services in Santa Clara" subtitle="Professional outdoor renovation for Santa Clara homeowners — pavers, landscaping, concrete driveways, and complete backyard transformations." backgroundImage={IMAGES.concrete} />
      <TrustBar />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Outdoor Projects in Santa Clara</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Santa Clara's mix of single-family homes, newer developments, and established neighborhoods creates steady demand for outdoor renovation services. Homeowners here are upgrading patios, replacing driveways, adding landscape features, and building outdoor entertainment spaces — and Stones Landscaping is one of the most experienced contractors serving the area.</p>
          <p className="text-muted-foreground mb-4 leading-relaxed">We handle projects of all sizes in Santa Clara, from compact front yard refreshes to complete backyard overhauls. Our proximity — just a short drive from our San Jose office — means fast response times and efficient crew deployment for Santa Clara projects.</p>
          <p className="text-muted-foreground leading-relaxed">Whether your home is near Santa Clara University, in the Rivermark area, or in one of the city's established residential pockets, we bring the same level of quality and communication to every project.</p>
        </div>
      </section>
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-foreground text-center mb-10">Services in Santa Clara</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {SERVICES.map((s) => (<Link key={s.path} to={s.path} className="flex items-center gap-2 p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all group"><span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{s.title}</span><ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" /></Link>))}
          </div>
        </div>
      </section>
      <CTABanner title="Get a Free Estimate in Santa Clara" subtitle="Contact us to schedule a free on-site consultation at your Santa Clara property." />
    </Layout>
  );
};
export default SantaClara;
