import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Target, 
  Trophy, 
  BookOpen, 
  Users, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Técnicas Profissionais",
    description: "Aprenda as técnicas usadas pelos melhores pintores de miniaturas do mundo",
    highlight: "Do básico ao expert"
  },
  {
    icon: Target,
    title: "Resultados Garantidos",
    description: "Veja suas miniaturas transformadas desde a primeira aula",
    highlight: "Progresso visível"
  },
  {
    icon: BookOpen,
    title: "Material Completo",
    description: "Guias em PDF, templates e listas de materiais inclusos",
    highlight: "Tudo incluso"
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros pintores e compartilhe seus trabalhos",
    highlight: "+2.500 membros"
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Assista quantas vezes quiser, no seu próprio ritmo",
    highlight: "Para sempre"
  },
  {
    icon: Trophy,
    title: "Certificado",
    description: "Receba certificado de conclusão ao finalizar o curso",
    highlight: "Reconhecimento"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Por que escolher o Pinto Minis?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transforme sua
            <span className="block text-primary"> Paixão em Arte</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 2.500 alunos já descobriram como dar vida às suas miniaturas. 
            Agora é a sua vez!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:animate-glow transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 text-xs px-2 py-1"
                  >
                    {benefit.highlight}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="flex items-center justify-center gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full font-medium mb-4">
            <CheckCircle className="w-5 h-5" />
            Mais de 15.000 miniaturas já foram transformadas pelos nossos alunos
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;