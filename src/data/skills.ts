// src/data/skills.ts — 4 grupos de habilidades com nível e barra (0–100)
export type SkillTool = { name: string; slug: string; mono?: string };
export type Skill = { name: string; level: string; value: number; tools?: SkillTool[] };
export type SkillGroup = { id: string; icon: string; title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "A.01",
    icon: "server",
    title: "Linguagens & Back-end",
    skills: [
      {
        name: "Node.js · NestJS", level: "Avançado", value: 92,
        tools: [
          { name: "Node.js", slug: "nodedotjs" },
          { name: "NestJS", slug: "nestjs" },
        ],
      },
      {
        name: "TypeScript", level: "Avançado", value: 90,
        tools: [{ name: "TypeScript", slug: "typescript" }],
      },
      {
        name: "PHP · Laravel", level: "Sólido", value: 80,
        tools: [
          { name: "PHP", slug: "php" },
          { name: "Laravel", slug: "laravel" },
        ],
      },
      {
        name: "Golang", level: "Em evolução", value: 62,
        tools: [{ name: "Go", slug: "go" }],
      },
    ],
  },
  {
    id: "A.02",
    icon: "database",
    title: "Dados & Cache",
    skills: [
      {
        name: "PostgreSQL", level: "Avançado", value: 88,
        tools: [{ name: "PostgreSQL", slug: "postgresql" }],
      },
      {
        name: "Prisma ORM", level: "Avançado", value: 86,
        tools: [{ name: "Prisma", slug: "prisma" }],
      },
      {
        name: "Redis · Cache-Aside", level: "Avançado", value: 85,
        tools: [{ name: "Redis", slug: "redis" }],
      },
      {
        name: "MySQL", level: "Sólido", value: 82,
        tools: [{ name: "MySQL", slug: "mysql" }],
      },
    ],
  },
  {
    id: "A.03",
    icon: "container",
    title: "Infra, Cloud & DevOps",
    skills: [
      {
        name: "Docker", level: "Avançado", value: 90,
        tools: [{ name: "Docker", slug: "docker" }],
      },
      {
        name: "Kubernetes · Argo Rollouts", level: "Sólido", value: 80,
        tools: [
          { name: "Kubernetes", slug: "kubernetes" },
          { name: "Argo Rollouts", slug: "argo" },
        ],
      },
      {
        name: "AWS · Azure · Linux", level: "Sólido", value: 78,
        tools: [
          { name: "AWS", slug: "amazonwebservices", mono: "AWS" },
          { name: "Azure", slug: "microsoftazure", mono: "AZ" },
          { name: "Linux", slug: "linux" },
        ],
      },
      {
        name: "Terraform · IaC", level: "Sólido", value: 74,
        tools: [{ name: "Terraform", slug: "terraform" }],
      },
    ],
  },
  {
    id: "A.04",
    icon: "activity",
    title: "Observabilidade & CI/CD",
    skills: [
      {
        name: "OpenTelemetry", level: "Avançado", value: 84,
        tools: [{ name: "OpenTelemetry", slug: "opentelemetry" }],
      },
      {
        name: "GitHub Actions · CI/CD", level: "Sólido", value: 83,
        tools: [{ name: "GitHub Actions", slug: "githubactions" }],
      },
      {
        name: "Grafana · Prometheus", level: "Sólido", value: 82,
        tools: [
          { name: "Grafana", slug: "grafana" },
          { name: "Prometheus", slug: "prometheus" },
        ],
      },
      {
        name: "TDD · Testes unitários", level: "Sólido", value: 80,
        tools: [{ name: "TDD", slug: "", mono: "TDD" }],
      },
    ],
  },
];
