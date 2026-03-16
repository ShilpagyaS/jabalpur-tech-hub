import { motion } from "framer-motion";
import { Phone, MessageCircle, Wrench } from "lucide-react";
import heroPc from "@/assets/hero-pc.png";

const WHATSAPP_URL = "https://wa.me/919827065718?text=Hi%20Microland%2C%20I%27m%20interested%20in%20your%20computers.";
const PHONE_URL = "tel:+919827065718";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden circuit-bg">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="font-mono-tech text-xs text-primary uppercase tracking-widest">
            Jabalpur's #1 Computer Store
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-gradient-hero leading-[0.95]">
            Jabalpur's High-Performance Standard.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            From zero-latency gaming rigs to mission-critical medical workstations. 
            We don't just sell computers; we engineer your edge.
          </p>
          <div className="font-mono-tech text-xs text-muted-foreground">
            Genuine Parts · Local Trust · Global Performance
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={PHONE_URL}
              className="flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-semibold hover-lift"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold hover:shadow-glow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Chat on WhatsApp
            </a>
            <a
              href="#configurator"
              className="flex items-center gap-2 border border-accent/50 text-accent px-6 py-3 rounded-full text-sm font-semibold hover:shadow-glow-purple hover:border-accent transition-all duration-200"
            >
              <Wrench className="w-4 h-4" strokeWidth={1.5} />
              Build Your PC
            </a>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative animate-float">
            <img
              src={heroPc}
              alt="Custom Gaming PC with RGB lighting built by Microland Computers Jabalpur"
              className="w-full max-w-lg drop-shadow-[0_0_40px_hsl(190,90%,50%,0.2)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
