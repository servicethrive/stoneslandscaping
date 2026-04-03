import { Shield, Star, Award, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const TrustBar = () => {
  const items = [
    { icon: Clock, label: "Paver Warranty", value: `${BUSINESS.paverWarrantyYears}-Year` },
    { icon: Shield, label: "Licensed & Insured", value: `Lic #${BUSINESS.license}` },
    { icon: Star, label: "Google Reviews", value: `${BUSINESS.googleReviews} Five-Star` },
    { icon: Award, label: "Yelp Reviews", value: `${BUSINESS.yelpReviews} Five-Star` },
  ];

  return (
    <section className="bg-brand-charcoal border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-4 justify-center relative">
              {/* Brown separator line between items on desktop */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-primary/30 hidden lg:block" />
              )}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wide">{item.value}</p>
                <p className="text-white/50 text-xs font-light tracking-wider uppercase">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
