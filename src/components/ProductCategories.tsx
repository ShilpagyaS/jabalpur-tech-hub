import { motion } from "framer-motion";
import {
  Monitor,
  Laptop,
  Cpu,
  HardDrive,
  Keyboard,
  Mouse,
  Speaker,
  Printer,
  Webcam,
  Router,
  Gamepad2,
  MemoryStick,
  Server,
} from "lucide-react";

const categories = [
  { icon: Monitor, label: "Gaming PCs", desc: "RTX-powered custom builds" },
  { icon: Laptop, label: "Laptops", desc: "HP, Dell, Lenovo, ASUS, MSI" },
  { icon: Cpu, label: "Custom PCs", desc: "Assembled to your specs" },

  { icon: Server, label: "Office Systems", desc: "Reliable business machines" },
  { icon: MemoryStick, label: "RAM", desc: "High-speed DDR4 / DDR5 memory" },
  { icon: Cpu, label: "Processors (CPU)", desc: "Intel & AMD latest gen" },

  { icon: Cpu, label: "Graphics Cards (GPU)", desc: "NVIDIA RTX / AMD Radeon" },
  { icon: HardDrive, label: "Storage (SSD/HDD)", desc: "Fast NVMe & HDD storage" },
  { icon: Keyboard, label: "Keyboards", desc: "Mechanical & RGB keyboards" },

  { icon: Mouse, label: "Mouse", desc: "Gaming & office precision" },
  { icon: Speaker, label: "Speakers", desc: "High-quality sound systems" },
  { icon: Printer, label: "Printers", desc: "Home & office printing" },

  { icon: Webcam, label: "CCTV / Cameras", desc: "Security & surveillance" },
  { icon: Router, label: "Networking", desc: "Routers, switches & WiFi" },
  { icon: Gamepad2, label: "Accessories", desc: "All essential add-ons" },
];

const brands = ["HP", "Dell", "Acer", "Lenovo", "ASUS", "MSI", "Intel", "AMD", "NVIDIA"];

const ProductCategories = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-xs text-accent uppercase mb-3">
            Products
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
            Everything You Need
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {categories.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300 border border-white/5 hover:border-primary/40 text-center"
            >
              <c.icon
                className="w-8 h-8 text-primary mx-auto mb-3"
                strokeWidth={1.5}
              />
              <h3 className="font-semibold mb-1 text-sm md:text-base">
                {c.label}
              </h3>
              <p className="text-xs text-muted-foreground">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brands */}
        <div className="text-center">
          <div className="font-mono-tech text-xs text-muted-foreground uppercase mb-4">
            Authorized Brands
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((b) => (
              <span
                key={b}
                className="font-mono-tech text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
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
