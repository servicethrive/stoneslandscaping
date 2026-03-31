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
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center scale-105"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    {/* Rich dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
    {/* Warm brown bottom accent */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(25,25%,8%)] to-transparent" />

    <div className="relative container mx-auto px-4 py-24 text-center max-w-5xl">
      {/* Decorative accent line */}
      <div className="w-12 h-0.5 bg-primary mx-auto mb-8 opacity-80" />

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg" className="text-base px-10 py-6 tracking-wide uppercase text-sm font-semibold">
          <Link to={primaryCTA.link}>{primaryCTA.text}</Link>
        </Button>
        {secondaryCTA && (
          <Button asChild variant="outline" size="lg" className="text-base px-10 py-6 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm tracking-wide uppercase text-sm font-semibold">
            <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
          </Button>
        )}
        {showPhone && !secondaryCTA && (
          <Button asChild variant="outline" size="lg" className="text-base px-10 py-6 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm tracking-wide uppercase text-sm font-semibold">
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