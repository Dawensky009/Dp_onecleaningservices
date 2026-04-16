import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Home, Droplets, Truck, PartyPopper, Building2, Star, Clock, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import bedroomImg from "@/assets/service-bedroom.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import eventImg from "@/assets/service-event.jpg";

const serviceDetails = [
  {
    icon: Home,
    title: "Residential Cleaning",
    tagline: "Your home, spotless",
    desc: "From kitchens and bathrooms to bedrooms and living rooms — we deliver a thorough, professional clean for every corner of your home using eco-friendly products.",
    features: ["Kitchen deep clean", "Bathroom sanitization", "Bedroom & living room care", "Vacuuming & mopping", "Surface dusting & baseboard cleaning"],
    img: bedroomImg,
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    tagline: "A clean workspace, a productive team",
    desc: "Professional cleaning for small to midsize offices and commercial spaces. We keep your business environment healthy, presentable, and inviting.",
    features: ["Office & workspace cleaning", "Restroom sanitization", "Break room & common areas", "Floor care & vacuuming", "Flexible after-hours scheduling"],
    img: kitchenImg,
  },
  {
    icon: Droplets,
    title: "Deep Sanitization",
    tagline: "Beyond surface clean",
    desc: "Intensive cleaning and disinfection using professional-grade solutions. Ideal for allergy sufferers, new homeowners, or seasonal refreshes.",
    features: ["Appliance deep cleaning", "Allergen reduction", "Cabinet & closet interiors", "Tile & grout scrubbing", "Window tracks & sills"],
    img: bathroomImg,
  },
  {
    icon: Truck,
    title: "Moving Day Prep",
    tagline: "Effortless transitions",
    desc: "Whether moving in or out, we prepare your space to perfection — ensuring it's spotless for the next chapter.",
    features: ["Pre-move deep clean", "Post-move setup clean", "Cabinet & closet prep", "Appliance detailing", "Window & glass polishing"],
    img: bathroomImg,
  },
  {
    icon: PartyPopper,
    title: "Post-Event Restoration",
    tagline: "Wake up to a clean space",
    desc: "After any gathering — from intimate dinners to large events — we handle the cleanup so you don't have to.",
    features: ["Same-day service available", "Stain & spill treatment", "Full kitchen reset", "Trash & debris removal", "Odor neutralization"],
    img: eventImg,
  },
];

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

const quizSteps = [
  { question: "What type of space do you need cleaned?", options: ["Home / Apartment", "Office / Commercial", "Both Residential & Commercial", "Other"] },
  { question: "How large is the space?", options: ["Under 1,000 sq ft", "1,000–2,000 sq ft", "2,000–4,000 sq ft", "4,000+ sq ft"] },
  { question: "What type of cleaning do you need?", options: ["Regular maintenance", "Deep clean", "Move-in / move-out", "Post-event cleanup"] },
  { question: "How often would you like service?", options: ["One-time", "Weekly", "Bi-weekly", "Monthly"] },
];

const Services = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizDone, setQuizDone] = useState(false);

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    if (quizStep < quizSteps.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizDone(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizDone(false);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding py-24 md:py-32 bg-background">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">What We Offer</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Professional<br /><span className="italic font-normal">Cleaning Services</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Residential and commercial cleaning tailored to your needs — delivered by a professional, friendly team.
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

      {/* Service Details */}
      <section className="section-padding py-16 bg-champagne-warm">
        <div className="max-w-6xl mx-auto space-y-24">
          {serviceDetails.map((service, i) => (
            <AnimatedSection key={service.title} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img src={service.img} alt={service.title} className="w-full h-80 md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>
              </div>
              <div className="md:w-1/2">
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">{service.tagline}</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding py-24 bg-background">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Plans</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transparent<br /><span className="italic font-normal">Pricing</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Honest, competitive rates for Palm Beach County. Every quote is customized to your space — no hidden fees, no surprises.
          </p>
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.15}>
              <div className={`relative rounded-3xl p-8 md:p-10 h-full flex flex-col ${tier.popular ? "glass-card-ocean border-primary/20" : "glass-card"}`}>
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
                <Link to="/contact" className={`${tier.popular ? "btn-luxury" : "btn-luxury-outline"} text-center flex items-center justify-center gap-2`}>
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Quick Estimate + Hourly Rate + Factors */}
      <section className="section-padding py-16 bg-champagne-warm">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
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
          <AnimatedSection delay={0.15}>
            <div className="space-y-6 h-full flex flex-col">
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

      {/* Find Your Perfect Plan Quiz */}
      <section className="section-padding py-24 bg-background">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Personalized</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your<br /><span className="italic font-normal">Perfect Plan</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12 leading-relaxed">
            Answer a few questions and we'll recommend the right cleaning plan for your space.
          </p>
          <div className="glass-card-ocean rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!quizDone ? (
                <motion.div key={quizStep} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="w-full">
                  <div className="flex gap-2 justify-center mb-8">
                    {quizSteps.map((_, idx) => (
                      <div key={idx} className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${idx <= quizStep ? "bg-primary" : "bg-muted"}`} />
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-8">{quizSteps[quizStep].question}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quizSteps[quizStep].options.map((option) => (
                      <button key={option} onClick={() => handleQuizAnswer(option)} className="glass-card rounded-xl p-4 font-body text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-between group">
                        {option}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">We've Got You Covered</h3>
                  <p className="font-body text-muted-foreground mb-8">
                    Based on your answers, we'll put together a personalized quote. Contact us to get started!
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/contact" className="btn-luxury">Get Your Free Quote</Link>
                    <button onClick={resetQuiz} className="btn-luxury-outline">Retake Quiz</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
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

export default Services;
