export type Exp = {
  id: number;
  title: string;
  organization: string[];
  role: string[];
  description: string[] | undefined;
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
      "NexAuth",
    ],
    role: ["Développeur full-stack Next.js"],
    description: [
      "Conception du design sur Figma et développement complet avec Next.js, TailwindCSS et Shadcn/UI.",
    "Création d’un portfolio moderne, responsive et conforme aux standards W3C.",
    "Intégration d’un formulaire de contact fonctionnel avec React Hook Form et validation via Zod.",
    "Ajout d’un espace d’administration sécurisé avec authentification (NextAuth) permettant à l’administrateur de se connecter et de mettre à jour son portfolio en toute autonomie.",
    "Optimisation du référencement (SEO), de la vitesse et des performances grâce aux audits Lighthouse.",
    "Mise en place de la surveillance et du monitoring de l’application avec Prometheus et Grafana pour suivre les métriques de performance en temps réel.",
    "Déploiement professionnel sur Vercel avec nom de domaine personnalisé et configuration HTTPS.",
    ],
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
      "Création d’un site vitrine professionnel dédié aux services d’élagage et d’entretien des espaces verts.",
      "Site entièrement responsive, conforme aux standards W3C et optimisé pour le référencement naturel (SEO).",
      "Intégration d’un formulaire de contact dynamique avec React Hook Form et validation sécurisée via Zod, permettant de demander un devis rapidement.",
      "Vérification de la vitesse et des performances via les audits Lighthouse pour garantir une expérience fluide.",
      "Déploiement sur Vercel avec nom de domaine personnalisé et configuration HTTPS.",
    ],
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
    role: ["Developpeur front-end Next.js"],
    description: [
      "Conception du design sur Figma et intégration du site avec Next.js et TailwindCSS.",
      "Création d’un site vitrine moderne, entièrement responsive et optimisé pour le référencement (SEO).",
      "Utilisation de Shadcn/UI pour une interface élégante et cohérente.",
      "Analyse et optimisation des performances (vitesse de chargement, accessibilité, bonnes pratiques).",
    ],
  },
];
