import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, SERVICES } from "@/lib/constants";
import logo from "@/assets/stones-landscaping-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Reviews", path: "/reviews" },
    { label: "Service Areas", path: "/service-areas" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border/40"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <img
            src={logo}
            alt="Stones Landscaping"
            className={`h-12 lg:h-16 w-auto transition-all duration-500 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-60 bg-background rounded-sm shadow-2xl border border-border/60 py-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-5 py-3 text-sm text-foreground hover:bg-brand-cream hover:text-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className={`flex items-center gap-1.5 text-sm font-medium tracking-wide ${
              scrolled ? "text-foreground" : "text-white/90"
            }`}
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <Button asChild className="text-xs px-6 py-5 tracking-widest uppercase font-semibold">
            <Link to="/contact">Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border/40 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            <p className="text-xs font-semibold uppercase text-muted-foreground px-3 pb-3 tracking-widest">Services</p>
            {SERVICES.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="block px-3 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-brand-cream rounded-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.title}
              </Link>
            ))}
            <div className="border-t border-border/40 my-4" />
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-brand-cream rounded-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border/40 my-4" />
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
            <Button asChild className="w-full mt-3 text-xs tracking-widest uppercase font-semibold py-5">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;