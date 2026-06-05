// src/data/stack.ts — ferramentas do marquee, com slug do pacote `simple-icons`.
//
// Uso no BrandIcon.tsx:
//   import * as si from "simple-icons";
//   const icon = si["si" + Pascal(slug)];  // ex.: siNodedotjs
//   <svg viewBox="0 0 24 24"><path d={icon.path} /></svg>   // fill: currentColor
//   brand color = `#${icon.hex}` (mostrar no hover)
//
// `mono` = quando NÃO existe ícone no simple-icons → renderiza um selo de texto
// usando a classe .tech__logo.is-mono (ex.: Power BI = "BI").

export type Tech = { name: string; slug: string; mono?: string };

export const stack: Tech[] = [
  { name: "PHP", slug: "php" },
  { name: "Laravel", slug: "laravel" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "NestJS", slug: "nestjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Go", slug: "go" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "Redis", slug: "redis" },
  { name: "Prisma", slug: "prisma" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Argo Rollouts", slug: "argo" },
  { name: "Terraform", slug: "terraform" },
  { name: "AWS", slug: "amazonwebservices", mono: "AWS" }, // pode faltar no simple-icons → selo
  { name: "Azure", slug: "microsoftazure", mono: "AZ" },   // idem
  { name: "Linux", slug: "linux" },
  { name: "Bash", slug: "gnubash" },
  { name: "Grafana", slug: "grafana" },
  { name: "Prometheus", slug: "prometheus" },
  { name: "OpenTelemetry", slug: "opentelemetry" },
  { name: "Git", slug: "git" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "Power BI", slug: "powerbi", mono: "BI" },       // não existe no simple-icons → selo "BI"
  { name: "Figma", slug: "figma" },
];
