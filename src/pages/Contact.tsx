import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "We'll be in touch within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="section-padding py-24 md:py-32 bg-background">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Let's Create Your<br /><span className="italic font-normal">Sanctuary</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary consultation. Our team will design a bespoke cleaning plan for your home.
          </p>
          <div className="luxury-divider mt-8" />
        </AnimatedSection>
      </section>

      <section className="section-padding py-16 pb-32 bg-champagne-warm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Info */}
          <AnimatedSection className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Contact Details</h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Visit Us", value: "123 Pristine Blvd, Beverly Hills, CA 90210" },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 000-1234" },
                  { icon: Mail, label: "Email Us", value: "hello@pristinehome.com" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-body text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">Hours</h4>
              <p className="font-body text-sm text-foreground">Monday – Saturday: 7am – 7pm</p>
              <p className="font-body text-sm text-foreground">Sunday: By appointment</p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Service Interest</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="maid">White-Glove Maid Service</option>
                    <option value="sanitization">Deep Sanitization</option>
                    <option value="moving">Moving Day Prep</option>
                    <option value="event">Post-Event Restoration</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your home and what you're looking for..."
                />
              </div>
              <button type="submit" className="btn-luxury flex items-center gap-2 mx-auto">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
