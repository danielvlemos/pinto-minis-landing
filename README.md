# Pinto Minis

Landing page do e-book "Pinto Minis: Guia para iniciantes na pintura de miniaturas".
Apresenta o material e é a página onde a pessoa compra o e-book em PDF.

**Site no ar**: https://pintominis.danielvlemos.com.br

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui

## Rodando localmente

Precisa de Node.js e npm instalados.

\`\`\`sh
git clone https://github.com/danielvlemos/pinto-minis-landing.git
cd pinto-minis-landing
npm install
npm run dev
\`\`\`

## Deploy

O site roda em produção via Easypanel, num VPS próprio (Contabo), usando Nixpacks
pra build e \`npx serve\` pra servir os arquivos estáticos gerados em \`dist\`.

Um webhook do GitHub dispara o redeploy automaticamente a cada push na branch
\`main\`, sem precisar clicar em nada manualmente no painel.

teste
