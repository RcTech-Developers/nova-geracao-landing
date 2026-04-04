import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import uniformeTitular from "@/assets/uniforme-titular.png";
import uniformeReserva from "@/assets/uniforme-reserva.png";
import uniformeAlternativo from "@/assets/uniforme-alternativo.png";

const WHATSAPP_URL = "https://wa.me/5521991125955?text=Olá!%20Tenho%20interesse%20nos%20uniformes%20do%20Nova%20Geração%20FC!";

const uniforms = [
  {
    id: 1,
    image: uniformeTitular,
    name: "Uniforme Jogador",
    description: "Material leve, fresco e confortável, perfeito para o dia a dia. Vista o peso da nossa história, garanta já o seu e represente o NGFC.",
    status: "Disponível",
  },
  {
    id: 2,
    image: uniformeReserva,
    name: "Uniforme Goleiro",
    description: "Material leve, fresco e confortável, perfeito para o dia a dia. Vista o peso da nossa história, garanta já o seu e represente o NGFC.",
    status: "Disponível",
  },
  {
    id: 3,
    image: uniformeAlternativo,
    name: "Uniforme Comissão Técnica",
    description: "Material leve, fresco e confortável, perfeito para o dia a dia. Vista o peso da nossa história, garanta já o seu e represente o NGFC.",
    status: "Disponível",
  },
];

const UniformSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? uniforms.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === uniforms.length - 1 ? 0 : c + 1));

  const item = uniforms[current];

  return (
    <section id="uniforme" className="py-24 section-gradient">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-3">
            Linha <span className="text-secondary glow-text">Oficial</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça os uniformes oficiais do Nova Geração FC
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-sm mx-auto mb-10">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/30 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/30 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center h-[400px] md:h-[480px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {uniforms.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-secondary w-7"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Uniforme ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-lg mx-auto text-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-2">
              {item.name}
            </h3>
            <p className="text-muted-foreground mb-3">{item.description}</p>
            <span
              className={`inline-block text-sm font-semibold uppercase tracking-wider mb-5 px-3 py-1 rounded-full ${
                item.status === "Disponível"
                  ? "bg-secondary/20 text-secondary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {item.status}
            </span>
            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                💬 Encomende Já
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UniformSection;
