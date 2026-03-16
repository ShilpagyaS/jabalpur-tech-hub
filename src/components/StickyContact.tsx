import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/919827065718?text=Hi%20Microland%2C%20I%20want%20to%20know%20about%20your%20products.";
const PHONE_URL = "tel:+919827065718";

const StickyContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      <a
        href={PHONE_URL}
        className="w-12 h-12 flex items-center justify-center rounded-full glass shadow-subtle hover:shadow-glow transition-all duration-200"
        aria-label="Call Microland Computers"
      >
        <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow animate-pulse-glow"
        aria-label="Chat on WhatsApp with Microland Computers"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
      </a>
    </motion.div>
  );
};

export default StickyContact;
