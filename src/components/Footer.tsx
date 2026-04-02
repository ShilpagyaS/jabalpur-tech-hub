import { Cpu, Phone, MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919827065718";
const PHONE_URL = "tel:+919827065718";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Microland+Computers+Jabalpur+Napier+Town";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 circuit-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="font-bold">Micro<span className="text-primary">land</span> Computers</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Jabalpur's most trusted computer store. Gaming PCs, workstations, laptops, and custom builds.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["Solutions", "Products", "Build Your PC", "Why Us", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="block text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2">
              <a href={PHONE_URL} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-3 h-3" strokeWidth={1.5} /> +91 98270 65718
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="w-3 h-3" strokeWidth={1.5} /> WhatsApp Chat
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-3 h-3" strokeWidth={1.5} /> Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Best price guaranteed in Jabalpur · Custom PCs built for your needs
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-2">
            Made with love by Shilpagya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
