import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, SERVICES } from "@/lib/constants";
import logo from "@/assets/stones-landscaping-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Reviews", path: "/reviews" },
    { label: "Service Areas", path: "/service-areas" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-20 lg:h-24">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <img
            src={logo}
            alt="Stones Landscaping"
            className="h-12 lg:h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-sm shadow-2xl border border-border/60 pt-2 px-6 pb-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="group flex flex-col px-4 py-3 rounded-sm hover:bg-brand-cream transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {s.title}
                      </span>
                      <span className="text-xs text-muted-foreground font-light mt-0.5 line-clamp-1">
                        {s.description}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border/40 mt-4 pt-4">
                  <Link
                    to="/pavers-vs-concrete"
                    className="text-xs text-primary hover:underline font-medium tracking-wide"
                    onClick={() => setServicesOpen(false)}
                  >
                    Compare: Pavers vs Concrete →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 text-sm font-body font-medium tracking-wide text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-foreground"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <Button asChild className="text-xs px-6 py-5 tracking-widest uppercase font-semibold font-body">
            <Link to="/contact">Get A Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border/40 shadow-2xl max-h-[80vh] overflow-y-auto">
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
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get A Free Estimate</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
