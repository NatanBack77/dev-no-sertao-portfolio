# CLAUDE.md — Dev no Sertão Portfolio

## Projeto

Portfolio pessoal de Natanael Marcelino — **Dev no Sertão** — Junior Back-end & DevOps Engineer de Juazeiro do Norte, CE.

Stack: **Vite + React + TypeScript**

## Comandos essenciais

```bash
npm run dev      # dev server em http://localhost:5173
npm run build    # build de produção (tsc + vite)
npm run preview  # preview do build
```

## Estrutura

```
src/
├── styles/portfolio.css   # design system — NÃO alterar tokens sem razão
├── data/                  # conteúdo tipado (skills, experience, projects…)
├── hooks/
│   ├── useReveal.ts       # IntersectionObserver → .is-in
│   └── useTweaks.ts       # tema / paleta / animação → CSS vars no <html>
├── components/
│   ├── Nav.tsx + MobileMenu.tsx
│   ├── BrandIcon.tsx      # simple-icons, mono→brand color on hover
│   ├── ImageSlot.tsx      # drag-and-drop + localStorage
│   ├── Marquee.tsx        # stack marquee duplo
│   ├── TweaksPanel.tsx    # painel flutuante de ajustes visuais
│   └── Footer.tsx
└── sections/              # Hero About Skills Experience Projects Stack Services Education Contact
```

## Regras de design

- **`portfolio.css` é a fonte da verdade.** Não reescrever tokens em Tailwind/CSS-in-JS.
- Classes CSS idênticas ao protótipo de referência (`dev no Sertão - Portfólio.html`).
- Ícones: `lucide-react`, **`strokeWidth={1.75}`** em todos.
- Logos de marca: `simple-icons` via `BrandIcon.tsx`; fallback mono badge para ícones ausentes.
- Sem emoji no código ou UI.
- Conteúdo em PT-BR, impessoal e factual.

## Tweaks panel

Persiste em `localStorage` (`devnsertao-tweaks`). Aplica vars CSS em `<html>` antes do primeiro paint (inline script em `index.html`).

Controles: **Tema** (escuro/claro) · **Paleta** (terracota/ocre/caatinga/brasa) · **Animação** (sutil/padrão/expressivo).

## Conteúdo

Editar apenas os arquivos em `src/data/` — nunca reescrever conteúdo diretamente no JSX.

Design de referência em `../portifolio-devnsertao/handoff-vite/design-reference/`.
