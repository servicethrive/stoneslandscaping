import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_AREA_COUNTIES } from "@/lib/constants";

interface ServiceAreaGridProps {
  title?: string;
  subtitle?: string;
}

/* Simplified Bay Area county outlines — approximate SVG paths */
const BayAreaMap = () => (
  <svg
    viewBox="0 0 400 500"
    className="w-full h-full max-w-md mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Water / Bay background */}
    <defs>
      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    {/* Alameda County - top right area */}
    <path
      d="M220,60 L320,50 L350,100 L360,180 L320,220 L280,210 L240,180 L220,130 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.25"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <text x="285" y="140" fill="hsl(var(--primary))" fontSize="11" fontWeight="600" textAnchor="middle" opacity="0.8">
      Alameda
    </text>

    {/* San Mateo County - middle left */}
    <path
      d="M60,100 L180,90 L220,130 L240,180 L200,240 L140,260 L80,220 L50,160 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.35"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <text x="150" y="180" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">
      San Mateo
    </text>

    {/* Santa Clara County - center, largest */}
    <path
      d="M140,260 L200,240 L280,210 L320,220 L340,280 L330,360 L280,400 L200,410 L140,380 L110,320 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.5"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeOpacity="0.8"
    />
    <text x="235" y="310" fill="white" fontSize="13" fontWeight="700" textAnchor="middle">
      Santa Clara
    </text>

    {/* Santa Cruz County - bottom left */}
    <path
      d="M40,320 L110,320 L140,380 L200,410 L180,460 L120,480 L60,460 L30,400 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.25"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <text x="115" y="430" fill="hsl(var(--primary))" fontSize="11" fontWeight="600" textAnchor="middle" opacity="0.8">
      Santa Cruz
    </text>

    {/* San Jose pin marker */}
    <circle cx="250" cy="320" r="6" fill="hsl(var(--primary))" stroke="white" strokeWidth="2" />
    <circle cx="250" cy="320" r="12" fill="hsl(var(--primary))" fillOpacity="0.2" />
    <text x="250" y="345" fill="white" fontSize="10" fontWeight="600" textAnchor="middle">
      San Jose HQ
    </text>
  </svg>
);

const ServiceAreaGrid = ({
  title = "Serving the Bay Area",
  subtitle = "We provide premium landscaping and hardscape services across four Bay Area counties — Santa Clara, San Mateo, Alameda, and Santa Cruz.",
}: ServiceAreaGridProps) => (
  <section className="py-20 lg:py-28 bg-brand-charcoal">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h2>
        <p className="text-white/60 max-w-2xl mx-auto font-light">{subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Map Side */}
        <div className="flex items-center justify-center lg:sticky lg:top-32">
          <BayAreaMap />
        </div>

        {/* City List Side */}
        <div className="space-y-8">
          {SERVICE_AREA_COUNTIES.map((county) => (
            <div key={county.county}>
              <h3 className="font-display text-lg font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {county.county}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {county.cities.map((city) => (
                  <Link
                    key={city.name}
                    to={city.path}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-sm border border-white/10 bg-white/5 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-white/80 group-hover:text-primary transition-colors">
                      {city.name}
                    </span>
                    <ArrowRight className="h-3 w-3 ml-auto text-white/30 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white tracking-widest uppercase text-xs px-8 py-5 font-semibold">
          <Link to="/service-areas">View All Service Areas</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServiceAreaGrid;
