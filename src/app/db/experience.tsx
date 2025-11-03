export type Exp = {
  id: number;
  title: string;
  organization: string[];
  role: string[];
  description: string[];
  image: string;
  link: string;
};

export const experience: Exp[] = [
  {
    id: 4,
    title: "Manuscrit Graphisme – Portfolio Next.js optimisé SEO et performant",
    organization: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Zod",
      "React Hook Form",
      "Figma",
      "SEO",
      "Lighthouse",
      "Prometheus",
      "Grafana",
      "Vercel",
      "NextAuth",
    ],
    role: ["Développeur full-stack Next.js"],
    description: [
      "Conception du design sur Figma et développement complet avec Next.js, TailwindCSS et Shadcn/UI.",
      "Création d’un portfolio moderne, responsive et conforme aux standards W3C.",
      "Intégration d’un formulaire de contact fonctionnel avec React Hook Form et validation via Zod.",
      "Ajout d’un espace d’administration sécurisé avec authentification (NextAuth) permettant à l’administrateur de mettre à jour son portfolio.",
      "Optimisation du référencement (SEO) et des performances grâce aux audits Lighthouse.",
      "Mise en place de la surveillance et du monitoring avec Prometheus et Grafana.",
      "Déploiement professionnel sur Vercel avec nom de domaine personnalisé et HTTPS.",
    ],
    image: "/images/portfolios/manuscrit-graphisme.webp",
    link: "https://manuscrit-agency-app-d4wp.vercel.app",
  },

  {
    id: 1,
    title: "GreenComores – Site de prestations d’élagage Next.js optimisé SEO",
    organization: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "React Hook Form",
      "Zod",
      "Figma",
      "SEO",
      "Performance",
      "W3C",
      "Responsive Design",
      "Lighthouse",
      "Vercel",
      "Nom de domaine",
    ],
    role: ["Développeur front-end Next.js"],
    description: [
      "Conception du design sur Figma et développement complet avec Next.js, TailwindCSS et Shadcn/UI.",
      "Création d’un site vitrine professionnel pour les services d’élagage et d’entretien des espaces verts.",
      "Site responsive, conforme aux standards W3C et optimisé pour le SEO.",
      "Formulaire de contact dynamique avec validation via Zod.",
      "Vérification des performances via les audits Lighthouse.",
      "Déploiement sur Vercel avec nom de domaine personnalisé et HTTPS.",
    ],
    image: "/images/portfolios/greencomores.png",
    link: "https://green-comores-new-project-2uqs.vercel.app/",
  },

  {
    id: 5,
    title: "SVB PRESTA – Site vitrine Next.js optimisé et responsive",
    organization: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Figma",
      "SEO",
      "Vercel",
      "Performance",
      "Responsive Design",
    ],
    role: ["Développeur front-end Next.js"],
    description: [
      "Conception du design sur Figma et intégration du site avec Next.js et TailwindCSS.",
      "Création d’un site vitrine moderne, responsive et optimisé pour le SEO.",
      "Utilisation de Shadcn/UI pour une interface élégante et cohérente.",
      "Optimisation des performances (vitesse, accessibilité, bonnes pratiques).",
    ],
    image: "/images/portfolios/svb.webp",
    link: "https://svb-presta.vercel.app/",
  },
];
