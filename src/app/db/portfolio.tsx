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
    title: "Car Profile",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/portfolio/meals.png",
    tags: ["React", "Express", "Spotify ", "Heroku"],
    link: "https://example.com/car-profile",
  },
];
