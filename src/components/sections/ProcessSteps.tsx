interface Step {
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  { title: "Consultation", description: "Schedule a free on-site visit. We assess your property, discuss your vision, and outline project possibilities." },
  { title: "Design & Proposal", description: "Receive a detailed proposal with scope, timeline, and pricing. 2D/3D renderings available for qualifying projects." },
  { title: "Build", description: "Our experienced crew handles full construction with clear communication, clean job sites, and quality craftsmanship." },
  { title: "Final Walkthrough", description: "We walk the finished project together, confirm every detail meets your expectations, and hand over your warranty." },
];

interface ProcessStepsProps {
  steps?: Step[];
  title?: string;
  subtitle?: string;
}

const ProcessSteps = ({
  steps = defaultSteps,
  title = "How It Works",
  subtitle,
}: ProcessStepsProps) => (
  <section className="py-20 lg:py-28 bg-brand-light-grey relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">{title}</h2>
        {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto font-light">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative">
        {/* Connecting line on desktop */}
        <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-primary/20" />
        {steps.map((step, i) => (
          <div key={i} className="text-center group relative">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-display font-bold mx-auto mb-5 relative z-10 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              {i + 1}
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
