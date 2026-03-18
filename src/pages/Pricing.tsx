import { Link } from "react-router-dom";
import { Check, Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const tiers = [
  {
    name: "Essential",
    subtitle: "Standard Clean",
    desc: "For those who appreciate a consistently clean home or office. Perfect for regular upkeep.",
    features: [
      "Full-home standard clean",
      "Kitchen & bathroom focus",
      "Vacuuming & mopping",
      "Surface dusting",
      "Trash removal",
    ],
    popular: false,
  },
  {
    name: "Signature",
    subtitle: "Deep Clean",
    desc: "Our most popular tier — elevated care for the discerning homeowner or business.",
    features: [
      "Everything in Essential",
      "Deep appliance cleaning",
      "Interior window cleaning",
      "Baseboard & detail cleaning",
      "Cabinet & closet interiors",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Estate",
    subtitle: "Premium Service",
    desc: "The ultimate in professional care — comprehensive service for large homes and commercial spaces.",
    features: [
      "Everything in Signature",
      "Full property coverage",
      "Post-construction cleanup",
      "Move-in / move-out ready",
      "Dedicated team lead",
      "Carpet & upholstery treatment",
      "Same-day availability",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <main className="pt-20">
      <section className="section-padding py-24 md:py-32 bg-background">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Plans</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Flexible<br /><span className="italic font-normal">Service Plans</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every home and business is unique. We provide custom quotes based on your space, needs, and schedule — no hidden fees, no surprises.
          </p>
          <div className="luxury-divider mt-8" />
        </AnimatedSection>
      </section>

      <section className="section-padding py-16 pb-32 bg-champagne-warm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.15}>
              <div
                className={`relative rounded-3xl p-8 md:p-10 h-full flex flex-col ${
                  tier.popular
                    ? "glass-card-ocean border-primary/20"
                    : "glass-card"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-wider uppercase">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">{tier.subtitle}</p>
                  <p className="font-body text-sm text-muted-foreground">{tier.desc}</p>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-body text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`${tier.popular ? "btn-luxury" : "btn-luxury-outline"} text-center flex items-center justify-center gap-2`}
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="max-w-3xl mx-auto mt-16 text-center">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">How We Price</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Our pricing is customized based on the size of your space, the type of cleaning needed, and the frequency of service. Whether it's a one-time deep clean or a recurring plan, we'll work with you to find the right fit for your budget.
            </p>
            <Link to="/contact" className="inline-block mt-6 font-body text-sm text-primary font-semibold tracking-wide hover:underline">
              Contact us for a personalized estimate →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Pricing;
