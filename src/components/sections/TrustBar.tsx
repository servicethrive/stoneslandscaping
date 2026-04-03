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
  <svg viewBox="0 0 48 48" className="w-14 h-14">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 010-9.18l-7.98-6.19a24.003 24.003 0 000 21.56l7.98-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const ReviewItem = ({
  icon,
  topLine,
  bottomLine,
  href,
}: {
  icon: React.ReactNode;
  topLine: string;
  bottomLine: string;
  href: string;
}) => {
  const content = (
    <div className="flex items-center gap-3">
      <div className="shrink-0">{icon}</div>
      <div>
        <StarRow />
        <p className="text-white font-semibold text-sm tracking-wide mt-0.5">{topLine}</p>
        <p className="text-white/50 text-xs font-light tracking-wider">{bottomLine}</p>
      </div>
    </div>
  );

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
      {content}
    </a>
  );
};

const AwardItem = ({
  src,
  alt,
  topLine,
  bottomLine,
}: {
  src: string;
  alt: string;
  topLine: string;
  bottomLine: string;
}) => (
  <div className="flex flex-col items-center gap-1.5 text-center">
    <img
      src={src}
      alt={alt}
      className="w-28 h-28 object-contain mix-blend-multiply"
      style={{ filter: "brightness(1.05)" }}
    />
    <div>
      <p className="text-white font-semibold text-sm tracking-wide">{topLine}</p>
      <p className="text-white/50 text-xs font-light tracking-wider">{bottomLine}</p>
    </div>
  </div>
);

const TrustBar = () => {
  return (
    <section className="bg-brand-charcoal border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-around gap-8">
          {/* Google Reviews */}
          <ReviewItem
            icon={<GoogleIcon />}
            topLine="5.0 Stars on Google"
            bottomLine="56+ Reviews"
            href={BUSINESS.googleProfileUrl}
          />

          {/* Yelp Reviews */}
          <ReviewItem
            icon={
              <div className="w-14 h-14 bg-white/90 rounded-lg p-0.5 flex items-center justify-center">
                <img src={yelpIcon} alt="Yelp" className="w-full h-full object-contain rounded" />
              </div>
            }
            topLine="4.9 Stars on Yelp"
            bottomLine="123+ Reviews"
            href={BUSINESS.yelpProfileUrl}
          />

          {/* Divider - hidden on mobile */}
          <div className="hidden lg:block w-px h-12 bg-white/10" />

          {/* Best of 2026 */}
          <AwardItem
            src={bestOf2026}
            alt="Best of 2026 Landscaper in Willow Glen"
            topLine="Award Winner"
            bottomLine="Landscaper in Willow Glen"
          />

          {/* Best of 2025 */}
          <AwardItem
            src={bestOf2025}
            alt="Best of 2025 Landscaper in San Jose"
            topLine="Best of 2025"
            bottomLine="Landscaper in San Jose"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
