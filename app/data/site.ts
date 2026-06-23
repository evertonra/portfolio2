export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "whatsapp" | "email";
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  type: string;
  highlights: string[];
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  fullImage: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  status?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const profile = {
  name: "Éverton Rafael Adams",
  shortName: "Éverton Adams",
  role: "Desenvolvedor Front-end",
  headline: "Vue.js • Nuxt.js • PHP • Laravel",
  location: "Nova Petrópolis, RS",
  email: "everton-adams@hotmail.com",
  phone: "(54) 99173-2802",
  availability: "Disponível para projetos",
  bio: "Desenvolvedor Front-end com mais de 4 anos de experiência na criação de interfaces modernas, performáticas e centradas no usuário. Atuo principalmente com Vue.js e Nuxt.js, com vivência em React, Next.js, PHP e Laravel — sempre com foco em performance, acessibilidade, SEO, componentização escalável e qualidade via testes automatizados.",
  intro:
    "Transformo ideias em experiências digitais rápidas, acessíveis e com código limpo — do SaaS ao e-commerce, do institucional à landing page de alta conversão.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/evertonra/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/evertonra", icon: "github" },
  { label: "WhatsApp", href: "https://wa.me/5554991732802", icon: "whatsapp" },
  { label: "E-mail", href: "mailto:everton-adams@hotmail.com", icon: "email" },
];

export const navLinks: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contact" },
];

export const stats: Stat[] = [
  {
    value: "4+",
    label: "Anos de experiência",
    description: "Construindo interfaces para web",
  },
  {
    value: "100",
    label: "Lighthouse",
    description: "Foco constante em performance e SEO",
  },
  {
    value: "5",
    label: "Frameworks principais",
    description: "Vue, Nuxt, React, Next e Laravel",
  },
  {
    value: "3+",
    label: "Anos em SaaS",
    description: "Portais, e-commerces e produtos digitais",
  },
];

export const experiences: Experience[] = [
  {
    period: "Mai 2023 – Atual",
    role: "Desenvolvedor Front-end",
    company: "DIX Digital",
    type: "Remoto",
    highlights: [
      "Desenvolvimento de soluções SaaS para portais, e-commerces e sites institucionais com Vue.js, Nuxt.js e Angular.",
      "Integração com APIs RESTful e validação de endpoints com Postman.",
      "Implementação e manutenção de testes automatizados com Vitest (unitários) e Playwright (E2E).",
      "Otimização de processos internos, melhorando performance, escalabilidade e qualidade de código.",
      "Colaboração com equipes de UI/UX e back-end em metodologias ágeis (Scrum).",
      "Apoio em migração e modernização de sistemas legados.",
    ],
  },
  {
    period: "Mar 2022 – Mai 2023",
    role: "Desenvolvedor Front-end",
    company: "Freelancer",
    type: "Autônomo",
    highlights: [
      "Criação de landing pages, e-commerces e sistemas institucionais personalizados.",
      "Configuração de hospedagem, deploy e integrações.",
      "Foco em responsividade, acessibilidade e SEO técnico.",
    ],
  },
  {
    period: "Jun 2021 – Mar 2022",
    role: "Desenvolvedor Front-end",
    company: "Luz da Serra",
    type: "Presencial",
    highlights: [
      "Desenvolvimento de páginas de vendas e campanhas digitais integradas a marketing.",
      "Gerenciamento de servidores de hospedagem e domínios.",
      "Colaboração com design e marketing para interfaces otimizadas para conversão.",
    ],
  },
];

