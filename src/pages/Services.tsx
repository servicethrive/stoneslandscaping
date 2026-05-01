import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Flame, Trees, MapPin, DollarSign, Users, FileCheck, ShieldCheck, ClipboardList, HardHat } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { SERVICES, IMAGES } from "@/lib/constants";
import { getBreadcrumbSchema, getFAQSchema, SITE_URL } from "@/lib/structured-data";

const findService = (path: string) => SERVICES.find((s) => s.path === path)!;

const categories = [
  {
    title: "Hardscape & Stonework",
    icon: Hammer,
    blurb: "The structural backbone of your outdoor space — built on proper base prep and engineered to last decades.",
    items: [
      findService("/pavers"),
      findService("/hardscape"),
      findService("/retaining-walls"),
      findService("/concrete-driveways"),
    ],
  },
  {
    title: "Outdoor Living",
    icon: Flame,
    blurb: "Custom-built spaces that turn your backyard into the place you'd rather be.",
    items: [findService("/outdoor-kitchens")],
  },
  {
    title: "Landscape & Greenery",
    icon: Trees,
    blurb: "Plantings, lawns, and design that frame the hardscape and bring the whole yard to life.",
    items: [findService("/landscaping"), findService("/artificial-turf")],
  },
];

const bundles = [
  {
    name: "The Backyard Refresh",
    tagline: "For homeowners who want a usable yard without a full tear-out.",
    services: ["Pavers", "Landscaping", "Artificial Turf"],
    includes: ["New paver patio or walkway", "Refreshed plantings & irrigation", "Low-maintenance turf lawn"],
    scope: "Most refresh projects fall in the $35K–$80K range.",
  },
  {
    name: "The Entertainer's Yard",
    tagline: "Built for hosting — Friday nights, weekend BBQs, and everything in between.",
    services: ["Hardscape", "Outdoor Kitchen", "Landscaping"],
    includes: ["Patio + fire feature", "Built-in BBQ island & counter seating", "Pergola & accent lighting"],
    scope: "Entertainer builds typically start around $90K and scale with finishes.",
  },
  {
    name: "The Curb Appeal Upgrade",
    tagline: "First impressions, engineered. The package most buyers see before anything else.",
    services: ["Concrete Driveway", "Pavers", "Landscaping"],
    includes: ["New concrete or paver driveway", "Walkway & entry hardscape", "Front yard plantings & lighting"],
    scope: "Front-yard transformations generally start around $40K.",
  },
];

const includedItems = [
  { icon: HardHat, title: "Licensed in-house crews", desc: "We don't subcontract the build. The team on your job is the team on payroll." },
  { icon: ClipboardList, title: "Integrated design", desc: "Hardscape, plantings, and structures designed together so nothing fights for space." },
  { icon: FileCheck, title: "Permit & HOA handling", desc: "We pull permits and coordinate with HOAs so you don't have to chase paperwork." },
  { icon: DollarSign, title: "Itemized, transparent quotes", desc: "Line-item proposals — you see exactly what each component costs and why." },
  { icon: Users, title: "Single project manager", desc: "One point of contact from kickoff to walkthrough. No phone tag between trades." },
  { icon: ShieldCheck, title: "One warranty owner", desc: "21-year paver warranty and 90-day landscape guarantee, all backed by us — not a vendor." },
];

const faqs = [
  {
    question: "Can I hire you for just one service?",
    answer: "Yes. While most of our projects combine multiple services, we regularly take on single-scope jobs — a paver patio, a retaining wall, an outdoor kitchen, a turf install. Same crews, same warranty, same standards.",
  },
  {
    question: "Do you subcontract any of the work?",
    answer: "Construction, hardscape, and landscape installation are handled by our in-house crews. Specialty trades that legally require their own license — gas plumbing for outdoor kitchens, high-voltage electrical, structural engineering — are performed by long-term licensed partners we've worked with for years.",
  },
  {
    question: "What's the typical timeline for a multi-service project?",
    answer: "Single-service projects (a patio or driveway) usually take 1–3 weeks of build time. Multi-service backyards run 4–10 weeks depending on scope, permit timing, and material lead times. We sequence the trades so the site is productive every day, not waiting on the next crew.",
  },
  {
    question: "Do you handle city permits and HOA approvals?",
    answer: "Yes. We pull all required city and county permits — drainage, grading, structural — and we prepare HOA submittal packages with renderings and material specs. You sign one approval and we handle the rest.",
  },
  {
    question: "Can I phase the project over multiple years?",
    answer: "Absolutely, and we encourage it when budgets are tight. We design the full master plan up front so phase 1 (e.g., grading and hardscape) sets up phase 2 (kitchen and pergola) and phase 3 (plantings and lighting) without any rework. The plan is yours to keep regardless of when you build.",
  },
];

