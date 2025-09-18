import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Silva",
    role: "Iniciante há 3 meses",
    rating: 5,
    text: "Nunca pensei que conseguiria pintar com essa qualidade! O curso é muito didático e as técnicas são explicadas de forma super clara. Minhas miniaturas ficaram irreconhecíveis!",
    avatar: "MS",
    highlight: "De iniciante a semi-profissional"
  },
  {
    id: 2,
    name: "Ana Carolina",
    role: "Pintora há 2 anos",
    rating: 5,
    text: "Eu já pintava há um tempo, mas estava estagnada. O Pinto Minis me ensinou técnicas avançadas que elevaram meu nível completamente. Agora vendo miniaturas pintadas!",
    avatar: "AC",
    highlight: "Agora vende suas pinturas"
  },
  {
    id: 3,
    name: "Rafael Costa",
    role: "Colecionador",
    rating: 5,
    text: "Comprei pensando em melhorar minha coleção, mas acabei descobrindo uma nova paixão. A comunidade é incrível e sempre me ajuda com dúvidas. Vale cada centavo!",
    avatar: "RC",
    highlight: "Descobriu nova paixão"
  },
  {
    id: 4,
    name: "Luana Mendes",
    role: "Artista iniciante",
    rating: 5,
    text: "O método do curso é fantástico! Consegui resultados profissionais desde a primeira semana. Os bônus em PDF são uma mão na roda para consultar durante a pintura.",
    avatar: "LM",
    highlight: "Resultados em 1 semana"
  },
  {
    id: 5,
    name: "João Pedro",
    role: "Jogador de RPG",
    rating: 5,
    text: "Meus amigos ficaram impressionados com a evolução das miniaturas que levo para o RPG. O curso superou todas as expectativas. Recomendo 100%!",
    avatar: "JP",
    highlight: "Impressionou os amigos"
  },
  {
    id: 6,
    name: "Camila Santos",
    role: "Designer",
    rating: 5,
    text: "Como designer, achei que já sabia pintar, mas miniaturas são um universo à parte! Aprendi técnicas específicas que não conhecia. Curso completo e bem estruturado.",
    avatar: "CS",
    highlight: "Técnicas únicas"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Depoimentos Reais
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos
            <span className="block text-primary">Alunos Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 2.500 pessoas já transformaram suas miniaturas. 
            Veja os resultados reais dos nossos alunos!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Highlight Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 text-xs px-3 py-1 bg-success text-success-foreground transform rotate-12"
                >
                  {testimonial.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">2.500+</div>
              <p className="text-muted-foreground">Alunos Ativos</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Avaliação Média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;