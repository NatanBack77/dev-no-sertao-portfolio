// src/data/experience.ts — trajetória (recente → antiga)
export type Job = {
  date: string;
  current?: boolean;
  role: string;
  company: string;
  context: string;
  description: string;
  tags: string[];
  logo?: string;
};

export const experience: Job[] = [
  {
    date: "nov/2025 — Atual",
    current: true,
    role: "Jovem Aprendiz — Gestão & Dados",
    company: "Cajuína São Geraldo",
    logo: "/assets/logo-cajuina.webp",
    context: "Indústria de bebidas",
    description:
      "Gestão documental, construção de relatórios em Power BI e apoio a auditorias da linha de produção — unindo organização de dados ao olhar de quem desenvolve.",
    tags: ["Power BI", "Gestão documental", "Auditoria"],
  },
  {
    date: "nov/2025 — fev/2026",
    role: "Back-end Developer",
    company: "Guebly",
    logo: "/assets/logo-guebly.png",
    context: "Plataforma contábil & financeira",
    description:
      "Desenvolvimento back-end em NestJS. Implementação do padrão Cache-Aside com Redis, refatoração dos módulos de pagamento e afiliados, e observabilidade com Grafana, Prometheus e OpenTelemetry. Deploys em Kubernetes com Argo Rollouts.",
    tags: ["NestJS", "Redis", "PostgreSQL", "Kubernetes", "OpenTelemetry"],
  },
  {
    date: "jul/2025 — nov/2025",
    role: "Back-end Developer",
    company: "Octor",
    logo: "/assets/octor.jpeg",
    context: "Juazeiro do Norte, CE",
    description:
      "Desenvolvimento de APIs RESTful em Node.js, com foco em boas práticas, integrações e estabilidade dos serviços em produção.",
    tags: ["Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    date: "ago/2024 — dez/2024",
    role: "Estágio Back-end",
    company: "PepCode Tecnologia",
    context: "Desenvolvimento de software",
    description:
      "APIs escaláveis em NestJS com PostgreSQL, Prisma ORM, Redis e Docker. Otimização de queries e desafios práticos semanais de back-end. Contribuí na plataforma do Hack in Cariri, evento de segurança da informação e CTF do interior do Ceará.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Docker", "Hack in Cariri"],
    logo: "/assets/hackincariri.png",
  },
];
