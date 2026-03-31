import { Shield } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const WarrantyBlock = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">Our Warranty Promise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-8 text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">{BUSINESS.paverWarrantyYears}-Year Paver Warranty</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every paver installation we complete is backed by a {BUSINESS.paverWarrantyYears}-year warranty covering materials
            and workmanship. We stand behind the durability and quality of our hardscape work.
          </p>
        </div>
        <div className="border rounded-lg p-8 text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">{BUSINESS.landscapeWarrantyDays}-Day Landscape Warranty</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our landscaping projects include a {BUSINESS.landscapeWarrantyDays}-day plant and material warranty.
            If anything we installed doesn't perform as expected within that window, we make it right.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WarrantyBlock;
