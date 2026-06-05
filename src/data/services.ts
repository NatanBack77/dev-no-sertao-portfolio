// src/data/services.ts — 3 frentes de serviço (cobrem os 7 serviços oferecidos)
export type Service = {
  no: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    no: "S.01",
    icon: "server-cog",
    title: "Back-end & APIs",
    description:
      "APIs REST bem desenhadas em NestJS, Node e Laravel — modelagem de dados, cache e queries otimizadas para escalar desde o primeiro commit.",
    items: [
      "Desenvolvimento de APIs REST",
      "Cache, Prisma & otimização de queries",
      "Arquitetura em NestJS / Node / Laravel",
    ],
  },
  {
    no: "S.02",
    icon: "ship",
    title: "Infra, Cloud & Deploy",
    description:
      "Do servidor ao cluster: hardening de Linux/VPS, containers e deploys automatizados em Kubernetes, sem medo e sem downtime.",
    items: [
      "Hardening de servidores Linux / VPS",
      "Docker & deploy em Kubernetes",
      "Automação de deploys com CI/CD",
    ],
  },
  {
    no: "S.03",
    icon: "line-chart",
    title: "Observabilidade & Dados",
    description:
      "Enxergar o sistema antes do incidente: métricas, tracing e dashboards — além de análise de dados para decisão.",
    items: [
      "Observabilidade com Grafana / Prometheus",
      "Instrumentação com OpenTelemetry",
      "Análise de dados com Power BI",
    ],
  },
];
