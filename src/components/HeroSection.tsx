import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919827065718?text=Hi%20Microland%2C%20I%27m%20interested%20in%20your%20computers.";
const PHONE_URL = "tel:+919827065718";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 🔥 GAMER / HACKER BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f2c] to-[#12002a]" />

      {/* Neon glow blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-block text-xs px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 tracking-widest border border-cyan-400/20">
            🏆 MAHAKOSHAL'S #1 COMPUTER STORE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Jabalpur Ka Sabse <br />
            <span className="text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,150,0.8)]">
              Bharosemand
            </span>{" "}
            <br />
            Tech Partner
          </h1>

          <p className="text-gray-300 max-w-lg">
            Laptops, Desktops, Printers aur accessories — sab kuch ek hi jagah.
            Top brands, best prices, aur expert service sirf{" "}
            <span className="text-cyan-400 font-semibold">
              Microland Computers
            </span>{" "}
            pe.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#products"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Products Dekhein
            </a>

            <a
              href={PHONE_URL}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              <Phone className="w-4 h-4" />
              Call Karein
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT LOGO (BIG + ANIMATED) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* 🔥 Rotating neon ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-cyan-400/30 scale-125"
            />

            {/* Glow pulse */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"
            />

            {/* Floating logo */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative bg-black p-8 rounded-full shadow-[0_0_40px_rgba(0,255,255,0.3)]"
            >
              <img
                src="/LOGO.jpeg"
                alt="Microland Computers"
                className="w-64 h-64 object-contain rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
