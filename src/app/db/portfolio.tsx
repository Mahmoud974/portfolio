export type Portfolio = {
  id: number;
  title: string;
  description: string[]; // toujours un tableau
  image: string;
  tags: string[];
  link: string;
};

export const portfolios: Portfolio[] = [
 
  {
    id: 1,
    title: "RS Deliv",
    description: [
      "Front-end Next.js avec shadcn/ui",
      "Pipeline GitLab CI/CD → build, tests, audit SEO, déploiement infra/app.",
      "Infra AWS: EC2 (ASG) derrière ELB, servi via CloudFront (cache, TLS, compression).",
    ],
    image: "/images/portfolios/rsdeliv.webp",
    tags: [
      "Next.js",
      "emailjs",
      "shadcn/ui",
      "gitlab",
      "Terraform",
      "cloudfront",
      "elb",
      "asg",
      "ec2",
      "lambda",
    ],
    link: "https://product-cart-plum.vercel.app/",
  },
  {
    id: 2,
    title: "Product list with cart",
    description: [
      "Application e-commerce simple avec gestion du panier.",
      "Backend serverless AWS (API Gateway + Lambda + CloudWatch).",
    ],
    image: "/images/portfolios/dessert.webp",
    tags: ["React.js", "tailwindcss", "api gateway", "lambda", "cloudwatch", "amplify"],
    link: "https://product-cart-plum.vercel.app/",
  },
  {
    id: 3,
    title: "Static job",
    description: [
      "Déploiement d’une app containerisée avec Docker.",
      "Orchestrée sur Kubernetes (EKS).",
    ],
    image: "/images/portfolios/static-job.webp",
    tags: ["Next.js", "Typescript", "Docker", "Kubernetes", "EKS"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 4,
    title: "Ticket generator",
    description: [
      "Application pour générer et envoyer des tickets personnalisés.",
      "Envoi d’emails via EmailJS + AWS (Lambda, SQS).",
    ],
    image: "/images/portfolios/ticket.webp",
    tags: ["React.js", "Typescript", "EmailJS", "Docker", "api gateway", "lambda", "SQS"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 5,
    title: "Sofachic",
    description: [
      "E-commerce spécialisé avec filtres avancés et gestion du panier.",
      "Chatbot AWS Lex et tests unitaires Jest.",
    ],
    image: "/images/portfolios/sofachic.webp",
    tags: ["next.js front & back", "typescript", "zod", "zustand", "aws lex", "docker", "jest"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 6,
    title: "Interactive commentaires",
    description: [
      "Application React/TS permettant d’ajouter, modifier et supprimer des commentaires.",
    ],
    image: "/images/portfolios/comments.webp",
    tags: ["React.js", "Typescript", "Zod", "Tailwindcss"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 7,
    title: "SVB PRESTA",
    description: [
      "Site vitrine statique avec hébergement S3 + CloudFront.",
      "Pipeline CI/CD via GitLab.",
    ],
    image: "/images/portfolios/svb.webp",
    tags: ["tailwindcss", "js vanilla", "gitlab", "aws s3", "aws cloudfront"],
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
  {
    id: 8,
    title: "Les petits plats",
    description: [
      "Application de recherche de recettes.",
      "Optimisation d’algorithmes en JavaScript Vanilla.",
    ],
    image: "/images/portfolios/meals.webp",
    tags: ["tailwindcss", "js vanilla", "gitlab", "aws s3", "aws cloudfront"],
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
  {
    id: 9,
    title: "GreenComores",
    description: [
      "Site écologique hébergé sur AWS (S3 + CloudFront).",
      "CI/CD avec GitLab.",
    ],
    image: "/images/portfolios/greencomores.png",
    tags: ["tailwindcss", "js vanilla", "gitlab", "aws s3", "aws cloudfront"],
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
  {
    id: 10,
    title: "Manuscrit Graphisme",
    description: [
      "Front-end Next.js avec shadcn/ui",
      "Pipeline GitLab CI/CD → build, tests, audit SEO, déploiement infra/app.",
      "Infra AWS: EC2 (ASG) derrière ELB, servi via CloudFront (cache, TLS, compression).",
    ],
    image: "/images/portfolios/manuscrit-graphisme.webp",
    tags: [
      "Next.js",
      "emailjs",
      "shadcn/ui",
      "gitlab",
      "Terraform",
      "cloudfront",
      "elb",
      "asg",
      "ec2",
      "lambda",
    ],
    link: "https://product-cart-plum.vercel.app/",
  },
];
