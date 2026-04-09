import { Shield } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const WarrantyBlock = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-14">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-foreground">Our Warranty Promise</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-border/60 rounded-sm p-10 text-center hover:border-primary/30 transition-colors duration-300">
          <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-5">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">{BUSINESS.paverWarrantyYears}-Year Paver Warranty</h3>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            Every paver installation we complete is backed by a {BUSINESS.paverWarrantyYears}-year warranty covering materials
            and workmanship. We stand behind the durability and quality of our hardscape work.
          </p>
        </div>
        <div className="border border-border/60 rounded-sm p-10 text-center hover:border-primary/30 transition-colors duration-300">
          <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-5">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">{BUSINESS.landscapeWarrantyDays}-Day Landscape Warranty</h3>
          <p className="text-muted-foreground leading-relaxed font-light text-lg">
            Our landscaping projects include a {BUSINESS.landscapeWarrantyDays}-day plant and material warranty.
            If anything we installed doesn't perform as expected within that window, we make it right.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WarrantyBlock;