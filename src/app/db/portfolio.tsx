export type Portfolio = {
  id: number;
  title: string;
  description: string[]; 
  image: string;
  tags: string[];
  link: string;
  github: string;    
};

export const portfolios: Portfolio[] = [
 
  

  
  
  {
    id: 3,
    title: "Static job – Déploiement React sur AWS",
    description: [
      "Développement d’une application front-end moderne avec React.js et TailwindCSS.",
      "Déploiement et hébergement de l’application via AWS Amplify avec intégration directe à GitHub.",
      "Mise en place d’une intégration et livraison continues (CI/CD) automatisées grâce à AWS Amplify.",
      "Surveillance des performances et des logs de l’application via AWS CloudWatch.",
      "Configuration de notifications et d’alertes via AWS SNS pour le suivi des événements et erreurs.",
      "Application optimisée pour la performance, la maintenabilité et la scalabilité."
    ],
    
    image: "/images/portfolios/static-job.webp",
    tags: [
      "React.js",
      "TailwindCSS",
      "TypeScript",
      "AWS Amplify",
      "Cloudwatch",
      "AWS SNS",
       
    ],
    link: "https://main.d12sna0yvan4qm.amplifyapp.com/",
    github: "https://github.com/Mahmoud974/static-job-main"
  },
  {
    id: 4,
    title: "Ticket Generator - Automatisation serverless de billetterie",
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
      "AWS DynamoDB",
      "Cloudflare",
    ],
    link: "https://main.d12coea0w84vd9.amplifyapp.com/",
    github: "https://github.com/Mahmoud974/ticket-generator-aws"
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
    link: "https://sofachic-app.vercel.app/",
    github: "https://github.com/Mahmoud974/e-commerce-project"
  },
  {
    id: 2,
    title: "Product List – Composant React déployé sur AWS",
    description: [
      "Création d’un composant React interactif affichant une liste de produits avec gestion du panier.",
      "Interface moderne et responsive développée avec React et TailwindCSS.",
      "Infrastructure déployée via Terraform (S3, CloudFront) pour les images.",
      "Surveillance et logs configurés avec AWS CloudWatch.",
    ],
    image: "/images/portfolios/dessert.webp",
    tags: [
      "React",
      "TailwindCSS",
      "Terraform",
      "Vercel",
      "S3",
      "CloudFront",
      "CloudWatch",
    ],
    link: "https://product-cart-plum.vercel.app/",
    github: "https://github.com/Mahmoud974/Product_cart"
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
    github: "https://github.com/Mahmoud974/Les_petits_plats_project"
  },
  
 
  
];
