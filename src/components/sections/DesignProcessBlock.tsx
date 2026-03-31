import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DesignProcessBlock = () => (
  <section className="py-16 bg-brand-cream">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See Your Project Before It's Built</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            For qualifying projects, we offer 2D and 3D design renderings so you can visualize the finished
            result before any construction begins. This process eliminates guesswork, aligns expectations,
            and ensures every detail is planned with precision.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our design process includes an on-site consultation, detailed measurements, material selection
            guidance, and rendered visuals that show exactly how your outdoor space will look.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/design-process">Learn About Our Design Process</Link>
            </Button>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80"
            alt="Landscape design rendering example"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DesignProcessBlock;
