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
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Stones Landscaping" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-white/70 mb-4">
              Premium landscaping and hardscape contractor serving San Jose and the greater Bay Area since 2017.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {BUSINESS.address}
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="h-4 w-4 shrink-0" /> License #{BUSINESS.license}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-white/70 hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/patio-walkway-installations" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Patio & Walkways
                </Link>
              </li>
              <li>
                <Link to="/pergolas-shade-structures" className="text-sm text-white/70 hover:text-primary transition-colors">
                  Pergolas & Shade
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <Link to={area.path} className="text-sm text-white/70 hover:text-primary transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {BUSINESS.name} All rights reserved. License #{BUSINESS.license} — {BUSINESS.licenseClassifications}
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link to="/pavers-vs-concrete" className="hover:text-primary transition-colors">Pavers vs Concrete</Link>
            <Link to="/artificial-turf-vs-sod" className="hover:text-primary transition-colors">Turf vs Sod</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
