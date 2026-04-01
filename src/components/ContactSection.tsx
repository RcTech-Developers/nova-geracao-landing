import { motion } from "framer-motion";
import { MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521991125955?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Nova%20Geração%20FC!";

const ContactSection = () => (
  <section id="contato" className="py-24 section-gradient">
    <div className="container px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-4">
          Entre em Contato
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Quer saber mais, agendar um amistoso ou se tornar nosso patrocinador? Fale com a gente!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            <MessageCircle className="w-5 h-5" />
            Entrar em Contato
          </a>
          <a
            href="https://www.instagram.com/novageracao.team"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-hero"
          >
            <Instagram className="w-5 h-5" />
            @novageracao.team
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
