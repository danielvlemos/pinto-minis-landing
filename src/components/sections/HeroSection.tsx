import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, FileText, Download, Sparkles } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="container px-4 mx-auto relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              📘 E-book em PDF
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Comece a Pintar
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Miniaturas do Zero
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              O guia digital em PDF para iniciantes: leia hoje e aplique na sua
              primeira miniatura, com explicações diretas e sem enrolação.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span className="font-medium">Guia em PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 fill-accent text-accent" />
                <span className="font-medium">Feito para iniciantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span className="font-medium">Download imediato</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4 animate-glow" asChild>
                <a href="#comprar">
                  Comprar agora
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="#aprender">O que você vai aprender</a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow animate-float max-w-md mx-auto">
              <img
                src={ebookCover}
                alt="Capa do e-book Pinto Minis, guia de pintura de miniaturas para iniciantes"
                width={1024}
                height={1280}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="absolute -top-6 -right-2 bg-success text-success-foreground px-4 py-2 rounded-full font-bold shadow-elegant animate-float">
              ✨ Novo!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
