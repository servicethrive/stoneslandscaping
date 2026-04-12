import { usePageMeta } from "@/hooks/use-page-meta";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BUSINESS } from "@/lib/constants";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  usePageMeta(
    "Contact Us | Request a Free Estimate in San Jose, CA | Stones Landscaping Inc.",
    "Contact Stones Landscaping for a free estimate in San Jose. Call, email, or fill out our form. Licensed hardscape & landscaping contractor."
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Estimate Request Received",
      description: "Thank you! We'll be in touch within 1 business day.",
    });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-brand-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Request a Free Estimate</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Tell us about your project and we'll schedule a free on-site consultation. Most estimates are delivered within 48 hours of the site visit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Project Details</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(408) 555-0123" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                    >
                      <option value="">Select a service</option>
                      <option value="Pavers">Pavers</option>
                      <option value="Hardscape">Hardscape</option>
                      <option value="Landscaping">Landscaping</option>
                      <option value="Concrete Driveways">Concrete Driveways</option>
                      <option value="Outdoor Kitchens">Outdoor Kitchens</option>
                      <option value="Retaining Walls">Retaining Walls</option>
                      <option value="Artificial Turf">Artificial Turf</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Project Description *</Label>
                  <textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project - what you're looking for, your timeline, and any specific details."
                    rows={5}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1 resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="text-base px-8">
                  Submit Estimate Request
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-5">
                <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-start gap-3 group">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{BUSINESS.phone}</p>
                    <p className="text-xs text-muted-foreground">Call us directly</p>
                  </div>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 group">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm break-all">{BUSINESS.email}</p>
                    <p className="text-xs text-muted-foreground">Email us anytime</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{BUSINESS.address}</p>
                    <p className="text-xs text-muted-foreground">Office location</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">License #{BUSINESS.license}</p>
                    <p className="text-xs text-muted-foreground">{BUSINESS.licenseClassifications}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-brand-cream rounded-lg">
                <h3 className="font-bold text-foreground mb-2 text-sm">What Happens Next?</h3>
                <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal pl-4">
                  <li>We review your project details</li>
                  <li>Schedule a free on-site consultation</li>
                  <li>Deliver a detailed proposal within 48 hours of the visit</li>
                </ol>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  Flexible financing options are available for qualifying projects. Ask during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
