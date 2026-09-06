import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, ListChecks, Smartphone, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Linguagem simples",
    description: "Escrito para quem nunca pegou um pincel, sem termos complicados",
    highlight: "Para iniciantes",
  },
  {
    icon: Palette,
    title: "Passo a passo ilustrado",
    description: "Cada etapa explicada na ordem em que você vai fazer na prática",
    highlight: "Na ordem certa",
  },
  {
    icon: ListChecks,
    title: "Lista de materiais",
    description: "Saiba exatamente o que comprar para começar sem gastar demais",
    highlight: "Sem desperdício",
  },
  {
    icon: Smartphone,
    title: "Leia onde quiser",
    description: "PDF para celular, tablet ou computador — e para imprimir também",
    highlight: "Em qualquer tela",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Por que esse guia?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Do primeiro pincel à
            <span className="block text-primary">sua primeira miniatura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um guia curto e direto ao ponto, com o essencial para você pintar sua
            primeira miniatura hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
