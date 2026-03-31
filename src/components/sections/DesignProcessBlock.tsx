import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DesignProcessBlock = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div>
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">See Your Project Before It's Built</h2>
          <p className="text-muted-foreground mb-5 leading-relaxed font-light text-lg">
            For qualifying projects, we offer 2D and 3D design renderings so you can visualize the finished
            result before any construction begins. This process eliminates guesswork, aligns expectations,
            and ensures every detail is planned with precision.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed font-light">
            Our design process includes an on-site consultation, detailed measurements, material selection
            guidance, and rendered visuals that show exactly how your outdoor space will look.
          </p>
          <Button asChild className="text-sm px-8 py-5 tracking-wide uppercase font-semibold">
            <Link to="/design-process">Learn About Our Design Process</Link>
          </Button>
        </div>
        <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
          <img
            src="/images/3d-landscape-design.jpg"
            alt="3D landscape design rendering by Stones Landscaping"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DesignProcessBlock;