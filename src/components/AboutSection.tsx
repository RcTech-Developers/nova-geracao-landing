import { motion } from "framer-motion";
import { Trophy, Handshake, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Torneios & Campeonatos",
    desc: "Participação ativa em competições como Copa da Tropa e LDC Challenge.",
  },
  {
    icon: Handshake,
    title: "Parcerias",
    desc: "Buscamos parceiros que compartilhem a paixão pelo esporte e pelo crescimento coletivo.",
  },
  {
    icon: MapPin,
    title: "Del Castilho — RJ",
    desc: "Representando com orgulho a comunidade do Del Castilho, zona norte do Rio.",
  },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-4">
          Sobre o Time
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Somos o Nova Geração FC, um time amador de Fut7 do Rio de Janeiro.
          Com espírito competitivo, união e paixão pelo futebol, representamos
          o melhor do esporte amador carioca.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-glass text-center group hover:border-secondary/50 transition-colors duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <item.icon className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2 uppercase">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
