import { Phone, MapPin, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const TopBar = () => (
  <div className="bg-brand-grey text-white hidden lg:block">
    <div className="container mx-auto px-4 flex items-center justify-between h-9 text-xs tracking-wide">
      <div className="flex items-center gap-1.5 text-white/80">
        <MapPin className="h-3 w-3" />
        <span>Serving the San Jose &amp; Bay Area</span>
      </div>
      <a href="https://maps.app.goo.gl/7yK6MFsXNHYJw1AB9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
        <MapPin className="h-3 w-3" />
        <span>3150 Almaden Expy Suite 130, San Jose, CA 95118</span>
      </a>
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 text-white/80">
          <Shield className="h-3 w-3" />
          License #{BUSINESS.license}
        </span>
        <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-1.5 text-white font-semibold hover:text-primary transition-colors">
          <Phone className="h-3 w-3" />
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
