import { motion } from "framer-motion";

const brands = [
  { name: "HP", letter: "HP" },
  { name: "Dell", letter: "DELL" },
  { name: "Lenovo", letter: "LENOVO" },
  { name: "ASUS", letter: "ASUS" },
  { name: "MSI", letter: "MSI" },
  { name: "Acer", letter: "ACER" },
  { name: "Intel", letter: "INTEL" },
  { name: "AMD", letter: "AMD" },
  { name: "NVIDIA", letter: "NVIDIA" },
  { name: "Corsair", letter: "CORSAIR" },
  { name: "Samsung", letter: "SAMSUNG" },
  { name: "Western Digital", letter: "WD" },
];

const BrandsCarousel = () => (
  <section className="py-12 border-y border-white/5 overflow-hidden">
    <div className="container mx-auto px-4 mb-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs font-mono-tech text-muted-foreground uppercase tracking-widest"
      >
        Authorized Dealer — Trusted Brands
      </motion.p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-scroll">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center h-16 px-6 glass rounded-lg"
          >
            <span className="font-mono-tech text-sm font-bold text-muted-foreground/70 tracking-widest whitespace-nowrap">
              {brand.letter}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsCarousel;
