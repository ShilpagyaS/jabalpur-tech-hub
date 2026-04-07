import { motion } from "framer-motion";
import { DollarSign, Truck, ShieldCheck, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Best Prices",
    desc: "Affordable pricing with best deals in Jabalpur.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Same-day delivery available in city.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    desc: "All products come with genuine warranty.",
  },
  {
    icon: MessageCircle,
    title: "Customer Service",
    desc: "Friendly support before & after purchase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center bg-card p-6 rounded-xl border border-white/5 hover:border-primary/40 transition"
            >
              {/* Icon */}
              <div className="mb-3 p-3 rounded-full bg-primary/10">
                <r.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm mb-1">
                {r.title}
              </h3>

              {/* Desc */}
              <p className="text-xs text-muted-foreground">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
