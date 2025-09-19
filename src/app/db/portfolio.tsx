export type portfolios = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export const portfolios: portfolios[] = [
 
  {
    id: 2,
    title: "RS deliv",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/rsdeliv.webp",
    tags: [
      "next.js",
      "amplify",
      "aws cognito",
      "aws iam",
      "cloudwatch",
      "aws x-ray",
    ],
    link: "https://product-cart-plum.vercel.app/",
  },
  {
    id: 2,
    title: "Product list with cart ",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/dessert.webp",
    tags: [
      "React.js",
      "tailwindcss",
      "api gateway",
      "lambda",
      "cloudwatch",
      "amplify",
    ],
    link: "https://product-cart-plum.vercel.app/",
  },

  {
    id: 4,
    title: "Static job",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/static-job.webp",
    tags: ["Next.js", "Typescript", "Docker", "Kubernetes", "EKS"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 5,
    title: "Ticket generator",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/ticket.webp",
    tags: [
      "React.js",
      "Typescript",
      "EmailJS",
      "Docker",
      "api gateway",
      "lambda",
      "SQS",
    ],
    link: "https://tip-calculator-new.vercel.app/",
  },

  {
    id: 6,
    title: "Sofachic",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/sofachic.webp",
    tags: [
      "next.js front & back",
      "typescript",
      "zod",
      "zustand",
      "aws lex",
      "docker",
      
      "jest",
    ],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 7,
    title: "Interactive commentaires",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/comments.webp",
    tags: ["React.js", "Typescript", "Zod", "Tailwindcss"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 1,
    title: "SVB PRESTA",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/svb.webp",
    tags: ["tailwindcss", "js vanilla", "gitlab", "aws s3", "aws cloudfront"],
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
  {
    id: 7,
    title: "Les petits plats",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolios/meals.webp",
    tags: ["tailwindcss", "js vanilla", "gitlab", "aws s3", "aws cloudfront"],
    link: "https://d3udmvfw6yelnx.cloudfront.net/Les_petits_plats_project-master/index.html",
  },
];
