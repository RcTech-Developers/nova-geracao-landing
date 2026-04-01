import { motion } from "framer-motion";
import { Smartphone, Shirt, Trophy } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521991125955?text=Olá!%20Tenho%20interesse%20em%20patrocinar%20o%20Nova%20Geração%20FC!";

const benefits = [
  {
    icon: Smartphone,
    title: "Presença nas Redes Sociais",
    desc: "Sua marca será divulgada em nossos perfis oficiais, com postagens frequentes de jogos, bastidores e engajamento direto com o público.",
  },
  {
    icon: Shirt,
    title: "Exposição em Uniformes",
    desc: "Durante os jogos e amistosos, sua marca estará presente em camisas, bandeiras e materiais esportivos, ganhando visibilidade real em campo.",
  },
  {
    icon: Trophy,
    title: "Participação em Campeonatos",
    desc: "Apoiando o Nova Geração, sua marca estará representada em competições e torneios, associada a um time vencedor e apaixonado pelo futebol.",
  },
];

const SponsorshipSection = () => (
  <section id="patrocinio" className="py-24 bg-background">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-4">
          Seja Nosso <span className="text-secondary glow-text">Patrocinador</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Leve sua marca para dentro do jogo. Associe-se a um time que cresce a cada partida.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {benefits.map((item, i) => (
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cta text-xl">
          👉 Quero Patrocinar
        </a>
      </motion.div>
    </div>
  </section>
);

export default SponsorshipSection;
