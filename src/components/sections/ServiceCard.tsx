import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => (
  <Link
    to={link}
    className="group block bg-card rounded-sm overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
  >
    <div className="aspect-[4/3] overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-6">
      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-primary tracking-wide uppercase">
        Explore <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;