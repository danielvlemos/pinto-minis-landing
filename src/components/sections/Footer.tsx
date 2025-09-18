import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Shield, 
  Clock, 
  Heart,
  Instagram,
  Youtube,
  Facebook
} from "lucide-react";

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
              Transforme suas miniaturas em obras de arte com técnicas profissionais. 
              Mais de 2.500 alunos já descobriram o poder da pintura.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                ⭐ 4.9/5 estrelas
              </Badge>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#curso" className="hover:text-primary transition-colors">Sobre o Curso</a></li>
              <li><a href="#conteudo" className="hover:text-primary transition-colors">Conteúdo</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#preco" className="hover:text-primary transition-colors">Preço</a></li>
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
                <Shield className="w-4 h-4" />
                <span>Garantia de 30 dias</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Acesso vitalício</span>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Redes Sociais</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
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
          <div className="flex items-center gap-2">
            <span>© 2024 Pinto Minis. Todos os direitos reservados.</span>
          </div>
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