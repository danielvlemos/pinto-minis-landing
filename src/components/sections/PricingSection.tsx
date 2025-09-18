import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap, 
  Star,
  Gift,
  Timer,
  Crown
} from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            🔥 Oferta Limitada
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transforme suas Miniaturas
            <span className="block text-primary">Hoje Mesmo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 12 horas de conteúdo premium, comunidade exclusiva e 
            suporte direto. Tudo isso por um preço que cabe no seu orçamento.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <Card className="relative overflow-hidden shadow-glow border-2 border-primary/30 animate-scale-in">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge variant="default" className="bg-gradient-accent text-accent-foreground px-6 py-2 font-bold animate-glow">
                <Crown className="w-4 h-4 mr-2" />
                MAIS POPULAR
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-8 pt-12 bg-gradient-subtle">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Curso Completo Pinto Minis
              </CardTitle>
              
              {/* Pricing */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl text-muted-foreground line-through">
                    R$ 497,00
                  </span>
                  <Badge variant="destructive" className="animate-pulse">
                    -70% OFF
                  </Badge>
                </div>
                
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl md:text-7xl font-bold text-primary">
                    R$ 147
                  </span>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">pagamento único</div>
                    <div className="text-xs text-muted-foreground">ou 12x de R$ 14,90</div>
                  </div>
                </div>
                
                {/* Urgency Timer */}
                <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full font-medium">
                  <Timer className="w-4 h-4 animate-spin" />
                  Oferta válida apenas hoje!
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {/* What's Included */}
              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">O que está incluído:</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: "36 aulas em vídeo HD (12+ horas)" },
                    { icon: Gift, text: "Guias em PDF para cada módulo" },
                    { icon: CheckCircle, text: "Templates de esquemas de cores" },
                    { icon: Shield, text: "Garantia incondicional de 30 dias" },
                    { icon: Zap, text: "Acesso vitalício ao conteúdo" },
                    { icon: Star, text: "Comunidade privada no Discord" },
                    { icon: CheckCircle, text: "Suporte direto por 6 meses" },
                    { icon: Crown, text: "Certificado de conclusão" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center space-y-4">
                <Button 
                  variant="premium" 
                  size="lg" 
                  className="w-full text-xl py-6 animate-glow text-lg font-bold"
                >
                  🚀 QUERO COMEÇAR AGORA
                  <Zap className="w-6 h-6 ml-2" />
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-success" />
                    Compra 100% Segura
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-success" />
                    Acesso Imediato
                  </div>
                </div>
              </div>
              
              {/* Guarantee */}
              <div className="mt-8 p-6 bg-success/10 rounded-xl border border-success/20">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-success" />
                  <h4 className="font-bold text-success text-lg">Garantia Total de 30 Dias</h4>
                </div>
                <p className="text-success/80">
                  Se por qualquer motivo você não ficar 100% satisfeito, 
                  devolvemos todo seu dinheiro. Sem perguntas, sem complicações.
                </p>
              </div>
              
              {/* Social Proof */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  ⚡ <strong>127 pessoas</strong> compraram nas últimas 24 horas
                </p>
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    4.9/5 ⭐ (2.847 avaliações)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Zap,
                title: "Acesso Imediato",
                description: "Comece a aprender agora mesmo"
              },
              {
                icon: Shield,
                title: "100% Seguro",
                description: "Garantia de 30 dias"
              },
              {
                icon: Star,
                title: "Suporte Premium",
                description: "Tire dúvidas direto comigo"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;