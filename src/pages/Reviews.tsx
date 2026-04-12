import { usePageMeta } from "@/hooks/use-page-meta";
import Layout from "@/components/layout/Layout";
import TestimonialBlock from "@/components/sections/TestimonialBlock";
import CTABanner from "@/components/sections/CTABanner";
import { BUSINESS } from "@/lib/constants";
import { Star } from "lucide-react";

const reviewHighlights = [
  { name: "Maria S.", text: "Stones Landscaping transformed our backyard into an outdoor living space we use every single day. The paver patio is flawless and the crew was professional from start to finish.", service: "Paver Patio Installation" },
  { name: "David & Lisa R.", text: "We hired them for a complete front yard renovation and couldn't be happier. The design process was clear, the timeline was accurate, and the results exceeded our expectations.", service: "Landscaping Design-Build" },
  { name: "James T.", text: "Our new driveway looks incredible. They handled the entire concrete replacement smoothly, kept the site clean, and finished on schedule. Highly recommend.", service: "Concrete Driveway" },
  { name: "Sarah M.", text: "The retaining wall they built solved our backyard drainage issues completely. Professional crew, great communication, and the wall looks beautiful. Couldn't ask for more.", service: "Retaining Wall" },
  { name: "Robert & Ana K.", text: "Our outdoor kitchen is the centerpiece of our backyard now. They handled everything - design, construction, gas hookup, countertops. The quality is outstanding.", service: "Outdoor Kitchen" },
  { name: "Jennifer L.", text: "Switched to artificial turf and wish we'd done it years ago. The installation was clean, fast, and the turf looks amazing. No more mowing or watering!", service: "Artificial Turf" },
];

const Reviews = () => {
  usePageMeta(
    "Reviews | Stones Landscaping Inc. | 5-Star Rated San Jose Contractor",
    "5-star rated hardscape & landscaping contractor in San Jose. Read reviews from Silicon Valley homeowners."
  );

  return (
    <Layout>
      <section className="bg-brand-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Reviews</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto mb-8">
            See what Bay Area homeowners say about working with Stones Landscaping.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
              </div>
              <p className="text-2xl font-bold text-white">{BUSINESS.googleReviews}</p>
              <p className="text-white/60 text-sm">Five-Star Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
              </div>
              <p className="text-2xl font-bold text-white">{BUSINESS.yelpReviews}</p>
              <p className="text-white/60 text-sm">Five-Star Yelp Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviewHighlights.map((r, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-foreground mb-4 leading-relaxed italic">"{r.text}"</p>
                <p className="text-sm font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Join Our Happy Clients?" subtitle="Request a free estimate and experience the Stones Landscaping difference." />
    </Layout>
  );
};

export default Reviews;
