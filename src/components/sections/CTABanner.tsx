import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BUSINESS, IMAGES } from "@/lib/constants";

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
  <section className={`py-20 lg:py-28 relative overflow-hidden ${dark ? "bg-brand-charcoal" : "bg-brand-light-grey"}`}>
    {/* Background image with heavy overlay for dark variant */}
    {dark && (
      <>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-brand-charcoal/50" />
      </>
    )}

    <div className="relative container mx-auto px-4 text-center max-w-3xl">
      <div className="w-12 h-0.5 mx-auto mb-8 bg-primary" />

      <h2 className={`font-display text-3xl md:text-4xl lg:text-4xl font-bold mb-5 leading-tight ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg mb-10 font-light leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
      <div className="flex flex-col items-center">
        <Button asChild size="lg" className="text-sm px-10 py-6 tracking-widest uppercase font-semibold font-body shadow-lg">
          <Link to="/contact">Request a Free Consultation</Link>
        </Button>
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className={`inline-flex items-center gap-2 text-sm mt-6 transition-colors ${dark ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
        >
          <Phone className="h-4 w-4" /> {BUSINESS.phone}
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;
