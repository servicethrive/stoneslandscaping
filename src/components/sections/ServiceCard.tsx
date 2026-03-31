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
    className="group block bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-primary">
        Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;
