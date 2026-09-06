import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  SprayCan,
  Palette,
  Droplets,
  Brush,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const topics = [
  {
    icon: Wrench,
    title: "Preparo da miniatura",
    description: "Como limpar, remover rebarbas e deixar a peça pronta para receber tinta.",
  },
  {
    icon: SprayCan,
    title: "Aplicação de primer",
    description: "Por que o primer é essencial e como aplicar sem cobrir os detalhes.",
  },
  {
    icon: Palette,
    title: "Tipos de tinta",
    description: "As diferenças entre as tintas e qual usar em cada parte da miniatura.",
  },
  {
    icon: Droplets,
    title: "Wash",
    description: "Como usar o wash para criar sombras e dar profundidade na hora.",
  },
  {
    icon: Brush,
    title: "Pincéis: redondo e drybrush",
    description: "Para que serve cada pincel e como fazer o drybrush do jeito certo.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidados na hora de pintar",
    description: "Os erros mais comuns de quem está começando e como evitá-los.",
  },
];

const WhatYouLearnSection = () => {
  return (
    <section id="aprender" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Conteúdo do guia
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que você vai
            <span className="block text-primary">Aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que um iniciante precisa saber para pintar a primeira miniatura
            com um resultado do qual se orgulhar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <Card
              key={topic.title}
              className="border-border/50 hover:shadow-elegant transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <topic.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{topic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {topic.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="lg" className="text-lg px-8" asChild>
            <a href="#comprar">
              Comprar agora
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
