import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const tiers = [
  {
    name: "Essential",
    price: "$199",
    period: "per visit",
    desc: "For those who appreciate a consistently clean home.",
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
    price: "$399",
    period: "per visit",
    desc: "Our most popular tier — elevated care for the discerning homeowner.",
    features: [
      "Everything in Essential",
      "Deep appliance cleaning",
      "Linen pressing & bed making",
      "Interior window cleaning",
      "Bespoke scent curation",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Estate",
    price: "$799",
    period: "per visit",
    desc: "The ultimate in luxury home care — white-glove service for grand residences.",
    features: [
      "Everything in Signature",
      "Full estate coverage",
      "Art & antique dusting",
      "Outdoor living areas",
      "Dedicated team lead",
      "24/7 concierge support",
      "Post-service inspection",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <main className="pt-20">
      <section className="section-padding py-24 md:py-32 bg-background">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Investment</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Transparent<br /><span className="italic font-normal">Pricing</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No compromises. Choose the tier that reflects your standards.
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
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-6">{tier.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold text-foreground">{tier.price}</span>
                    <span className="font-body text-sm text-muted-foreground">/{tier.period.split(" ")[1]}</span>
                  </div>
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
                  className={tier.popular ? "btn-luxury text-center" : "btn-luxury-outline text-center"}
                >
                  Get Started
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
