// src/data/projects.ts — 7 projetos em destaque
export type Project = {
  no: string;
  slotId: string;       // id do <ImageSlot>
  category: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;   // ocupa a linha inteira no grid
  image?: string;       // print padrão do projeto
};

export const projects: Project[] = [
  {
    no: "P.01",
    slotId: "proj-contabil",
    category: "Plataforma · Performance",
    title: "Guebly Contábil",
    description:
      "Plataforma de contabilidade com foco em performance e escalabilidade. Implementei o padrão Cache-Aside com Redis para reduzir latência em operações críticas, além de atuar na arquitetura e no code review do back-end.",
    tags: ["NestJS", "TypeScript", "Redis", "PostgreSQL", "Docker"],
    featured: true,
    image: "/assets/gubley-contabil.png",
  },
  {
    no: "P.02",
    slotId: "proj-pay",
    category: "Pagamentos · Refatoração",
    title: "Guebly Pay",
    description:
      "Refatoração completa do módulo de pagamentos, modernizando a base de código e garantindo maior confiabilidade nas transações financeiras.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
    image: "/assets/guebly-pay.png",
  },
  {
    no: "P.03",
    slotId: "proj-afiliados",
    category: "Domínio · Manutenibilidade",
    title: "Guebly Afiliados",
    description:
      "Refatoração do sistema de afiliados, reestruturando regras de negócio e integrações internas para maior manutenibilidade e consistência com os demais módulos da plataforma.",
    tags: ["NestJS", "TypeScript", "PostgreSQL"],
    image: "/assets/guebly-affiliados.png",
  },
  {
    no: "P.04",
    slotId: "proj-obs",
    category: "Observabilidade · SRE",
    title: "Stack de Observabilidade",
    description:
      "Observabilidade completa para produção — métricas, rastreamento distribuído e dashboards. Instrumentação automática e manual via OpenTelemetry.",
    tags: ["Grafana", "Prometheus", "OpenTelemetry", "Docker", "NestJS"],
  },
  {
    no: "P.05",
    slotId: "proj-k8s",
    category: "Infra · Deploy progressivo",
    title: "Kubernetes + Argo Rollouts",
    description:
      "Infraestrutura de deploy progressivo em Kubernetes com Argo Rollouts, habilitando estratégias canary e blue-green para releases seguros e sem downtime.",
    tags: ["Kubernetes", "Argo Rollouts", "Helm", "Docker"],
  },
  {
    no: "P.06",
    slotId: "proj-tg",
    category: "Sistema de domínio · Algoritmos",
    title: "Tiro de Guerra — Escala",
    description:
      "Sistema de escalas militares com algoritmo de fila circular gerenciando seis filas independentes, regras de bloqueio para adventistas, lógica de substituição/ausência e acúmulo de pontos.",
    tags: ["React", "Node.js", "Docker"],
    image: "/assets/arranchamento-tiro.png",
  },
  {
    no: "P.07",
    slotId: "proj-zenti",
    category: "Tempo real · Indústria",
    title: "ZENTI Dashboard",
    description:
      "Dashboard de monitoramento industrial de máquinas em tempo real, focado em visualização de dados de produção e alertas de parada.",
    tags: ["React", "Node.js", "Docker"],
  },
];
