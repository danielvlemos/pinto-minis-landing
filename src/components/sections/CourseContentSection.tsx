import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Clock, 
  Users, 
  Download, 
  CheckCircle,
  BookOpen,
  Palette,
  Eye,
  Brush,
  Sparkles
} from "lucide-react";
import miniaturesGallery from "@/assets/miniatures-gallery.jpg";

const modules = [
  {
    id: "module-1",
    title: "Fundamentos e Preparação",
    lessons: 8,
    duration: "2h 15min",
    description: "Aprenda os básicos da pintura de miniaturas",
    topics: [
      "Escolha de materiais e ferramentas essenciais",
      "Preparação e limpeza de miniaturas",
      "Primeiras camadas e base coating",
      "Mistura de cores e teoria das cores"
    ]
  },
  {
    id: "module-2", 
    title: "Técnicas Intermediárias",
    lessons: 12,
    duration: "3h 30min",
    description: "Domine técnicas que farão diferença",
    topics: [
      "Dry brushing e técnicas de destaque",
      "Lavagens (washes) e sombreamento",
      "Pintura de detalhes faciais e olhos",
      "Texturas de metal, couro e tecido"
    ]
  },
  {
    id: "module-3",
    title: "Técnicas Avançadas",
    lessons: 10,
    duration: "4h 20min", 
    description: "Eleve suas miniaturas ao próximo nível",
    topics: [
      "Non-metallic metals (NMM)",
      "Object source lighting (OSL)",
      "Blending avançado e gradientes",
      "Efeitos especiais e weathering"
    ]
  },
  {
    id: "module-4",
    title: "Projetos Práticos",
    lessons: 6,
    duration: "2h 45min",
    description: "Aplique tudo que aprendeu",
    topics: [
      "Projeto: Guerreiro Fantasma completo",
      "Projeto: Mago com efeitos mágicos",
      "Bases e cenários para suas miniaturas",
      "Fotografia e portfólio das suas obras"
    ]
  }
];

const CourseContentSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Conteúdo Completo
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              O que você vai
              <span className="block text-primary">Aprender</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              36 aulas práticas divididas em 4 módulos progressivos. 
              Mais de 12 horas de conteúdo exclusivo.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl mb-2">
                  <Play className="w-6 h-6" />
                  36
                </div>
                <p className="text-sm text-muted-foreground">Aulas em Vídeo</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl mb-2">
                  <Clock className="w-6 h-6" />
                  12h+
                </div>
                <p className="text-sm text-muted-foreground">de Conteúdo</p>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem 
                  key={module.id} 
                  value={module.id}
                  className="border border-border rounded-xl px-6 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{module.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Play className="w-4 h-4" />
                            {module.lessons} aulas
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="ml-16 space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Right - Visual */}
          <div className="relative animate-scale-in">
            <Card className="overflow-hidden shadow-elegant">
              <div className="relative">
                <img 
                  src={miniaturesGallery} 
                  alt="Galeria de miniaturas pintadas"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="mb-2">
                    ✨ Resultados Reais dos Alunos
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">Bônus Exclusivos</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-primary" />
                    <span>Guias em PDF para cada módulo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-primary" />
                    <span>Templates de esquemas de cores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Acesso à comunidade privada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span>Lista de materiais recomendados</span>
                  </div>
                </div>
                
                <Button variant="premium" size="lg" className="w-full mt-6">
                  Ver Prévia das Aulas
                  <Eye className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;