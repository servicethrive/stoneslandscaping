import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

const FAQAccordion = ({ faqs, title = "Frequently Asked Questions" }: FAQAccordionProps) => (
  <section className="py-20 lg:py-28 bg-brand-cream">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border/60 rounded-sm px-6 bg-background">
            <AccordionTrigger className="text-left text-sm font-semibold py-5 hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed font-light pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQAccordion;