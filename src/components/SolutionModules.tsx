import { motion } from "framer-motion";
import { Gamepad2, Shield, Code2, Stethoscope, TrendingUp, GraduationCap, Briefcase, IndianRupee } from "lucide-react";

const solutions = [
  {
    icon: Gamepad2,
    title: "Gaming PCs",
    description: "High-FPS rigs with RTX GPUs, RGB aesthetics, and liquid cooling for competitive gamers.",
    color: "text-primary",
    glowClass: "shadow-glow",
    specs: "RTX 4070+ / 32GB RAM / 240Hz",
  },
  {
    icon: Shield,
    title: "Hacker / Cybersecurity",
    description: "Multi-monitor Linux workstations for ethical hacking, pentesting, and cybersecurity labs.",
    color: "text-accent",
    glowClass: "shadow-glow-purple",
    specs: "Multi-Monitor / Linux Ready / NVMe",
  },
  {
    icon: Code2,
    title: "Engineer Workstations",
    description: "Powerful systems for CAD, 3D rendering, Docker, and full-stack development workflows.",
    color: "text-primary",
    glowClass: "shadow-glow",
    specs: "64GB RAM / Xeon/Ryzen / ECC",
  },
  {
    icon: Stethoscope,
    title: "Medical / Hospital",
    description: "Reliable, silent, 24/7 machines for clinics, diagnostic labs, and hospital management systems.",
    color: "text-accent",
    glowClass: "shadow-glow-purple",
    specs: "Silent Cooling / 24/7 Uptime / UPS",
  },
  {
    icon: TrendingUp,
    title: "Stock Trading",
    description: "Multi-monitor trading setups with 4-6 DisplayPort outputs and rock-solid stability.",
    color: "text-primary",
    glowClass: "shadow-glow",
    specs: "4-6 Monitors / Low Latency / UPS",
  },
  {
    icon: GraduationCap,
    title: "Student Budget PCs",
    description: "Affordable, reliable computers perfect for online classes, assignments, and casual use.",
    color: "text-accent",
    glowClass: "shadow-glow-purple",
    specs: "i3/Ryzen 3 / 8GB / SSD",
  },
  {
    icon: Briefcase,
    title: "Office Computers",
    description: "Efficient business systems for accounting, billing, ERP, and daily office productivity.",
    color: "text-primary",
    glowClass: "shadow-glow",
    specs: "Intel Core / 16GB / Windows Pro",
  },
  {
    icon: IndianRupee,
    title: "Budget Builds",
    description: "Maximum performance per rupee. Custom builds optimized for the best value in Jabalpur.",
    color: "text-accent",
    glowClass: "shadow-glow-purple",
    specs: "Best Price / Custom Built",
  },
];

const SolutionModules = () => {
  return (
    <section id="solutions" className="py-24 circuit-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-xs text-primary uppercase mb-3">Solutions</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
            Built For Your World
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you're fragging noobs or saving lives, we build the exact machine you need.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group bg-card rounded-lg p-6 shadow-subtle hover:shadow-glow transition-all duration-200 border border-white/5 hover:border-white/10 cursor-pointer"
            >
              <s.icon className={`w-8 h-8 ${s.color} mb-4`} strokeWidth={1.5} />
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
              <div className="font-mono-tech text-[10px] text-muted-foreground uppercase">{s.specs}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionModules;
