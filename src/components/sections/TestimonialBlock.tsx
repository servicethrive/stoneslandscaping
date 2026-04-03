import { Star, Quote } from "lucide-react";

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
  <section className="py-20 lg:py-28 bg-brand-charcoal relative overflow-hidden">
    <div className="relative container mx-auto px-4">
      <div className="text-center mb-14">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h2>
        <p className="text-white/50 font-light">Trusted by homeowners across the Bay Area</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-white/10 relative border-l-2 border-l-primary">
            <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-white/80 mb-6 leading-relaxed font-light">"{t.text}"</p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-primary/80 tracking-wide uppercase">{t.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialBlock;
