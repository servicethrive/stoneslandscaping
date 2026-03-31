import { BUSINESS } from "@/lib/constants";

const TeamBlock = () => (
  <section className="py-20 lg:py-28 bg-brand-cream">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
            alt="Stones Landscaping team at work"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">Built on Experience, Driven by Results</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            {BUSINESS.name} was founded in {BUSINESS.founded} by Manuel Corona Escobar, who spent years working in the
            landscaping and hardscape industry before launching his own company. That hands-on experience is the
            foundation of how we operate — organized, detail-focused, and committed to quality.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed font-light">
            We run large crews capable of handling complex residential projects across the Bay Area.
            From initial design consultation through final walkthrough, every project gets the same level
            of attention, communication, and craftsmanship.
          </p>
          <ul className="space-y-3 text-sm text-foreground">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              Licensed: #{BUSINESS.license} — {BUSINESS.licenseClassifications}
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              {BUSINESS.googleReviews} Five-Star Google Reviews
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              {BUSINESS.yelpReviews} Five-Star Yelp Reviews
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              2D/3D Design Available for Qualifying Projects
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default TeamBlock;