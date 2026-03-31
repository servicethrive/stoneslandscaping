import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import logo from "@/assets/stones-landscaping-logo.png";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Reviews", path: "/reviews" },
    { label: "Warranties", path: "/warranties" },
    { label: "Our Process", path: "/our-process" },
    { label: "Design Process", path: "/design-process" },
    { label: "Financing", path: "/financing" },
    { label: "FAQs", path: "/faqs" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 warm-texture opacity-20" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Stones Landscaping" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm text-white/60 mb-6 leading-relaxed font-light">
              Premium hardscape and outdoor living contractor serving Silicon Valley homeowners since 2017.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {BUSINESS.address}
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Shield className="h-4 w-4 shrink-0" /> License #{BUSINESS.license}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-white/60 hover:text-primary transition-colors font-light">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/patio-walkway-installations" className="text-sm text-white/60 hover:text-primary transition-colors font-light">
                  Patio & Walkways
                </Link>
              </li>
              <li>
                <Link to="/pergolas-shade-structures" className="text-sm text-white/60 hover:text-primary transition-colors font-light">
                  Pergolas & Shade
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary">Service Areas</h4>
            <ul className="space-y-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <Link to={area.path} className="text-sm text-white/60 hover:text-primary transition-colors font-light">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-primary transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-light">
            © {new Date().getFullYear()} {BUSINESS.name} All rights reserved. License #{BUSINESS.license} — {BUSINESS.licenseClassifications}
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/blog/pavers-vs-concrete" className="hover:text-primary transition-colors font-light">Pavers vs Concrete</Link>
            <Link to="/blog/artificial-turf-vs-sod" className="hover:text-primary transition-colors font-light">Turf vs Sod</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;