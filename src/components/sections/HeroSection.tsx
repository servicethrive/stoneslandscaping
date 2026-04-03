import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
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
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center scale-105"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    {/* Rich dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
    {/* Bottom fade to charcoal */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />

    <div className="relative container mx-auto px-4 py-24 text-center max-w-5xl">
      {/* Decorative accent line */}
      <div className="w-16 h-[2px] bg-primary mx-auto mb-8 opacity-90" />

      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight drop-shadow-lg">
        {title}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg" className="px-10 py-6 tracking-widest uppercase text-sm font-semibold font-body shadow-lg">
          <Link to={primaryCTA.link}>{primaryCTA.text}</Link>
        </Button>
        {secondaryCTA && (
          <Button asChild variant="outline" size="lg" className="px-10 py-6 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm tracking-widest uppercase text-sm font-semibold font-body">
            <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
          </Button>
        )}
        {showPhone && !secondaryCTA && (
          <Button asChild variant="outline" size="lg" className="px-10 py-6 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm tracking-widest uppercase text-sm font-semibold font-body">
            <a href={`tel:${BUSINESS.phoneTel}`}>
              <Phone className="h-4 w-4 mr-2" /> Call {BUSINESS.phone}
            </a>
          </Button>
        )}
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
      <ChevronDown className="h-6 w-6 text-white/50" />
    </div>
  </section>
);

export default HeroSection;
