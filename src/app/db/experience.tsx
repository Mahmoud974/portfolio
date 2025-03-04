export type Exp = {
  id: number;
  title: string;
  organization: string[];
  role: string[];
  description: string[] | undefined;
};

export const experience: Exp[] = [
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
    id: 2,
    title: "Massala Mayotte",
    organization: ["Figma", "Next.js", "SEO", "Email.js", "Suite Adobe"],
    role: ["Développeur front-end", "Infographiste"],
    description: [
      "- Développé un logo original pour représenter l'identité visuelle, intégrant des éléments naturels et culturels.",
      "- Conçu et réalisé une carte de visite, un flyer, et un roll-up pour promouvoir les services de l'entreprise, en assurant une cohérence visuelle à travers tous les supports.",
      "- Développé un site web responsive en utilisant Next.js, offrant une présentation claire des services et une navigation intuitive pour les utilisateurs.",
      "- Mis en œuvre des pratiques d'optimisation pour les moteurs de recherche afin d'améliorer la visibilité en ligne du site web.",
      "- Assuré la maintenance et la mise à jour des applications existantes.",
    ],
  },
  {
    id: 4,
    title: "RS deliv",
    organization: ["Figma", "Next.js", "SEO", "Email.js"],
    role: ["Développeur Front-end"],
    description: [
      "- Créé un logo original pour représenter l'identité visuelle de Manuscrit Graphisme.",
      "- Réalisé l'interface avec les portfolios et un formulaire de contact.",
      "- Assuré la cohérence visuelle à travers tous les supports et plateformes.",
    ],
  },

  {
    id: 4,
    title: "Manuscrit Graphisme",
    organization: ["Figma", "Next.js", "SEO", "Email.js", "Suite Adobe"],
    role: ["Développeur WordPress", "Infographiste"],
    description: [
      "- Créé un logo original pour représenter l'identité visuelle de Manuscrit Graphisme.",
      "- Réalisé l'interface avec les portfolios et un formulaire de contact.",
      "- Assuré la cohérence visuelle à travers tous les supports et plateformes.",
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
  {
    id: 6,
    title: "Noucia Adams",
    organization: ["Adobe Illustrator", "Adobe Photoshop"],
    role: ["Infographiste", "Développeur front-end"],
    description: [
      "- Créé un logo original pour représenter l'identité visuelle de The Plank.",
      "- Conçu les menus pour le fast-food, assurant une présentation claire et attrayante.",
      "- Assuré la cohérence visuelle à travers tous les supports et plateformes.",
    ],
  },
  // {
  //   id: 6,
  //   title: "Photobooth NH",
  //   organization: [
  //     "Adobe Illustrator",
  //     "Adobe Photoshop",
  //     "Figma",
  //     "Next.js",
  //     "Tailwindcss",
  //   ],
  //   role: ["Infographiste", "Développeur front-end"],
  //   description: [
  //     "- Créé un logo original pour représenter l'identité visuelle de The Plank.",
  //     "- Conçu les menus pour le fast-food, assurant une présentation claire et attrayante.",
  //     "- Assuré la cohérence visuelle à travers tous les supports et plateformes.",
  //   ],
  // },
];
