import { motion } from "framer-motion";
import { Shield, Wifi, Users, TrendingUp } from "lucide-react";

const items = [
  { icon: Shield, label: "Time organizado e comprometido" },
  { icon: Wifi, label: "Presença digital ativa" },
  { icon: Users, label: "Engajamento com o público" },
  { icon: TrendingUp, label: "Crescimento constante" },
];

const DifferentialsSection = () => (
  <section className="py-24 section-gradient">
    <div className="container px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground text-center mb-16"
      >
        Nossos <span className="text-secondary glow-text">Diferenciais</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-glass text-center group hover:border-secondary/50 transition-colors"
          >
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <item.icon className="w-7 h-7 text-secondary" />
            </div>
            <p className="font-display text-sm md:text-base font-semibold text-foreground uppercase">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
