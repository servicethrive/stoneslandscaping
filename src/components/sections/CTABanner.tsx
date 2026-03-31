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
  <section className={`py-16 ${dark ? "bg-brand-dark" : "bg-brand-cream"}`}>
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg mb-8 ${dark ? "text-white/75" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="text-base px-8">
          <Link to="/contact">Request a Free Estimate</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className={`text-base px-8 ${dark ? "border-white/30 text-white hover:bg-white/10 hover:text-white" : ""}`}
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
