import { Link } from "react-router-dom";
import { Check, Star, ArrowRight, Clock, MapPin, Building2, Home } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const tiers = [
  {
    name: "Essential",
    subtitle: "Standard Clean",
    price: "From $120",
    per: "/visit",
    note: "2–3 bed / 2 bath",
    desc: "For those who appreciate a consistently clean home. Perfect for regular upkeep.",
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
    price: "From $180",
    per: "/visit",
    note: "Same home size",
    desc: "Our most popular tier — elevated care for the discerning homeowner.",
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
    subtitle: "Move-In / Move-Out",
    price: "From $200",
    per: "/visit",
    note: "Full property",
    desc: "Comprehensive service for moves, large homes, and commercial spaces.",
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

const estimates = [
  { bedrooms: "1 Bedroom", range: "$100 – $140" },
  { bedrooms: "2 Bedrooms", range: "$130 – $180" },
  { bedrooms: "3 Bedrooms", range: "$150 – $220" },
  { bedrooms: "4+ Bedrooms", range: "$180 – $300" },
];

const priceFactors = [
  "Size of the home",
  "Level of dirt / cleanliness",
  "Pets (hair removal)",
  "Frequency (weekly is cheaper)",
  "Extras (fridge, oven, windows)",
];

const Pricing = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding py-24 md:py-32 bg-background">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Plans</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Transparent<br /><span className="italic font-normal">Pricing</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Honest, competitive rates for Palm Beach County. Every quote is customized to your space — no hidden fees, no surprises.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-body font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" /> Serving Palm Beach County
            </span>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-body font-semibold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5" /> Commercial Available
            </span>
          </div>
          <div className="luxury-divider mt-8" />
        </AnimatedSection>
      </section>

      {/* Tiers */}
      <section className="section-padding py-16 bg-champagne-warm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.15}>
              <div
                className={`relative rounded-3xl p-8 md:p-10 h-full flex flex-col ${
                  tier.popular ? "glass-card-ocean border-primary/20" : "glass-card"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-wider uppercase">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">{tier.subtitle}</p>
                  <div className="mb-3">
                    <span className="font-display text-3xl font-bold text-foreground">{tier.price}</span>
                    <span className="font-body text-sm text-muted-foreground">{tier.per}</span>
                  </div>
                  <p className="font-body text-xs text-primary/80 font-medium">{tier.note}</p>
                  <p className="font-body text-sm text-muted-foreground mt-2">{tier.desc}</p>
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
      </section>

      {/* Hourly Rate + Quick Estimate */}
      <section className="section-padding py-16 pb-8 bg-champagne-warm">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Quick Estimate */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Home className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-bold text-foreground">Quick Estimate</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-6">Approximate standard cleaning rates by home size:</p>
              <div className="space-y-3">
                {estimates.map((e) => (
                  <div key={e.bedrooms} className="flex items-center justify-between py-3 px-4 rounded-xl bg-background/50">
                    <span className="font-body text-sm font-medium text-foreground">{e.bedrooms}</span>
                    <span className="font-display text-lg font-bold text-primary">{e.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Hourly + Factors */}
          <AnimatedSection delay={0.15}>
            <div className="space-y-6 h-full flex flex-col">
              {/* Hourly */}
              <div className="glass-card-ocean rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-bold text-foreground">Hourly Rate</h3>
                </div>
                <div className="mb-2">
                  <span className="font-display text-3xl font-bold text-foreground">$20 – $30</span>
                  <span className="font-body text-sm text-muted-foreground"> /hr per person</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">Flexible option for smaller tasks or custom requests.</p>
              </div>

              {/* Factors */}
              <div className="glass-card rounded-2xl p-8 flex-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">What Affects the Price</h3>
                <ul className="space-y-3">
                  {priceFactors.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-body text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 pb-32 bg-champagne-warm">
        <AnimatedSection delay={0.3} className="max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Ready for a Spotless Space?</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Every home is different. Contact us for a personalized estimate — we'll tailor the perfect plan for your space, schedule, and budget.
            </p>
            <Link to="/contact" className="btn-luxury inline-flex items-center gap-2">
              Get Your Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Pricing;
