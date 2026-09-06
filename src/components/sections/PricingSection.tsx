import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Zap, Download, FileText } from "lucide-react";

const included = [
  { icon: FileText, text: "Guia completo em PDF para iniciantes" },
  { icon: CheckCircle, text: "Passo a passo do preparo até o acabamento" },
  { icon: CheckCircle, text: "Lista de materiais e pincéis essenciais" },
  { icon: Download, text: "Download imediato após a compra" },
];

const PricingSection = () => {
  return (
    <section id="comprar" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            E-book em PDF
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comece a pintar
            <span className="block text-primary">hoje mesmo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um guia digital direto ao ponto, por um preço de quem só quer
            começar do jeito certo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden shadow-glow border-2 border-primary/30 animate-scale-in">
            <CardHeader className="text-center pb-8 pt-10 bg-gradient-subtle">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                Guia Pinto Minis para Iniciantes
              </CardTitle>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-bold text-primary">
                  R$ 15
                </span>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">pagamento único</div>
                  <div className="text-xs text-muted-foreground">acesso imediato ao PDF</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="w-6 h-6 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-4">
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full text-lg py-6 font-bold animate-glow"
                >
                  Comprar agora
                  <Zap className="w-6 h-6 ml-2" />
                </Button>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-success" />
                    Compra 100% segura
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-success" />
                    Download na hora
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
