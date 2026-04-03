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
    className="group block rounded-sm overflow-hidden relative aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      loading="lazy"
    />
    {/* Permanent dark overlay with gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    {/* Brown accent line at bottom on hover */}
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
    {/* Text overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
      <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-primary-foreground transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-white/70 mb-3 leading-relaxed line-clamp-2 font-light">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-primary tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Explore <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;
