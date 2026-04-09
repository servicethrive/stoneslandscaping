interface ZigZagItem {
  title: string;
  text: string;
  image: string;
  imageAlt?: string;
}

interface ZigZagSectionProps {
  items: ZigZagItem[];
}

const ZigZagSection = ({ items }: ZigZagSectionProps) => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 max-w-6xl space-y-20 lg:space-y-28">
      {items.map((item, index) => {
        const isReversed = index % 2 === 1;
        return (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
              isReversed ? "lg:direction-rtl" : ""
            }`}
          >
            {/* Text */}
            <div className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-lg">
                {item.text}
              </p>
            </div>
            {/* Image */}
            <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default ZigZagSection;
