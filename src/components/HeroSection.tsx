import { motion } from "framer-motion";
import logo from "@/assets/logoo-bg.png";

const WHATSAPP_URL = "https://wa.me/5521991125955?text=Olá!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20o%20Nova%20Geração%20FC!";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-[150px]" />
      </div>

      <div className="container relative z-10 text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full mx-auto overflow-hidden shadow-[0_0_50px_hsl(155,62%,40%,0.35)]">
            <img
              src={logo}
              alt="Nova Geração FC"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground glow-text mb-6"
        >
          Nova Geração FC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-white max-w-2xl mx-auto mb-14 font-body tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
        >
          Mais que um time, uma família apaixonada por futebol.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a href="#patrocinio" className="btn-cta">
            ⚽ Seja Patrocinador
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-hero"
          >
            💬 Fale Conosco no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
