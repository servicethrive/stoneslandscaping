import { BUSINESS } from "@/lib/constants";

const TeamBlock = () => (
  <section className="py-16 bg-brand-cream">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
            alt="Stones Landscaping team at work"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built on Experience, Driven by Results</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {BUSINESS.name} was founded in {BUSINESS.founded} by Manuel Corona Escobar, who spent years working in the
            landscaping and hardscape industry before launching his own company. That hands-on experience is the
            foundation of how we operate — organized, detail-focused, and committed to quality.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We run large crews capable of handling complex residential projects across the Bay Area.
            From initial design consultation through final walkthrough, every project gets the same level
            of attention, communication, and craftsmanship.
          </p>
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex items-center gap-2">✓ Licensed: #{BUSINESS.license} — {BUSINESS.licenseClassifications}</li>
            <li className="flex items-center gap-2">✓ {BUSINESS.googleReviews} Five-Star Google Reviews</li>
            <li className="flex items-center gap-2">✓ {BUSINESS.yelpReviews} Five-Star Yelp Reviews</li>
            <li className="flex items-center gap-2">✓ 2D/3D Design Available for Qualifying Projects</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default TeamBlock;
