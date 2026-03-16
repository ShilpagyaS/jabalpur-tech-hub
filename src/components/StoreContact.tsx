import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919827065718?text=Hi%20Microland%2C%20I%20want%20to%20know%20about%20your%20products.";
const PHONE_URL = "tel:+919827065718";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Microland+Computers+Jabalpur+Napier+Town";

const hours = [
  { day: "Monday", time: "11 AM – 9 PM" },
  { day: "Tuesday", time: "11 AM – 9 PM" },
  { day: "Wednesday", time: "11 AM – 9 PM" },
  { day: "Thursday", time: "11 AM – 9 PM" },
  { day: "Friday", time: "11 AM – 9 PM" },
  { day: "Saturday", time: "11 AM – 9 PM" },
  { day: "Sunday", time: "12 PM – 7 PM" },
];

const StoreContact = () => {
  return (
    <section id="contact" className="py-24 circuit-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono-tech text-xs text-primary uppercase mb-3">Visit Us</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gradient-hero">
            Come See Us In Person
          </h2>
          <p className="text-muted-foreground mt-4">Message us on WhatsApp to get today's price</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-lg p-6 shadow-subtle border border-white/5">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Microland Computers<br />
                    Madan Mahal, Home Science College to Police Station Rd<br />
                    Near Ashish Hospital, Napier Town<br />
                    Jabalpur, Madhya Pradesh 482002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Phone / WhatsApp</h3>
                  <a href={PHONE_URL} className="text-sm text-primary hover:underline font-mono-tech">+91 98270 65718</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold text-sm mb-2">Opening Hours</h3>
                  <div className="space-y-1">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-xs text-muted-foreground">
                        <span>{h.day}</span>
                        <span className="font-mono-tech">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={PHONE_URL} className="flex-1 flex items-center justify-center gap-2 glass rounded-lg py-3 text-sm font-semibold hover-lift">
                <Phone className="w-4 h-4" strokeWidth={1.5} /> Call Now
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-3 text-sm font-bold hover:shadow-glow transition-all">
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} /> WhatsApp
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 glass rounded-lg py-3 text-sm font-semibold hover-lift">
                <MapPin className="w-4 h-4" strokeWidth={1.5} /> Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-subtle border border-white/5 min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.5!2d79.9489!3d23.1687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzA3LjMiTiA3OcKwNTYnNTYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Microland Computers Jabalpur Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreContact;