const Services = () => {
  usePageMeta(
    "Services | Hardscape, Landscape & Outdoor Living | San Jose",
    "Explore every service offered by Stones Landscaping: paver patios, hardscape, outdoor kitchens, retaining walls, landscape design & turf in San Jose."
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stones Landscaping Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${s.path}`,
      name: s.title,
    })),
  };

  return (
    <Layout>
      <StructuredData data={getBreadcrumbSchema([{ name: "Services", path: "/services" }])} />
      <StructuredData data={itemListSchema} />
      <StructuredData data={getFAQSchema(faqs)} />

      {/* 1. Hero */}
      <section className="relative bg-brand-dark pt-40 pb-24 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/85 to-brand-dark" aria-hidden />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">Full-Service Outdoor Living</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Outdoor Living, Designed & Built in One Place
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
            Seven services. One licensed contractor. A single team accountable for the whole project — from the first sketch to the final stone set in the ground.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-xs px-8 py-6 tracking-widest uppercase font-semibold">
              <Link to="/contact">Request a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-xs px-8 py-6 tracking-widest uppercase font-semibold bg-transparent border-white/40 text-white hover:bg-white hover:text-foreground">
              <Link to="/gallery">View Our Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">Why Every Service Lives Under One Roof</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg leading-relaxed">
              Most outdoor projects fall apart at the seams between trades. We removed those seams — the people who design your patio are the people who pour the base, plant the trees, and hand you the keys.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "One Team, One Standard", body: "Hardscape crews, landscape crews, and project managers all answer to the same standards. No quality drop between phases." },
              { title: "Designed As One Project", body: "Plantings know where the patio drains. The kitchen knows where the gas line runs. Nothing gets retrofit because nothing was an afterthought." },
              { title: "One Warranty, One Phone Number", body: "When something needs attention five years from now, you call us — not a chain of vendors pointing at each other." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Full Service Catalog — grouped */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">The Full Service Catalog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              Every discipline you need to complete an outdoor space — organized by what they actually do for your yard.
            </p>
          </div>
          <div className="space-y-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title}>
                  <div className="flex items-start gap-4 mb-6 pb-4 border-b border-border">
                    <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">{cat.title}</h3>
                      <p className="text-muted-foreground text-sm font-light mt-1">{cat.blurb}</p>
                    </div>
                  </div>
                  <div className="divide-y divide-border/60">
                    {cat.items.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="group flex items-center justify-between gap-6 py-5 hover:bg-brand-cream/40 px-4 -mx-4 rounded-sm transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h4>
                          <p className="text-sm text-muted-foreground font-light mt-1 line-clamp-2">{s.description}</p>
                        </div>
                        <span className="flex-shrink-0 inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How Services Combine */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How Our Services Combine</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              Most projects use 2–4 services together. Here's how those bundles tend to come together for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {bundles.map((b) => (
              <div key={b.name} className="bg-background rounded-sm p-8 border border-border/60 flex flex-col">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{b.name}</h3>
                <p className="text-sm text-muted-foreground font-light italic mb-5 leading-relaxed">{b.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {b.services.map((s) => (
                    <span key={s} className="text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-sm">
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {b.includes.map((inc) => (
                    <li key={inc} className="text-sm text-foreground font-light flex gap-2">
                      <span className="text-primary flex-shrink-0">—</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground font-medium pt-5 border-t border-border/60">{b.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What's Included With Every Service */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What's Included With Every Service</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              No matter which scope you hire us for, every project includes the same operational foundation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {includedItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Service Area + Pricing crossroads */}
      <section className="py-20 lg:py-28 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/service-areas"
              className="group bg-background border border-border/60 rounded-sm p-8 hover:border-primary transition-colors"
            >
              <MapPin className="h-7 w-7 text-primary mb-5" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Where We Work</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">
                Serving San Jose, Atherton, Los Gatos, Saratoga, and the broader Silicon Valley. See the full service map and our city-specific landing pages.
              </p>
              <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                Explore Service Areas <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/our-process"
              className="group bg-background border border-border/60 rounded-sm p-8 hover:border-primary transition-colors"
            >
              <ClipboardList className="h-7 w-7 text-primary mb-5" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">How We Price & Build</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">
                Itemized proposals, fixed scope, and clear milestones. See our consultation-to-completion process and what to expect at every stage.
              </p>
              <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                See Our Process <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQAccordion faqs={faqs} title="Questions About Our Services" />

      {/* 8. Final CTA */}
      <CTABanner
        title="Not Sure Which Services You Need?"
        subtitle="Tell us what's not working in your yard. We'll help you scope the right combination — and a budget to match."
        backgroundImage={IMAGES.ctaHardscape}
      />
    </Layout>
  );
};

export default Services;
