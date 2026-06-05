// src/data/education.ts — formação acadêmica + certificações
export type Education = {
  icon: string;
  date: string;
  current?: boolean;
  title: string;
  institution: string;
};

export const education: Education[] = [
  {
    icon: "graduation-cap",
    date: "mar/2025 — dez/2028",
    current: true,
    title: "Bacharelado em Sistemas de Informação",
    institution: "Centro Universitário Paraíso — UniFAP",
  },
  {
    icon: "truck",
    date: "out/2025 — mar/2027",
    current: true,
    title: "Técnico em Logística",
    institution: "SENAI — Ceará",
  },
  {
    icon: "cpu",
    date: "jan/2022 — dez/2024",
    title: "Técnico em Informática",
    institution: "EEEP Aderson Borges de Carvalho",
  },
];

export type Certification = { icon: string; name: string };

export const certifications: Certification[] = [
  { icon: "cloud", name: "AWS Academy Cloud Foundations" },
  { icon: "radio-tower", name: "5G — Huawei" },
  { icon: "terminal", name: "Terminal Linux" },
  { icon: "flask-conical", name: "Testes Unitários" },
  { icon: "rocket", name: "Empreendedorismo" },
  { icon: "route", name: "Conexão Carreira" },
];
