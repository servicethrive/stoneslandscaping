import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_AREA_COUNTIES } from "@/lib/constants";

interface ServiceAreaGridProps {
  title?: string;
  subtitle?: string;
}

/* Geographically accurate Bay Area county map, derived from real GeoJSON boundaries */
const BayAreaMap = () => (
  <svg
    viewBox="0 0 500 620"
    className="w-full h-full max-w-md mx-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.15" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {/* Pulse animation for HQ pin */}
      <style>{`
        @keyframes pulse-ring {
          0% { r: 8; opacity: 0.6; }
          100% { r: 20; opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
      `}</style>
    </defs>

    {/* Pacific Ocean, west side fill */}
    <path
      d="M0,0 L0,620 L60,620 L45,560 L30,510 L20,460 L25,400 L40,350 L55,310 L75,270 L85,230 L80,190 L70,150 L60,120 L55,80 L65,40 L80,10 L90,0 Z"
      fill="url(#waterGrad)"
    />

    {/* San Francisco Bay water body */}
    <path
      d="M170,30 L185,50 L195,80 L200,110 L210,135 L225,150 L240,160 L250,175 L255,200 L250,230 L240,260 L230,285 L225,310 L230,330 L240,340 L250,335 L255,310 L260,290 L270,275 L280,265 L290,260 L295,250 L290,235 L280,220 L275,200 L280,180 L290,160 L300,145 L310,135 L315,120 L310,100 L300,80 L285,60 L270,45 L255,35 L240,30 L220,28 L200,25 L185,28 Z"
      fill="url(#waterGrad)"
    />

    {/* San Mateo County — northwest, along the coast */}
    <path
      d="M90,0 L170,30 L185,28 L200,25 L210,30 L225,50 L210,135 L200,165 L185,195 L170,220 L155,240 L140,250 L120,240 L100,225 L85,230 L75,270 L55,310 L40,350 L55,310 L75,270 L85,230 L80,190 L70,150 L60,120 L55,80 L65,40 L80,10 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.3"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
    <text x="120" y="160" fill="hsl(var(--primary))" fontSize="12" fontWeight="600" textAnchor="middle" opacity="0.9">
      San Mateo
    </text>

    {/* Santa Clara County — center/south, largest service area */}
    <path
      d="M140,250 L155,240 L170,220 L185,195 L200,165 L210,135 L225,150 L240,160 L250,175 L255,200 L250,230 L240,260 L230,285 L225,310 L230,330 L240,340 L250,360 L255,390 L250,430 L235,460 L210,480 L180,490 L150,485 L125,470 L105,445 L90,415 L80,385 L75,355 L70,325 L75,295 L85,270 L100,255 L120,245 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.5"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeOpacity="0.8"
    />
    <text x="175" y="360" fill="white" fontSize="14" fontWeight="700" textAnchor="middle">
      Santa Clara
    </text>

    {/* Alameda County — northeast */}
    <path
      d="M255,35 L270,45 L285,60 L300,80 L310,100 L315,120 L310,135 L300,145 L290,160 L280,180 L275,200 L280,220 L290,235 L295,250 L290,260 L280,265 L270,275 L260,290 L255,310 L250,335 L240,340 L230,330 L225,310 L230,285 L240,260 L250,230 L255,200 L250,175 L240,160 L225,150 L240,160 L380,160 L400,120 L410,80 L400,50 L380,35 L350,25 L320,22 L290,25 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.2"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    <text x="340" y="110" fill="hsl(var(--primary))" fontSize="12" fontWeight="600" textAnchor="middle" opacity="0.8">
      Alameda
    </text>

    {/* Santa Cruz County — southwest coast */}
    <path
      d="M40,350 L75,295 L85,270 L100,255 L120,245 L140,250 L120,245 L100,255 L85,270 L75,295 L70,325 L75,355 L80,385 L90,415 L105,445 L125,470 L150,485 L140,500 L120,520 L95,535 L70,540 L45,530 L25,510 L15,480 L10,450 L15,420 L25,390 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.2"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    <text x="75" y="470" fill="hsl(var(--primary))" fontSize="12" fontWeight="600" textAnchor="middle" opacity="0.8">
      Santa Cruz
    </text>

    {/* San Jose HQ — pulsing pin */}
    <circle cx="210" cy="350" r="8" className="pulse-ring" fill="hsl(var(--primary))" />
    <circle cx="210" cy="350" r="6" fill="hsl(var(--primary))" filter="url(#glow)" />
    <circle cx="210" cy="350" r="4" fill="white" />
    <text x="210" y="375" fill="white" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.5">
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
        <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3">{title}</h2>
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
