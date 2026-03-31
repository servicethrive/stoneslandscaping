import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

const GalleryGrid = ({ images, categories }: GalleryGridProps) => {
  const cats = categories || [...new Set(images.map((img) => img.category))];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {["All", ...cats].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 text-sm rounded-sm font-medium transition-all duration-300 tracking-wide uppercase ${
              active === cat
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((img, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm group relative">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <span className="text-white text-sm font-medium tracking-wide">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;