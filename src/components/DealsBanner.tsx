import { motion } from "framer-motion";
import { Zap, MessageCircle, Tag, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919827065718?text=Hi%20Microland%2C%20I%20want%20to%20know%20about%20today%27s%20deals.";

const deals = [
  {
    badge: "🔥 Hot Deal",
    title: "Gaming PC Starter Build",
    desc: "i5 13th Gen + RTX 4060 + 16GB RAM + 512GB NVMe",
    cta: "Get Today's Price",
  },
  {
    badge: "💼 Office Special",
    title: "Complete Office Setup",
    desc: "PC + Monitor + Keyboard + Mouse + UPS — Ready to work",
    cta: "Get Quote",
  },
  {
    badge: "🎓 Student Offer",
    title: "Budget Laptop Deals",
    desc: "Starting from ₹25,000 — Perfect for college",
    cta: "Check Availability",
  },
];

const DealsBanner = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono-tech text-primary uppercase">Limited Time</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
          Today's Best Deals
        </h2>
        <p className="text-muted-foreground mt-3 text-sm">
          Message on WhatsApp for today's lowest price
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {deals.map((deal, i) => (
          <motion.a
            key={deal.title}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-glow relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-xs font-semibold">{deal.badge}</span>
            </div>
            <h3 className="font-bold text-lg mb-2">{deal.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{deal.desc}</p>
            <div className="flex items-center gap-2 text-primary text-sm font-semibold">
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              {deal.cta}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default DealsBanner;
