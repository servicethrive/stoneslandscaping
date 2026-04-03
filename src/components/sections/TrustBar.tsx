import { BUSINESS } from "@/lib/constants";
import yelpIcon from "@/assets/yelp-icon.jpeg";
import bestOf2026 from "@/assets/best-of-2026.webp";
import bestOf2025 from "@/assets/best-of-2025.png";

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#FBBF24]">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-16 h-16">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 010-9.18l-7.98-6.19a24.003 24.003 0 000 21.56l7.98-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const TrustBar = () => {
  const items = [
    {
      icon: <GoogleIcon />,
      topLine: "5.0 Stars on Google",
      bottomLine: "56+ Reviews",
      stars: true,
      href: BUSINESS.googleProfileUrl,
    },
    {
      icon: <img src={yelpIcon} alt="Yelp" className="w-16 h-16 object-contain rounded" />,
      topLine: "4.9 Stars on Yelp",
      bottomLine: "123+ Reviews",
      stars: true,
      href: BUSINESS.yelpProfileUrl,
    },
    {
      icon: <img src={bestOf2026} alt="Best of 2026 Landscaper in Willow Glen" className="w-16 h-16 object-contain" />,
      topLine: "Award Winner",
      bottomLine: "Landscaper in Willow Glen",
      stars: false,
      href: undefined,
    },
    {
      icon: <img src={bestOf2025} alt="Best of 2025 Landscaper in San Jose" className="w-16 h-16 object-contain" />,
      topLine: "Best of 2025",
      bottomLine: "Landscaper in San Jose",
      stars: false,
      href: undefined,
    },
  ];

  return (
    <section className="bg-brand-charcoal border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const content = (
              <div className="flex items-center gap-4 justify-center relative">
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-primary/30 hidden lg:block" />
                )}
                <div className="shrink-0">
                  {item.icon}
                </div>
                <div>
                  {item.stars && <StarRow />}
                  <p className="text-white font-semibold text-sm tracking-wide mt-0.5">{item.topLine}</p>
                  <p className="text-white/50 text-xs font-light tracking-wider">{item.bottomLine}</p>
                </div>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={item.topLine}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              );
            }

            return <div key={item.topLine}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
