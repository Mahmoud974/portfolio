export type Education = {
  id: number;
  title: string;
  organization: string;
  description: string[] | undefined;
  logo?: string;
};

export const education: Education[] = [
   
  {
    id: 6,
    title: "AWS Certified Solutions Architect - Associate",
    organization: "Amazon Web Services (AWS)",
    description: [
      "- Développer des applications cloud sur AWS",
      "- Utiliser les services AWS pour implémenter des solutions serverless",
      "- Apprendre à dépanner et à surveiller des applications sur AWS",
    ],
    logo: "/images/aws-logo.webp",
  },
 
  {
    id: 4,
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    description: [
      "- Comprendre les services cloud AWS et les concepts associés",
      "- Gérer les ressources AWS et les solutions basées sur AWS",
      "- Apprendre à sécuriser et à conformer les environnements cloud sur AWS",
    ],
    logo: "/images/aws-logo.webp",
  },

  {
    id: 1,
    title: "Développeur concepteur logiciel, RNCP niveau VI (bac +3/4)",
    organization: "OpenClassrooms",
    description: [
      "- Concevoir et développer des interfaces utilisateurs avec React",
      "- Collaborer avec des designers pour traduire des maquettes en applications fonctionnelles",
      "- Optimiser les applications pour maximiser leur vitesse et leur efficacité",
      "- Intégrer des données provenant de diverses sources back-end et bases de données",
      "- Assurer la maintenance et la mise à jour des applications existantes",
    ],
    logo: "/images/ocs.webp",
  },
  {
    id: 2,
    title: "Développeur informatique, RNCP niveau III (bac +2)",
    organization: "OpenClassrooms",
    description: [
      "- Contribuer à un site web responsive et dynamique graduellement tout au long du projet, de l’intégration des éléments des maquettes graphiques (développement front-end avec HTML, CSS, JavaScript et React)",
      "- Créer des API et des bases de données pour développer des fonctionnalités complexes et évoluer en back-end (Node.js, Express et MongoDB)",
      "- Optimiser les performances et l’accessibilité de sites web existants pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche (SEO)",
      "- Gérer un projet web de A à Z : de la planification du projet à la présentation de la solution au client, en passant par la rédaction des spécifications techniques",
    ],
    logo: "/images/ocs.webp",
  },
 
];
