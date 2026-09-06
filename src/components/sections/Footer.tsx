import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, FileText, Download, Heart, Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 mx-auto py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Pinto Minis</h3>
            </div>
            <p className="text-muted-foreground">
              Um guia digital em PDF para quem quer começar a pintar miniaturas
              do jeito certo, desde a primeira peça.
            </p>
            <Badge variant="secondary" className="px-3 py-1">
              📘 E-book para iniciantes
            </Badge>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#aprender" className="hover:text-primary transition-colors">O que você vai aprender</a></li>
              <li><a href="#autor" className="hover:text-primary transition-colors">Sobre o autor</a></li>
              <li><a href="#comprar" className="hover:text-primary transition-colors">Comprar o e-book</a></li>
              <li><a href="#curso-completo" className="hover:text-primary transition-colors">Curso completo</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Suporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@pintominis.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Formato PDF</span>
              </li>
              <li className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download imediato</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Siga-nos para dicas diárias e inspiração!
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>© 2026 Pinto Minis. Todos os direitos reservados.</span>
          <div className="flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>para pintores de miniaturas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
