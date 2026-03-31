import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const CTABanner = ({
  title,
  subtitle,
  dark = true,
}: CTABannerProps) => (
  <section className={`py-20 lg:py-28 relative overflow-hidden ${dark ? "bg-brand-dark" : "bg-brand-cream"}`}>
    {/* Subtle texture overlay for dark variant */}
    {dark && <div className="absolute inset-0 warm-texture opacity-30" />}

    <div className="relative container mx-auto px-4 text-center max-w-3xl">
      {/* Decorative accent */}
      <div className={`w-12 h-0.5 mx-auto mb-8 ${dark ? "bg-primary" : "bg-primary"}`} />

      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg mb-10 font-light leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="text-sm px-10 py-6 tracking-widest uppercase font-semibold font-display">
          <Link to="/contact">Request a Free Estimate</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className={`text-sm px-10 py-6 tracking-widest uppercase font-semibold font-body ${dark ? "border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" : ""}`}
        >
          <a href={`tel:${BUSINESS.phoneTel}`}>
            <Phone className="h-4 w-4 mr-2" /> {BUSINESS.phone}
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTABanner;