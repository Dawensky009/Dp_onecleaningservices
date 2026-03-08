import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-interior.jpg";
import bedroomImg from "@/assets/service-bedroom.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import bathroomImg from "@/assets/service-bathroom.jpg";
import eventImg from "@/assets/service-event.jpg";

const services = [
  { title: "White-Glove Maid Service", desc: "Meticulous attention to every surface, corner, and detail of your home.", img: bedroomImg, span: "md:col-span-2 md:row-span-2" },
  { title: "Deep Sanitization", desc: "Hospital-grade disinfection meets luxury care.", img: kitchenImg, span: "md:col-span-1 md:row-span-1" },
  { title: "Moving Day Prep", desc: "Seamless transitions for your next chapter.", img: bathroomImg, span: "md:col-span-1 md:row-span-1" },
  { title: "Post-Event Restoration", desc: "Return your space to pristine perfection after any occasion.", img: eventImg, span: "md:col-span-2 md:row-span-1" },
];

const stats = [
  { icon: Sparkles, label: "Homes Transformed", value: "2,400+" },
  { icon: Shield, label: "Satisfaction Rate", value: "99.8%" },
  { icon: Clock, label: "Years of Excellence", value: "12" },
  { icon: Star, label: "5-Star Reviews", value: "1,800+" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Sun-drenched luxury minimalist living room with ocean view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative z-10 section-padding max-w-3xl pt-32 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-ocean-light mb-6"
          >
            Luxury Home Cleaning
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] mb-8"
          >
            Beyond Clean:<br />
            <span className="italic font-normal">A Sanctuary</span><br />
            for Your Soul
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Experience the art of immaculate living. Our bespoke cleaning services transform your home into a haven of tranquility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/services" className="btn-luxury">Discover Our Services</Link>
            <Link to="/pricing" className="btn-luxury-outline border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-20 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="section-padding py-24 bg-champagne-warm">
        <AnimatedSection className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crafted for the<br /><span className="italic font-normal">Exceptional Home</span>
          </h2>
          <div className="luxury-divider mt-6" />
        </AnimatedSection>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 auto-rows-[250px]">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1} className={`${service.span} group relative rounded-2xl overflow-hidden cursor-pointer`}>
              <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-2">{service.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70 max-w-md">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-12">
          <Link to="/services" className="btn-luxury">Explore All Services</Link>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="section-padding py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <AnimatedSection className="max-w-3xl mx-auto text-center relative z-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Ready to Begin?</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Home Deserves<br /><span className="italic font-normal">Nothing Less</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule a complimentary consultation and discover how Pristine can elevate your living experience.
          </p>
          <Link to="/contact" className="btn-luxury">Schedule a Consultation</Link>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Index;
