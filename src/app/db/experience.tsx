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
    title: "Manuscrit Graphisme",
    organization: [
      "figma",
      "route 53",
      "next.js",
      "node.js",
      "mongodb",
      "terraform",
      "aws s3",
      "pipeline ci/cd",
      "aws cloudfront",
      "aws cognito",
    ],
    role: ["Développeur cloud"],
    description: [
      "- Créé un logo original pour représenter l'identité visuelle de Manuscrit Graphisme.",
      "- Réalisé l'interface avec les portfolios et un formulaire de contact.",
      "- Assuré la cohérence visuelle à travers tous les supports et plateformes.",
    ],
  },
  {
    id: 4,
    title: "RS Deliv",
    organization: ["Next.js", "SEO", "shadcn/ui", "GitLab", "Terraform", "AWS (CloudFront, ELB, ASG EC2)"],
    role: ["Développeur Full-stack"],
    description: [
      "- Conception et développement d’une application vitrine pour une société de transport & logistique.",
      "- Intégration d’un formulaire de contact, d’une FAQ et de la mise en avant des offres de location.",
      "- Optimisation SEO (métadonnées, sitemap, balisage) et performances front.",
      "- Déploiement scalable sur AWS avec infrastructure automatisée via Terraform et pipeline GitLab CI/CD.",
    ],
  },
  
  {
    id: 1,
    title: "Green Comores",
    organization: ["Figma", "Nextjs", "SEO", "Emailjs", "Suite Adobe"],
    role: ["Développeur front-end", "Infographiste"],
    description: [
      "- Développer un logo original pour représenter l'identité visuelle, intégrant des éléments naturels et culturels.",
      "- Concevoir et réalisé une carte de visite, un flyer, et un rollup pour promouvoir les services de l'entreprise, en assurant une cohérence visuelle à travers tous les supports.",
      "- Développer un site web responsive en utilisant Next.js, offrant une présentation claire des services et une navigation intuitive pour les utilisateurs.",
      "- Mis en œuvre des pratiques d'optimisation pour les moteurs de recherche afin d'améliorer la visibilité en ligne du site web.",
      "- Assurer la maintenance et la mise à jour des applications existantes",
    ],
  },

  {
    id: 5,
    title: "SVB PRESTA",
    organization: ["Figma", "Adobe Photoshop"],
    role: ["Infographiste"],
    description: [
      "- Créé un logo original pour représenter l'identité visuelle de The Plank.",
      "- Conçu les menus pour le fast-food, assurant une présentation claire et attrayante.",
      "- Assuré la cohérence visuelle à travers tous les supports et plateformes.",
    ],
  },
];
