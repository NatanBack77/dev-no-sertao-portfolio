// src/data/skills.ts — 4 grupos de habilidades com nível e barra (0–100)
export type Skill = { name: string; level: string; value: number };
export type SkillGroup = { id: string; icon: string; title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "A.01",
    icon: "server",
    title: "Linguagens & Back-end",
    skills: [
      { name: "Node.js · NestJS", level: "Avançado", value: 92 },
      { name: "TypeScript", level: "Avançado", value: 90 },
      { name: "PHP · Laravel", level: "Sólido", value: 80 },
      { name: "Golang", level: "Em evolução", value: 62 },
    ],
  },
  {
    id: "A.02",
    icon: "database",
    title: "Dados & Cache",
    skills: [
      { name: "PostgreSQL", level: "Avançado", value: 88 },
      { name: "Prisma ORM", level: "Avançado", value: 86 },
      { name: "Redis · Cache-Aside", level: "Avançado", value: 85 },
      { name: "MySQL", level: "Sólido", value: 82 },
    ],
  },
  {
    id: "A.03",
    icon: "container",
    title: "Infra, Cloud & DevOps",
    skills: [
      { name: "Docker", level: "Avançado", value: 90 },
      { name: "Kubernetes · Argo Rollouts", level: "Sólido", value: 80 },
      { name: "AWS · Azure · Linux", level: "Sólido", value: 78 },
      { name: "Terraform · IaC", level: "Sólido", value: 74 },
    ],
  },
  {
    id: "A.04",
    icon: "activity",
    title: "Observabilidade & CI/CD",
    skills: [
      { name: "OpenTelemetry", level: "Avançado", value: 84 },
      { name: "GitHub Actions · CI/CD", level: "Sólido", value: 83 },
      { name: "Grafana · Prometheus", level: "Sólido", value: 82 },
      { name: "TDD · Testes unitários", level: "Sólido", value: 80 },
    ],
  },
];
