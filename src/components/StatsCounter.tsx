import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Monitor, Clock, Award } from "lucide-react";

const stats = [
  { icon: Clock, value: 15, suffix: "+", label: "Years in Jabalpur", color: "text-primary" },
  { icon: Monitor, value: 5000, suffix: "+", label: "PCs Built & Sold", color: "text-primary" },
  { icon: Users, value: 10000, suffix: "+", label: "Happy Customers", color: "text-accent" },
  { icon: Award, value: 100, suffix: "%", label: "Genuine Products", color: "text-accent" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono-tech text-3xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const StatsCounter = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} strokeWidth={1.5} />
            <div className={stat.color}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsCounter;
