import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { toast } from "sonner";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Digite um e-mail válido" })
  .max(255, { message: "E-mail muito longo" });

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setError(null);
    setEmail("");
    toast.success("Pronto! Avisaremos você quando o curso completo sair.");
  };

  return (
    <section id="curso-completo" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <Card className="max-w-3xl mx-auto border-border/50 shadow-soft">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bell className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Quer saber quando sai o curso completo?
            </h2>
            <p className="text-muted-foreground mb-8">
              Deixe seu e-mail e avisamos em primeiro lugar. Nada a ver com a
              compra do e-book.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <div className="flex-1 text-left">
                <label htmlFor="newsletter-email" className="sr-only">
                  Seu e-mail
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  maxLength={255}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!error}
                />
                {error && (
                  <p className="text-sm text-destructive mt-2">{error}</p>
                )}
              </div>
              <Button type="submit" variant="default" size="lg">
                Avisar-me
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
