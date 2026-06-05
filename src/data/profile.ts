// src/data/profile.ts — identidade, hero e bio
export const profile = {
  name: "Natanael Marcelino",
  role: "Junior Backend & DevOps Engineer",
  brand: "Dev no Sertão",
  tagline: "Node.js · TypeScript · Golang · AWS",
  eyebrow: "Junior Backend & DevOps Engineer · Juazeiro do Norte, CE",
  location: "Juazeiro do Norte · CE · Brasil",
  hero: {
    title: ["Sistemas que", "escalam do", "*sertão* ao mundo."], // *...* = trecho em destaque (--primary)
    subtitle:
      "Sou Natanael Marcelino, desenvolvedor Back-End & DevOps em Juazeiro do Norte. " +
      "Construo APIs escaláveis, automatizo deploys e cuido da observabilidade que mantém aplicações de pé em produção.",
    stats: [
      { n: "7", label: "projetos entregues" },
      { n: "0", label: "downtime — deploys canary & blue-green" },
      { n: "24/7", label: "observabilidade com OpenTelemetry" },
    ],
  },
  about: {
    heading: "Do interior do Ceará para a engenharia que sustenta aplicações em produção.",
    paragraphs: [
      "Sou desenvolvedor Back-End e DevOps de Juazeiro do Norte, CE, apaixonado por tecnologia e inovação. Tenho experiência no desenvolvimento de APIs escaláveis, otimização de desempenho e automação de processos.",
      "Acredito que boas práticas de CI/CD, Docker e Kubernetes são fundamentais para a confiabilidade de aplicações em produção. Atualmente curso Sistemas de Informação na UniFAP — e estou sempre em busca de novos desafios.",
    ],
    values: [
      { icon: "gauge", title: "Performance", text: "Cache, queries e medição antes do palpite." },
      { icon: "infinity", title: "Automação", text: "CI/CD, IaC e deploys que se repetem sozinhos." },
      { icon: "shield-check", title: "Confiabilidade", text: "Observabilidade real e deploys sem downtime." },
    ],
  },
} as const;
