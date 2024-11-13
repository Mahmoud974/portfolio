export type Education = {
  id: number;
  title: string;
  organization: string;
  description: string[] | undefined;
};

export const education: Education[] = [
  {
    id: 0,
    title: "Expert en développement logiciel, RNCP niveau VII  (bac +5)",
    organization: "OpenClassrooms",
    description: [
      "- Concevoir et développer des interfaces utilisateurs avec React",
      "- Collaborer avec des designers pour traduire des maquettes en applications fonctionnelles",
      "- Optimiser les applications pour maximiser leur vitesse et leur efficacité",
      "- Intégrer des données provenant de diverses sources back-end et bases de données",
      "- Assurer la maintenance et la mise à jour des applications existantes",
    ],
  },

  {
    id: 1,
    title: "Développeur concepteur logiciel, RNCP niveau VI  (bac +3/4)",
    organization: "OpenClassrooms",
    description: [
      "- Concevoir et développer des interfaces utilisateurs avec React",
      "- Collaborer avec des designers pour traduire des maquettes en applications fonctionnelles",
      "- Optimiser les applications pour maximiser leur vitesse et leur efficacité",
      "- Intégrer des données provenant de diverses sources back-end et bases de données",
      "- Assurer la maintenance et la mise à jour des applications existantes",
    ],
  },
  {
    id: 2,
    title: "Développeur informatique, RNCP niveau III  (bac +2)",
    organization: "OpenClassrooms",
    description: [
      "- Contribuer à un site web responsive et dynamique graduellement tout au long du projet, de l’intégration des éléments des maquettes graphiques (développement front-end avec HTML, CSS, JavaScript et React)",
      "- Créer des API et des bases de données pour développer des fonctionnalités complexes et évoluer en back-end (Node.js, Express et MongoDB)",
      "- Optimiser les performances et l’accessibilité de sites web existants pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche (SEO)",
      "- Gérer un projet web de A à Z : de la planification du projet à la présentation de la solution au client, en passant par la rédaction des spécifications techniques",
    ],
  },
  {
    id: 3,
    title: "Intégrateur web (Prépa)",
    organization: "OpenClassrooms",
    description: [
      "- Assembler les pages en HTML5 et CSS3 à partir de maquettes graphiques",
      "- Respecter les normes d'accessibilité et de référencement (W3C)",
      "- Mettre en œuvre des effets CSS avancés pour dynamiser les pages",
      "- Améliorer le référencement d'un site web",
      "- Assurer la compatibilité avec les différents navigateurs du marché ainsi que les appareils mobiles",
    ],
  },
];
