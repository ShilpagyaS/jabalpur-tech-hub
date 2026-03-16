import { motion } from "framer-motion";
import { Monitor, Laptop, Cpu, HardDrive, Keyboard, Headphones } from "lucide-react";

const categories = [
  { icon: Monitor, label: "Gaming PCs", desc: "RTX-powered custom builds" },
  { icon: Laptop, label: "Laptops", desc: "HP, Dell, Lenovo, ASUS, MSI" },
  { icon: Cpu, label: "Custom PCs", desc: "Assembled to your specs" },
  { icon: Monitor, label: "Office Systems", desc: "Reliable business machines" },
  { icon: HardDrive, label: "Components", desc: "RAM, SSD, GPU, PSU & more" },
  { icon: Keyboard, label: "Peripherals", desc: "Monitors, keyboards, mice" },
];

const brands = ["HP", "Dell", "Acer", "Lenovo", "ASUS", "MSI", "Intel", "AMD", "NVIDIA"];

const ProductCategories = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-xs text-accent uppercase mb-3">Products</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
            Everything You Need
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {categories.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-glow transition-all duration-200 border border-white/5 hover:border-white/10 text-center"
            >
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-semibold mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Brands marquee */}
        <div className="text-center">
          <div className="font-mono-tech text-xs text-muted-foreground uppercase mb-4">Authorized Brands</div>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((b) => (
              <span key={b} className="font-mono-tech text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