export const education: Education[] = [
  {
    period: "2023 – 2025",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Unicesumar",
  },
  {
    period: "02/2025 – Atual",
    degree: "Cyber Security",
    institution: "Unicesumar",
    status: "Em andamento",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    category: "Agross do Brasil",
    title: "Site institucional",
    description:
      "Portal corporativo desenvolvido com Nuxt.js, focado em performance e SEO.",
    tags: ["Nuxt.js", "Vue.js", "SEO"],
    thumbnail: "/images/projects/w1.png",
    fullImage: "/images/projects/work1-2.png",
  },
  {
    id: 2,
    category: "Sigre",
    title: "Sistema de gestão de vendas",
    description:
      "Plataforma SaaS para gestão comercial com interface responsiva e integração via API.",
    tags: ["Vue.js", "API REST", "SaaS"],
    thumbnail: "/images/projects/w2.png",
    fullImage: "/images/projects/work2-2.png",
  },
  {
    id: 3,
    category: "Canora Tropical",
    title: "Landing page de captação",
    description:
      "Página otimizada para conversão e geração de leads qualificados.",
    tags: ["Landing Page", "Conversão", "Responsivo"],
    thumbnail: "/images/projects/w3.png",
    fullImage: "/images/projects/work3-2.png",
  },
  {
    id: 4,
    category: "Farma Simplifica",
    title: "Landing page de produto",
    description:
      "Página de vendas com foco em copy, UX e performance para produto digital.",
    tags: ["Landing Page", "Performance", "UX"],
    thumbnail: "/images/projects/w4.png",
    fullImage: "/images/projects/work4-2.png",
  },
  {
    id: 5,
    category: "Incligeo",
    title: "Site institucional",
    description:
      "Presença digital corporativa com arquitetura escalável e design moderno.",
    tags: ["WordPress", "Institucional", "SEO"],
    thumbnail: "/images/projects/w5.png",
    fullImage: "/images/projects/work5-2.png",
  },
  {
    id: 6,
    category: "Código dos Ativos Digitais",
    title: "Landing page de ebook",
    description:
      "Página de vendas para produto digital com alta taxa de conversão.",
    tags: ["Landing Page", "Ebook", "Marketing"],
    thumbnail: "/images/projects/w6.png",
    fullImage: "/images/projects/work6-2.png",
  },
  {
    id: 7,
    category: "Códigos de Saint Germain",
    title: "Landing page de ebook",
    description:
      "Experiência de compra fluida com design persuasivo e mobile-first.",
    tags: ["Landing Page", "Mobile-first", "Conversão"],
    thumbnail: "/images/projects/w7.png",
    fullImage: "/images/projects/work7.png",
  },
  {
    id: 8,
    category: "Códigos de Salomão",
    title: "Landing page de ebook",
    description:
      "Página de lançamento com estrutura otimizada para campanhas digitais.",
    tags: ["Landing Page", "Campanha", "Performance"],
    thumbnail: "/images/projects/w8.png",
    fullImage: "/images/projects/work8.png",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    items: ["Vue.js", "Nuxt.js", "React.js", "Next.js"],
  },
  {
    title: "Back-end",
    items: ["PHP", "Laravel", "MySQL", "API REST"],
  },
  {
    title: "Linguagens & Estilo",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "GitLab", "Postman", "Trello", "Figma"],
  },
  {
    title: "Testes",
    items: ["Vitest", "Playwright", "Testes unitários", "Testes E2E"],
  },
  {
    title: "Metodologias",
    items: ["Scrum", "Code Review", "Componentização", "SEO", "Acessibilidade"],
  },
];

export const softSkills = [
  "Comunicação clara",
  "Colaboração em equipe",
  "Foco em resultados",
  "Proatividade",
  "Liderança técnica",
  "Resolução de problemas",
  "Aprendizado contínuo",
];

export const services: Service[] = [
  {
    title: "Landing Pages",
    description:
      "Páginas otimizadas para conversão, com código personalizado e máxima performance.",
    icon: "rocket",
  },
  {
    title: "Sites Institucionais",
    description:
      "Sites completos, modernos e responsivos para apresentar sua marca com autoridade.",
    icon: "building",
  },
  {
    title: "Sistemas sob demanda",
    description:
      "Desenvolvimento personalizado com integração via API — portais, painéis e SaaS.",
    icon: "code",
  },
];
