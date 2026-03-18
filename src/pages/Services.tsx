import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Home, Droplets, Truck, PartyPopper, Building2 } from "lucide-react";
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
            Find Your<br /><span className="italic font-normal">Perfect Plan</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12 leading-relaxed">
            Answer a few questions and we'll recommend the right cleaning plan for your space.
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
    </main>
  );
};

export default Services;
