import { Cpu, Phone, MessageCircle, MapPin, Instagram, Facebook, Youtube, Star } from "lucide-react";

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
              <span className="font-bold text-foreground">Micro<span className="text-primary">land</span> <span className="text-accent">Computers</span></span>
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
          <div className="flex justify-center gap-4 mb-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/microland_computers2/", label: "Instagram", color: "hover:text-pink-400" },
              { icon: Facebook, href: "https://www.facebook.com/people/Microland-Computers/100064047575061/", label: "Facebook", color: "hover:text-blue-400" },
              { icon: Youtube, href: "https://www.youtube.com/@microlandcomputer", label: "YouTube", color: "hover:text-red-400" },
              { icon: Star, href: "https://www.justdial.com/Jabalpur/Microland-Computers-Jiomart-Digital-Partner-Near-Ashish-Hospital-Madan-Mahal/9999PX761-X761-160919160402-D1U9_BZDET", label: "JustDial", color: "hover:text-yellow-400" },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-9 h-9 flex items-center justify-center rounded-full glass text-muted-foreground ${color} transition-all duration-200 hover:scale-110`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
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
