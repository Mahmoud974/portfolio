export type Exp = {
  id: number;
  title: string;
  organization: string[];
  role: string[];
  description: string[];
  image: string;
  link: string;
  github: string;
};

export const experience: Exp[] = [
  {
    id: 1,
    title: "THEGROOMLAB",
    organization: [
      "Next.js",
      "TailwindCSS",
      "Terraform",
      "AWS S3",
      "CloudFront",
      "AWS IAM",
      "AWS CI/CD",
      "SNS",
      "CloudWatch"
    ],
    role: ["Développeur full-stack"],
    description: [
      "Développement d'une application vitrine avec Next.js, TailwindCSS et shadcn/ui pour une interface moderne, performante et responsive.",
      "Conception et provisionnement d'une infrastructure AWS entièrement automatisée via Terraform (S3, CloudFront, ACM, OAC, IAM).",
      "Mise en place d'un pipeline CI/CD complet : GitHub → CodePipeline → CodeBuild pour automatiser le build, le déploiement sur S3 et l'invalidation CloudFront.",
      "Implémentation d'un système de monitoring et d'alerting (CloudWatch + SNS) pour assurer l'observabilité et la supervision de l'infrastructure."
    ],
    image: "/images/portfolios/Thegroomlab.webp",
    link: "https://dke6djvrpp2ow.cloudfront.net",
    github: "https://github.com/Mahmoud974/thegroomlab"
  },
  {
    id: 4,
    title: "Manuscrit Graphisme – Portfolio Next.js optimisé SEO et performant",
    organization: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Route53",
      "Figma",
      "AWS S3",
      "Vercel",
      "Cloudfront",
      "Prometheus",
      "Grafana",
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
    link: "https://manuscrit-graphisme.vercel.app/",
    github: "https://github.com/Mahmoud974/Manuscrit-graphisme-app#"
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
    link: "https://website-plomberie.vercel.app/",
    github: "https://github.com/Mahmoud974/website-plomberie"
  },
];
