import { motion } from "framer-motion";
import { BadgeCheck, Wrench, MapPin, ShieldCheck, Zap, Users } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "Best Prices in Jabalpur", desc: "Competitive pricing with genuine products, guaranteed." },
  { icon: Wrench, title: "Custom PC Building", desc: "We assemble PCs tailored exactly to your workload and budget." },
  { icon: MapPin, title: "Trusted Local Shop", desc: "Serving Jabalpur since years from our Napier Town store." },
  { icon: ShieldCheck, title: "Genuine Products", desc: "Only authorized, warranty-backed components and laptops." },
  { icon: Zap, title: "Fast Service & Upgrades", desc: "Same-day assembly, quick repairs, and instant upgrades." },
  { icon: Users, title: "Expert Guidance", desc: "We help you choose the right build before you buy — no pressure." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-xs text-accent uppercase mb-3">Why Microland</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
            Why Jabalpur Trusts Us
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 bg-card rounded-lg p-5 shadow-subtle border border-white/5"
            >
              <r.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-sm mb-1">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
