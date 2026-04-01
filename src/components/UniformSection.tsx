import { motion } from "framer-motion";
import uniformeImg from "@/assets/uniforme.jpeg";

const UniformSection = () => (
  <section id="uniforme" className="py-24 section-gradient">
    <div className="container px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={uniformeImg}
            alt="Uniforme oficial Nova Geração FC"
            loading="lazy"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg shadow-secondary/20 w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-6">
            Linha Oficial <br />
            <span className="text-secondary glow-text">Nova Geração</span>
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-secondary text-2xl mt-0.5">👕</span>
              <span>Material leve, fresco e de alta performance — feito pra quem joga de verdade.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-2xl mt-0.5">🎨</span>
              <span>Design moderno com a identidade verde e branca do NGFC.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-2xl mt-0.5">💚</span>
              <span>Vista o peso da nossa história e represente o Nova Geração.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default UniformSection;
