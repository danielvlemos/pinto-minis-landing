import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-miniature.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              🎨 Curso Completo de Pintura
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Domine a Arte de
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Pintar Miniaturas
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transforme suas miniaturas em obras de arte com técnicas profissionais. 
              Do básico ao avançado, aprenda todos os segredos da pintura de miniaturas.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">+2.500 alunos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="font-medium">4.9/5 estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">12+ horas de conteúdo</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4 animate-glow">
                Começar Agora
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Ver Conteúdo Completo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70 mb-3">Garantia de 30 dias • Acesso vitalício • Certificado de conclusão</p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow animate-float">
              <img 
                src={heroImage} 
                alt="Mão pintando uma miniatura detalhada"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-success text-success-foreground px-4 py-2 rounded-full font-bold shadow-elegant animate-float">
              ✨ Novo!
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground px-6 py-3 rounded-xl shadow-soft animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="font-medium">1.247 pessoas fazendo agora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;