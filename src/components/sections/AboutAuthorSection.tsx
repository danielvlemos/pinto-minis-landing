import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import authorMiniature from "@/assets/author-miniature.jpg";

const AboutAuthorSection = () => {
  return (
    <section id="autor" className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-elegant animate-scale-in">
            <img
              src={authorMiniature}
              alt="Miniatura pintada por Luiz Fernando Meireles"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </Card>

          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Quem escreveu
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Luiz Fernando Meireles
            </h2>
            <p className="text-lg text-primary font-medium mb-6">
              Mineiro-baiano se aventurando em Joinville
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Descobri a pintura de miniaturas como hobby e passei por todos os
              erros de iniciante: tinta grossa, pincel errado, primer no lugar
              errado. Esse guia é o atalho que eu queria ter tido no começo.
            </p>
            <p className="text-lg text-muted-foreground">
              Ao lado está uma das miniaturas pintadas por mim — usando
              exatamente as técnicas que você encontra no e-book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthorSection;
