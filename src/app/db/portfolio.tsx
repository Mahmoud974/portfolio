export type Portfolio = {
  id: number;
  title: string;
  description: string[]; 
  image: string;
  tags: string[];
  link: string;
};

export const portfolios: Portfolio[] = [
 
  {
    id: 1,
    title: "ISANO",
    description: [
      "Développement du front-end avec Next.js, TailwindCSS et shadcn/ui pour une interface moderne et responsive.",
      "Mise en place d’un formulaire de contact validé avec Zod et connecté à EmailJS pour l’envoi automatique des messages.",
      "Gestion des composants réutilisables et design system via shadcn/ui.",
      "Déploiement de l’application sur Vercel avec intégration continue automatique.",
    ],
    image: "/images/portfolios/rsdeliv.webp",
    tags: [
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Zod",
      "EmailJS",
      "Vercel",
    ],
    link: "https://rsdeliv.vercel.app/",
  },  
  {
    id: 2,
    title: "Product List – Composant React déployé sur AWS",
    description: [
      "Création d’un composant React interactif affichant une liste de produits avec gestion du panier.",
      "Interface moderne et responsive développée avec React et TailwindCSS.",
      "Infrastructure déployée via Terraform (S3, CloudFront) pour l’hébergement statique.",
      "Pipeline CI/CD et hébergement gérés avec AWS Amplify.",
      "Surveillance et logs configurés avec AWS CloudWatch.",
    ],
    image: "/images/portfolios/dessert.webp",
    tags: [
      "React",
      "TailwindCSS",
      "Terraform",
      "AWS Amplify",
      "S3",
      "CloudFront",
      "API Gateway",
      "CloudWatch",
    ],
    link: "https://product-cart-plum.vercel.app/",
  },
  
  
  {
    id: 3,
    title: "Static job – Déploiement React sur AWS",
    description: [
      "Développement d’une application statique avec React et TailwindCSS.",
      "Mise en place d’un pipeline CI/CD automatisé via AWS CodePipeline et CodeBuild.",
      "Déploiement de l’application sur un bucket S3 configuré pour l’hébergement statique.",
      "Distribution optimisée et sécurisée grâce à AWS CloudFront (CDN).",
      "Infrastructure S3 + CloudFront entièrement provisionnée via Terraform (Infrastructure as Code).",
      "Intégration continue et gestion du code source via GitHub.",
    ],
    image: "/images/portfolios/static-job.webp",
    tags: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Terraform",
      "AWS CodeBuild",
      "AWS CodePipeline",
      "S3",
      "AWS CloudFront",
    ],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 4,
    title: "Ticket Generator",
    description: [
      "Développement d’une application React permettant de générer des tickets personnalisés à partir d’un formulaire dynamique.",
      "Validation des champs utilisateur avec Zod et gestion du formulaire via React Hook Form pour une expérience fluide et sécurisée.",
      "Stockage des images des tickets sur Amazon S3 afin d’assurer une persistance et un accès rapide.",
      "Base de données DynamoDB reliée à l’API pour enregistrer les informations des participants.",
      "API serverless construite avec AWS Lambda et exposée via API Gateway pour la génération et la transmission des données vers n8n.",
      "Automatisation du flux avec n8n : réception des données, envoi automatique des tickets par EmailJS et ajout du participant dans une base Notion.",
      "Déploiement et hébergement du site via AWS Amplify avec build automatisé depuis le dépôt GitHub.",
      "Optimisation et diffusion des images via Cloudflare pour de meilleures performances globales.",
    ],
    image: "/images/portfolios/ticket.webp",
    tags: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "S3",
      "n8n",
      "EmailJS",
      "Zod",
      "React Hook Form",
      "AWS Amplify",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
     
      "Notion API",
      "Cloudflare",
    ],
    link: "https://tip-calculator-new.vercel.app/",
  }
  ,
  
  {
    id: 5,
    title: "Sofachic – Application e-commerce Next.js fullstack avec Supabase",
    description: [
      "Conception du design sur Figma.",
      "Développement d’une application e-commerce complète avec filtres avancés, gestion du panier et profils utilisateurs personnalisés.",
      "Architecture fullstack réalisée avec Next.js (front-end et API routes) et base de données PostgreSQL hébergée sur Supabase.",
      "Intégration de Zustand pour la gestion globale des états et des sessions utilisateurs.",
      "Interface moderne et accessible réalisée avec Shadcn/UI et TailwindCSS.",
      "Implémentation d’une page dynamique pour chaque produit via une route paramétrée.",
      "Déploiement et hébergement continus sur Vercel, avec configuration optimisée des performances.",
    ],
    image: "/images/portfolios/sofachic.webp",
    tags: [
      "Next.js (Fullstack)",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Zustand",
      "TailwindCSS",
      "Shadcn/UI",
      "NexAuth",
      "nuqs",
      "Figma",
      "Vercel",
    ],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 6,
    title: "Manuscrit Graphisme – Portfolio Next.js optimisé SEO et performant",
    description: [
      "Conception du design sur Figma et développement complet avec Next.js, TailwindCSS et Shadcn/UI.",
    "Création d’un portfolio moderne, responsive et conforme aux standards W3C.",
    "Intégration d’un formulaire de contact fonctionnel avec React Hook Form et validation via Zod.",
    "Ajout d’un espace d’administration sécurisé avec authentification (NextAuth) permettant à l’administrateur de se connecter et de mettre à jour son portfolio en toute autonomie.",
    "Optimisation du référencement (SEO), de la vitesse et des performances grâce aux audits Lighthouse.",
    "Mise en place de la surveillance et du monitoring de l’application avec Prometheus et Grafana pour suivre les métriques de performance en temps réel.",
    "Déploiement professionnel sur Vercel avec nom de domaine personnalisé et configuration HTTPS.",
    ],
    image: "/images/portfolios/manuscrit-graphisme.webp",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Zod",
      "React Hook Form",
      "Figma",
      "SEO",
      "NexAuth",
      "Lighthouse",
      "Prometheus",
      "Grafana",
      "Vercel",
  
    ],
    link: "https://product-cart-plum.vercel.app/",
  },
  


  {
    id: 7,
    title: "SVB PRESTA – Site vitrine Next.js optimisé et responsive",
    description: [
      "Conception du design sur Figma et intégration du site avec Next.js et TailwindCSS.",
      "Création d’un site vitrine moderne, entièrement responsive et optimisé pour le référencement (SEO).",
      "Utilisation de Shadcn/UI pour une interface élégante et cohérente.",
      "Analyse et optimisation des performances (vitesse de chargement, accessibilité, bonnes pratiques).",
      
    ],
    image: "/images/portfolios/svb.webp",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Figma",
      "SEO",
      "Vercel",
      "Performance",
      "Responsive Design",
   
    ],
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
  {
    id: 8,
    title: "Les Petits Plats – Application de recherche de recettes",
    description: [
      "Développement d’une application en JavaScript Vanilla permettant de rechercher et filtrer des recettes de cuisine.",
      "Optimisation des algorithmes de recherche pour de meilleures performances et une expérience fluide.",
      "Mise en page responsive réalisée avec TailwindCSS et respect des standards W3C pour un code propre et accessible.",
      "Vérification des performances et de la vitesse via les audits Lighthouse (Google).",
      "Déploiement sur AWS S3 avec distribution CloudFront pour un chargement rapide et sécurisé.",
      "Intégration d’un pipeline GitLab CI/CD pour automatiser le build et la mise en ligne.",
    ],
    image: "/images/portfolios/meals.webp",
    tags: [
      "JavaScript Vanilla",
      "TailwindCSS",
      "Responsive Design",
      "Performance",
      "W3C",
      "Lighthouse",
      "GitLab CI/CD",
      "AWS S3",
      "CloudFront",
      "Algorithmes",
      "Recherche et filtrage",
    ],
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
  
  {
    id: 9,
    title: "GreenComores – Site de prestations d’élagage Next.js optimisé SEO",
    description: [
      "Conception du design sur Figma et développement complet avec Next.js, TailwindCSS et Shadcn/UI.",
      "Création d’un site vitrine professionnel dédié aux services d’élagage et d’entretien des espaces verts.",
      "Site entièrement responsive, conforme aux standards W3C et optimisé pour le référencement naturel (SEO).",
      "Intégration d’un formulaire de contact dynamique avec React Hook Form et validation sécurisée via Zod, permettant de demander un devis rapidement.",
      "Vérification de la vitesse et des performances via les audits Lighthouse pour garantir une expérience fluide.",
      "Déploiement sur Vercel avec nom de domaine personnalisé et configuration HTTPS.",
    ],
    image: "/images/portfolios/greencomores.png",
    tags: [
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
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
  
  
  
];
