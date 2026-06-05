# Dev no Sertão — Portfólio

Portfolio pessoal de **Natanael Marcelino** — Junior Backend & DevOps Engineer de Juazeiro do Norte, CE.

> APIs escaláveis, deploys automatizados e sistemas que não caem.

## Stack

- **Vite + React + TypeScript**
- `lucide-react` — ícones de UI
- `simple-icons` — logos de marca na stack marquee
- `@fontsource` — Archivo · Zilla Slab · IBM Plex Mono
- CSS custom properties puras (sem Tailwind / CSS-in-JS)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Seções

| # | Seção | Descrição |
|---|-------|-----------|
| 01 | Sobre | Bio, foto (drag-and-drop) e valores |
| 02 | Habilidades | 4 grupos com barras animadas |
| 03 | Experiência | Timeline de 4 empregos |
| 04 | Projetos | 7 projetos com slots de imagem |
| 05 | Stack | Marquee duplo com brand icons |
| 06 | Serviços | 3 frentes de atuação |
| 07 | Formação | Cursos + 6 certificações |
| 08 | Contato | E-mail, WhatsApp, GitHub, LinkedIn |

## Painel de ajustes (Tweaks)

Botão flutuante no canto inferior direito. Controla:

- **Tema** — Escuro / Claro
- **Paleta** — Terracota · Ocre · Caatinga · Brasa
- **Animação** — Sutil · Padrão · Expressivo

Preferências persistem no `localStorage`.

## Personalizando conteúdo

Edite os arquivos em `src/data/` — nunca o JSX diretamente:

```
src/data/
├── profile.ts
├── skills.ts
├── experience.ts
├── projects.ts
├── services.ts
├── education.ts
├── stack.ts
└── contact.ts
```

## Contato

- **E-mail:** natan.devback@gmail.com
- **GitHub:** [NatanBack77](https://github.com/NatanBack77)
- **LinkedIn:** [natanael-marcelino-78487b291](https://linkedin.com/in/natanael-marcelino-78487b291)
- **WhatsApp:** (88) 98199-4045
