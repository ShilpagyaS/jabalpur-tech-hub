import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, MonitorSpeaker, MemoryStick, HardDrive, Fan, Monitor, MessageCircle, ChevronRight } from "lucide-react";

type ConfigStep = {
  id: string;
  label: string;
  icon: React.ElementType;
  options: string[];
};

const steps: ConfigStep[] = [
  { id: "processor", label: "Processor", icon: Cpu, options: ["Intel Core i5-14400F", "Intel Core i7-14700K", "Intel Core i9-14900K", "AMD Ryzen 5 7600X", "AMD Ryzen 7 7800X3D", "AMD Ryzen 9 7950X"] },
  { id: "gpu", label: "Graphics Card", icon: MonitorSpeaker, options: ["NVIDIA RTX 4060", "NVIDIA RTX 4070 Super", "NVIDIA RTX 4080 Super", "NVIDIA RTX 4090", "AMD RX 7800 XT", "AMD RX 7900 XTX"] },
  { id: "ram", label: "RAM", icon: MemoryStick, options: ["8GB DDR5", "16GB DDR5", "32GB DDR5", "64GB DDR5"] },
  { id: "storage", label: "Storage", icon: HardDrive, options: ["256GB NVMe SSD", "512GB NVMe SSD", "1TB NVMe SSD", "2TB NVMe SSD", "1TB NVMe + 2TB HDD"] },
  { id: "cooling", label: "Cooling", icon: Fan, options: ["Air Cooler (Stock)", "Tower Air Cooler", "120mm AIO Liquid", "240mm AIO Liquid", "360mm AIO Liquid"] },
  { id: "monitor", label: "Monitor", icon: Monitor, options: ["24\" 1080p 165Hz", "27\" 1440p 165Hz", "27\" 4K 144Hz", "32\" 4K 144Hz", "No monitor needed"] },
];

const PCConfigurator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const currentStep = steps[activeStep];
  const allSelected = Object.keys(selections).length === steps.length;

  const handleSelect = (option: string) => {
    setSelections((prev) => ({ ...prev, [currentStep.id]: option }));
    if (activeStep < steps.length - 1) {
      setTimeout(() => setActiveStep(activeStep + 1), 200);
    }
  };

  const getWhatsAppMessage = () => {
    const parts = steps
      .filter((s) => selections[s.id])
      .map((s) => `${s.label}: ${selections[s.id]}`)
      .join("\n");
    return encodeURIComponent(`Hi Microland, I just built a custom PC on your site:\n\n${parts}\n\nWhat is the current price?`);
  };

  return (
    <section id="configurator" className="py-24 circuit-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-xs text-primary uppercase mb-3">Configurator</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
            Build Your Dream PC
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Select your components and get an instant WhatsApp quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
          {/* Stepper */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isCompleted = !!selections[step.id];
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md text-left text-sm whitespace-nowrap transition-all duration-200 min-w-fit ${
                    isActive
                      ? "bg-primary/10 border border-primary/30 text-foreground shadow-glow"
                      : isCompleted
                      ? "bg-card border border-white/10 text-foreground"
                      : "bg-card/50 border border-white/5 text-muted-foreground"
                  }`}
                >
                  <step.icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : isCompleted ? "text-primary/60" : "text-muted-foreground"}`} strokeWidth={1.5} />
                  <span className="flex-1">{step.label}</span>
                  {isCompleted && <ChevronRight className="w-3 h-3 text-primary" />}
                </button>
              );
            })}
          </div>

          {/* Options */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.15 }}
                className="grid sm:grid-cols-2 gap-3"
              >
                {currentStep.options.map((option) => {
                  const isSelected = selections[currentStep.id] === option;
                  return (
                    <motion.button
                      key={option}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(option)}
                      className={`text-left p-4 rounded-md border transition-all duration-200 ${
                        isSelected
                          ? "bg-primary/10 border-primary/40 shadow-glow"
                          : "bg-card border-white/5 hover:border-white/15"
                      }`}
                    >
                      <span className="font-mono-tech text-sm">{option}</span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Spec sheet */}
            {Object.keys(selections).length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 bg-card rounded-lg p-6 shadow-subtle border border-white/5"
              >
                <div className="font-mono-tech text-xs text-primary uppercase mb-4">Your Build</div>
                <div className="space-y-2">
                  {steps.map((s) =>
                    selections[s.id] ? (
                      <div key={s.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{s.label}</span>
                        <span className="font-mono-tech">{selections[s.id]}</span>
                      </div>
                    ) : null
                  )}
                </div>

                {allSelected && (
                  <motion.a
                    href={`https://wa.me/919827065718?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-bold text-sm animate-pulse-glow"
                  >
                    <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                    Get Price on WhatsApp
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCConfigurator;
