import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

const images = [
  { src: gallery1, alt: "Jogo do Nova Geração FC" },
  { src: gallery2, alt: "Celebração do time" },
  { src: gallery3, alt: "Time posando para foto" },
  { src: gallery4, alt: "Camisa número 10" },
  { src: gallery5, alt: "Gol do Nova Geração" },
  { src: gallery6, alt: "Conquista do troféu" },
];

const GallerySection = () => (
  <section id="galeria" className="py-24 section-gradient">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground text-center mb-16"
      >
        Galeria
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-xl group aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
