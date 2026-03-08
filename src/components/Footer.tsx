import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground section-padding py-16">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div>
        <h3 className="font-display text-2xl font-bold mb-4">
          Pristine<span className="text-ocean-light">.</span>
        </h3>
        <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
          Beyond clean. A sanctuary for your soul.
        </p>
      </div>
      <div>
        <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/40">Navigate</h4>
        <div className="flex flex-col gap-2">
          {["Home", "Services", "Pricing", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/40">Services</h4>
        <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/60">
          <span>White-Glove Maid Service</span>
          <span>Deep Sanitization</span>
          <span>Moving Day Prep</span>
          <span>Post-Event Restoration</span>
        </div>
      </div>
      <div>
        <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/40">Contact</h4>
        <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/60">
          <span>hello@pristinehome.com</span>
          <span>+1 (555) 000-1234</span>
          <span>Beverly Hills, CA 90210</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center">
      <p className="font-body text-xs text-primary-foreground/30">
        © 2026 Pristine. All rights reserved. Luxury home cleaning redefined.
      </p>
    </div>
  </footer>
);

export default Footer;
