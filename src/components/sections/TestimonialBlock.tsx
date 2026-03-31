import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  service: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Maria S.",
    text: "Stones Landscaping transformed our backyard into an outdoor living space we use every single day. The paver patio is flawless and the crew was professional from start to finish.",
    service: "Paver Patio Installation",
  },
  {
    name: "David & Lisa R.",
    text: "We hired them for a complete front yard renovation and couldn't be happier. The design process was clear, the timeline was accurate, and the results exceeded our expectations.",
    service: "Landscaping Design-Build",
  },
  {
    name: "James T.",
    text: "Our new driveway looks incredible. They handled the entire concrete replacement smoothly, kept the site clean, and finished on schedule. Highly recommend.",
    service: "Concrete Driveway",
  },
];

interface TestimonialBlockProps {
  testimonials?: Testimonial[];
  title?: string;
}

const TestimonialBlock = ({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
}: TestimonialBlockProps) => (
  <section className="py-16 bg-brand-cream">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
            <div>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialBlock;
