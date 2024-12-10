export type Portfolio = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export const portfolios: Portfolio[] = [
  {
    id: 1,
    title: "Les petits plats",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/meals.png",
    tags: ["Html", "Tailwindcss", "Javascript", "Netlify"],
    link: "https://new-les-petits-plats.netlify.app/",
  },
  {
    id: 2,
    title: "Product list with cart",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/dessert.png",
    tags: ["Nextjs", "Tailwindcss", "Shadcn/ui", "React-query", "Vercel"],
    link: "https://product-cart-plum.vercel.app/",
  },
  {
    id: 3,
    title: "Green Comores",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/greencomores.png",
    tags: [
      "Nextjs",
      "Three.js",
      "Illustrator",
      "Blender ",
      "Tailwindcss",
      "Emailjs",
    ],
    link: "https://example.com/car-profile",
  },
  {
    id: 4,
    title: "Tip Calculator",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/tip.png",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Zod"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 5,
    title: "Noucia Adams",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/noucia.png",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Magic-Ui"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 6,
    title: "Sofachic",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/sofachic.png",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Zod"],
    link: "https://tip-calculator-new.vercel.app/",
  },
  {
    id: 7,
    title: "crowdown",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/crowdown.png",
    tags: ["Angular", "AWS EC2", "Tailwindcss", "DailyUi"],
    link: "https://tip-calculator-new.vercel.app/",
  },
];
