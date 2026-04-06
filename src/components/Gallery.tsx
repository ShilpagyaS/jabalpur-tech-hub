import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const photos = [
  {
    id: 1,
    video: "https://res.cloudinary.com/dpzd8hrfz/video/upload/v1775450573/StoreInterior_wbjvvu.mp4",
    label: "Store Interior",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dpzd8hrfz/image/upload/v1775452148/gaming_yaogfp.png",
    label: "Gaming PC Build",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dpzd8hrfz/image/upload/v1775452595/workstation_jrzxlw.png",
    label: "Workstation Setup",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dpzd8hrfz/image/upload/v1775453390/happy1_apucqi.jpg",
    label: "Happy Customer",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dpzd8hrfz/image/upload/v1775453486/happy_2_bzwnlr.jpg",
    label: "Customer Experience",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dpzd8hrfz/image/upload/v1775453605/SaveVid.Net_495373397_1114056700739239_6797975728873352357_n_c6lhos.jpg",
    label: "Customer Satisfaction",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center gap-2 text-primary text-xs mb-2">
            <Camera className="w-4 h-4" />
            Our Gallery
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">
            Inside <span className="text-primary">Microland</span>
          </h2>
        </div>

        {/* 🔥 CAROUSEL */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={() =>
              document.getElementById("gallery-scroll")?.scrollBy({
                left: -500,
                behavior: "smooth",
              })
            }
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full"
          >
            ←
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() =>
              document.getElementById("gallery-scroll")?.scrollBy({
                left: 500,
                behavior: "smooth",
              })
            }
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full"
          >
            →
          </button>

          {/* SCROLL AREA */}
          <div
            id="gallery-scroll"
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => {
              const slider = e.currentTarget;
              let isDown = true;
              let startX = e.pageX - slider.offsetLeft;
              let scrollLeft = slider.scrollLeft;

              const onMouseMove = (e: any) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1.5;
                slider.scrollLeft = scrollLeft - walk;
              };

              const onMouseUp = () => {
                isDown = false;
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
              };

              window.addEventListener("mousemove", onMouseMove);
              window.addEventListener("mouseup", onMouseUp);
            }}
          >
            {photos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="min-w-[300px] md:min-w-[400px] h-[220px] md:h-[280px] snap-center relative group rounded-xl overflow-hidden border border-white/10"
              >
                {/* VIDEO */}
                {photo.video ? (
                  <video
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onClick={(e) => {
                      const video = e.currentTarget;
                      video.muted = false;
                      video.controls = true;
                      video.play();
                    }}
                  >
                    <source src={photo.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                )}

                {/* LABEL */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-3">
                  <span className="text-white text-sm font-semibold">
                    {photo.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
