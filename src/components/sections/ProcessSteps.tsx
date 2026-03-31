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
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
        {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {i + 1}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
