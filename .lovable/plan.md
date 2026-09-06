# Pinto Minis: de curso para e-book

A página passa a vender um guia digital em PDF para iniciantes em pintura de miniaturas, mantendo as cores, fontes e o estilo atuais.

## Topo da página (hero)

- Novo título: o guia em PDF para começar a pintar miniaturas do zero.
- Texto de apoio focado em iniciante: um guia direto, para ler e aplicar na primeira miniatura.
- Saem as menções a "+2.500 alunos", "12+ horas de conteúdo" e "certificado".
- Ficam dois botões: "Comprar agora" (principal, sem link por enquanto) e "O que você vai aprender" (rola a página).
- Imagem: capa provisória do e-book, que você troca depois.

## Benefícios

Os seis cartões atuais viram quatro, sem comunidade, carga horária, certificado nem garantia:
linguagem simples para iniciante, passo a passo ilustrado, lista de materiais e leitura em qualquer aparelho (celular, tablet, computador).

## Nova seção "O que você vai aprender"

Substitui a seção de módulos e aulas. Lista os tópicos reais do guia:

- Preparo da miniatura
- Aplicação de primer
- Tipos de tinta
- Wash
- Pincéis: redondo e drybrush
- Cuidados na hora de pintar

## Nova seção sobre o autor

Luiz Fernando Meireles — "mineiro-baiana se aventurando em Joinville" — com um texto curto e espaço para uma foto de miniatura pintada por ele (coloco uma imagem provisória).

## Depoimentos

A seção de depoimentos de alunos sai da página.

## Preço

Card de compra simplificado: R$ 15, pagamento único, acesso imediato ao PDF. Sem preço riscado, sem contador de urgência, sem garantia de 30 dias, sem lista de vídeos. Botão "Comprar agora".

## Lista de interesse no curso

Bloco separado da compra, antes do rodapé: texto "Quer saber quando sai o curso completo?", um campo de e-mail e o botão "Avisar-me". Por enquanto só valida o e-mail e mostra uma confirmação na tela — nada é salvo ainda; quando você quiser guardar esses e-mails de verdade, ativo o backend.

## Rodapé

Saem "garantia de 30 dias" e o link de depoimentos; os links passam a apontar para as seções novas.

## Detalhes técnicos

- Edições em `HeroSection`, `BenefitsSection`, `PricingSection`, `Footer`; remoção de `CourseContentSection` e `TestimonialsSection` do `Index`.
- Novos componentes: `WhatYouLearnSection`, `AboutAuthorSection`, `NewsletterSection`.
- Formulário com validação `zod` + `react-hook-form` e feedback via toast; sem persistência.
- Imagens provisórias geradas em `src/assets` (capa do e-book, miniatura do autor).
- `index.html`: título, descrição e Open Graph atualizados para o e-book; um único H1 na página.
