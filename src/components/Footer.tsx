import { Link } from "react-router-dom";
import logo from "@/assets/dp-one-logo.jpeg";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground section-padding py-16">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div>
        <img src={logo} alt="DP One Multi-Services LLC" className="h-14 w-auto object-contain mb-4 brightness-0 invert" />
        <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
          Professional cleaning services for residential and commercial spaces.
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
          <span>Residential Cleaning</span>
          <span>Commercial Cleaning</span>
          <span>Deep Sanitization</span>
          <span>Moving Day Prep</span>
          <span>Post-Event Restoration</span>
        </div>
      </div>
      <div>
        <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/40">Contact</h4>
        <div className="flex flex-col gap-2 font-body text-sm text-primary-foreground/60">
          <a href="mailto:pdonalson686@gmail.com" className="hover:text-primary-foreground transition-colors">pdonalson686@gmail.com</a>
          <a href="tel:5615991622" className="hover:text-primary-foreground transition-colors">(561) 599-1622</a>
          <span>100 E Linton Blvd, Ste 109B<br />Delray Beach, FL 33484</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center">
      <p className="font-body text-xs text-primary-foreground/30">
        © 2026 DP One Multi-Services LLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
