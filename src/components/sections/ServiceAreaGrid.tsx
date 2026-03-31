import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

interface ServiceAreaGridProps {
  title?: string;
  subtitle?: string;
}

const ServiceAreaGrid = ({
  title = "Serving the Bay Area",
  subtitle = "We provide premium landscaping and hardscape services across San Jose and surrounding communities in Santa Clara County.",
}: ServiceAreaGridProps) => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {SERVICE_AREAS.map((area) => (
          <Link
            key={area.name}
            to={area.path}
            className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:border-primary hover:shadow-md transition-all group"
          >
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {area.name}
            </span>
            <ArrowRight className="h-3 w-3 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/service-areas" className="text-sm font-medium text-primary hover:underline">
          View all service areas →
        </Link>
      </div>
    </div>
  </section>
);

export default ServiceAreaGrid;
