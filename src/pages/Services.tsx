import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Home, Droplets, Truck, PartyPopper } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import bedroomImg from "@/assets/service-bedroom.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import eventImg from "@/assets/service-event.jpg";

const serviceDetails = [
  {
    icon: Home,
    title: "White-Glove Maid Service",
    tagline: "Perfection in every detail",
    desc: "Our signature service delivers an unparalleled clean. Trained professionals use premium, eco-friendly products to transform every room into a sanctuary of freshness.",
    features: ["Full-home deep clean", "Premium eco-friendly products", "Linen pressing & arrangement", "Bespoke scent curation", "Detail-obsessed team"],
    img: bedroomImg,
  },
  {
    icon: Droplets,
    title: "Deep Sanitization",
    desc: "Hospital-grade disinfection meets luxury care. Using advanced UV-C technology and medical-grade solutions, we eliminate 99.99% of bacteria and viruses.",
    tagline: "Science meets serenity",
    features: ["UV-C sterilization", "HEPA air purification", "Allergen neutralization", "Surface antimicrobial coating", "Air quality testing"],
    img: kitchenImg,
  },
  {
    icon: Truck,
    title: "Moving Day Prep",
    desc: "Seamless transitions for your next chapter. We prepare your new space to move-in perfection or restore your previous home to showroom condition.",
    tagline: "Effortless transitions",
    features: ["Pre-move deep clean", "Post-move setup", "Cabinet & closet prep", "Appliance detailing", "Window & glass polishing"],
    img: bathroomImg,
  },
  {
    icon: PartyPopper,
    title: "Post-Event Restoration",
    desc: "Return your space to pristine perfection after any occasion. From intimate dinners to grand celebrations, we handle the aftermath with grace.",
    tagline: "Wake up to perfection",
    features: ["Same-day service available", "Stain & spill treatment", "Furniture restoration", "Full kitchen reset", "Odor neutralization"],
    img: eventImg,
  },
];

// Quiz
const quizSteps = [
  { question: "What type of space do you have?", options: ["Apartment / Condo", "Single-Family Home", "Estate / Villa", "Commercial Space"] },
  { question: "How many bedrooms?", options: ["Studio / 1", "2–3", "4–5", "6+"] },
  { question: "What's your primary concern?", options: ["Regular maintenance", "Deep clean needed", "Moving in/out", "Post-event cleanup"] },
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
            Services Crafted<br /><span className="italic font-normal">with Intention</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every service is designed around you — your home, your standards, your peace of mind.
          </p>
          <div className="luxury-divider mt-8" />
        </AnimatedSection>
      </section>

      {/* Service details */}
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

      {/* Bespoke Service Builder Quiz */}
      <section className="section-padding py-24 bg-background">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Personalized</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bespoke Service<br /><span className="italic font-normal">Builder</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12 leading-relaxed">
            Answer a few questions and we'll craft a cleaning plan tailored to your lifestyle.
          </p>

          <div className="glass-card-ocean rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!quizDone ? (
                <motion.div
                  key={quizStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex gap-2 justify-center mb-8">
                    {quizSteps.map((_, idx) => (
                      <div key={idx} className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${idx <= quizStep ? "bg-primary" : "bg-muted"}`} />
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-8">{quizSteps[quizStep].question}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quizSteps[quizStep].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleQuizAnswer(option)}
                        className="glass-card rounded-xl p-4 font-body text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-between group"
                      >
                        {option}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Your Plan is Ready</h3>
                  <p className="font-body text-muted-foreground mb-8">
                    Based on your preferences, we recommend our <strong className="text-foreground">Signature Package</strong> with bi-weekly service.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/pricing" className="btn-luxury">View Pricing</Link>
                    <button onClick={resetQuiz} className="btn-luxury-outline">Retake Quiz</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Services;
