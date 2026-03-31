import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREA_COUNTIES } from "@/lib/constants";

interface ServiceAreaGridProps {
  title?: string;
  subtitle?: string;
}

const ServiceAreaGrid = ({
  title = "Serving the Bay Area",
  subtitle = "We provide premium landscaping and hardscape services across four Bay Area counties — Santa Clara, San Mateo, Alameda, and Santa Cruz.",
}: ServiceAreaGridProps) => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-light">{subtitle}</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {SERVICE_AREA_COUNTIES.map((county) => (
          <div key={county.county}>
            <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {county.county}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {county.cities.map((city) => (
                <Link
                  key={city.name}
                  to={city.path}
                  className="flex items-center gap-3 p-4 rounded-sm border border-border/60 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {city.name}
                  </span>
                  <ArrowRight className="h-3 w-3 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/service-areas" className="text-sm font-medium text-primary hover:underline tracking-wide uppercase">
          View all service areas →
        </Link>
      </div>
    </div>
  </section>
);

export default ServiceAreaGrid;
