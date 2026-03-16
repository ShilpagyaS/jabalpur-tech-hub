import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Gamer",
    text: "Got my dream gaming PC built here. RTX 4070 Ti setup runs everything on ultra. Best prices in Jabalpur, hands down!",
    stars: 5,
  },
  {
    name: "Dr. Priya Verma",
    role: "Clinic Owner",
    text: "Microland set up all 5 computers for my clinic. Reliable machines, excellent after-sales service. Highly recommended.",
    stars: 5,
  },
  {
    name: "Ankit Jain",
    role: "Stock Trader",
    text: "Multi-monitor trading setup works flawlessly. They understood exactly what I needed. Professional team!",
    stars: 5,
  },
  {
    name: "Sneha Tiwari",
    role: "Engineering Student",
    text: "Got a budget laptop for college that handles AutoCAD smoothly. Great guidance and honest pricing.",
    stars: 5,
  },
  {
    name: "Vikram Patel",
    role: "Software Developer",
    text: "My workstation build is a beast — 64GB RAM, fast NVMe. Compilation times dropped dramatically. Thank you Microland!",
    stars: 5,
  },
  {
    name: "Mohit Gupta",
    role: "Business Owner",
    text: "Purchased 10 office computers. Bulk pricing was unbeatable. Setup and delivery was smooth and professional.",
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 circuit-bg relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="font-mono-tech text-xs text-accent uppercase mb-3">Testimonials</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
          What Our Customers Say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 border border-white/5 relative group hover:border-accent/20 transition-colors"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10 group-hover:text-accent/20 transition-colors" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
