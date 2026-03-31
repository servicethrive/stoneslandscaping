import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  showPhone?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  primaryCTA = { text: "Get a Free Estimate", link: "/contact" },
  secondaryCTA,
  showPhone = true,
}: HeroSectionProps) => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-brand-dark/75" />
    <div className="relative container mx-auto px-4 py-20 text-center max-w-4xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg" className="text-base px-8">
          <Link to={primaryCTA.link}>{primaryCTA.text}</Link>
        </Button>
        {secondaryCTA && (
          <Button asChild variant="outline" size="lg" className="text-base px-8 border-white/30 text-white hover:bg-white/10 hover:text-white">
            <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
          </Button>
        )}
        {showPhone && !secondaryCTA && (
          <Button asChild variant="outline" size="lg" className="text-base px-8 border-white/30 text-white hover:bg-white/10 hover:text-white">
            <a href={`tel:${BUSINESS.phoneTel}`}>
              <Phone className="h-4 w-4 mr-2" /> Call {BUSINESS.phone}
            </a>
          </Button>
        )}
      </div>
    </div>
  </section>
);

export default HeroSection;
