import { BUSINESS } from "@/lib/constants";

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
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 010-9.18l-7.98-6.19a24.003 24.003 0 000 21.56l7.98-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const YelpIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path fill="#D32323" d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"/>
    <path fill="#fff" d="M20.16 10.5c.08-.01 2.46-.04 2.72.6.26.65-1.2 6.48-1.6 8.08-.13.53-.55.77-1.08.62-3.2-1.08-5.6-2.08-6.08-2.32-.48-.24-.56-.72-.24-1.12 1.2-1.44 4.16-4.72 6.28-5.86zm-6.8 13.1c-.56-.16-.72-.64-.4-1.08.64-.88 1.68-2.16 2.08-2.56.4-.4.88-.32 1.2.16l2.72 4.32c.32.48.08 1-.48 1.12l-5.12 1.36zm8.48 4.88c.24.48 0 .96-.56 1.04l-5.2.8c-.56.08-.88-.24-.8-.8.16-1.12.56-3.2.8-3.76.24-.56.72-.64 1.12-.24l4.64 2.96zm1.04-1.36c-.48.24-.96-.08-1.04-.64l-.8-5.2c-.08-.56.24-.88.72-.72.96.32 2.96 1.04 3.52 1.36.56.32.56.8.16 1.12l-2.56 4.08zm3.36-5.6c.16-.56.64-.72 1.08-.4l4.16 2.88c.44.32.4.8-.08 1.04-.96.48-2.88 1.36-3.52 1.52-.64.16-1.04-.16-1.04-.72l-.6-4.32z"/>
  </svg>
);

const ShieldCheck = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="hsl(var(--primary)/0.1)" />
    <path d="M9 12l2 2 4-4" />
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
      icon: <YelpIcon />,
      topLine: "4.9 Stars on Yelp",
      bottomLine: "123+ Reviews",
      stars: true,
      href: BUSINESS.yelpProfileUrl,
    },
    {
      icon: <YelpIcon />,
      topLine: "Yelp Verified",
      bottomLine: "Licensed Contractor",
      stars: false,
      href: BUSINESS.yelpProfileUrl,
    },
    {
      icon: <ShieldCheck />,
      topLine: "Licensed & Insured",
      bottomLine: `CA Lic #${BUSINESS.license}`,
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
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
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
