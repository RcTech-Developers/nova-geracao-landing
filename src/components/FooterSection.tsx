import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logoo-bg.png";

const FooterSection = () => (
  <footer className="py-12 section-gradient border-t border-border">
    <div className="container px-4">
      <div className="flex flex-col items-center gap-6">
        <img src={logo} alt="Nova Geração FC" className="w-16 h-16 rounded-full object-cover" />
        <p className="font-display text-xl font-bold uppercase text-foreground">Nova Geração FC</p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/novageracao.team?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://wa.me/552199112-5955"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-foreground" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nova Geração FC. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
