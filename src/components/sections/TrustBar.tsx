import { Shield, Star, Award, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const TrustBar = () => {
  const items = [
    { icon: Shield, label: "Licensed & Insured", value: `Lic #${BUSINESS.license}` },
    { icon: Star, label: "Google Reviews", value: `${BUSINESS.googleReviews} Five-Star` },
    { icon: Award, label: "Yelp Reviews", value: `${BUSINESS.yelpReviews} Five-Star` },
    { icon: Clock, label: "Paver Warranty", value: `${BUSINESS.paverWarrantyYears}-Year` },
  ];

  return (
    <section className="bg-brand-dark py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <item.icon className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">{item.value}</p>
                <p className="text-white/60 text-xs">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
