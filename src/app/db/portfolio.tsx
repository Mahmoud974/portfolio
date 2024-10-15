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
    title: "Spotify Profile",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/path/to/spotify-profile-image1.png",
    tags: ["React", "Express", "Spotify API", "Heroku"],
    link: "https://example.com/spotify-profile",
  },
  {
    id: 2,
    title: "Spotify Profile",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/path/to/spotify-profile-image2.png",
    tags: ["React", "Express", "Spotify API", "Heroku"],
    link: "https://example.com/spotify-profile-2",
  },
  {
    id: 3,
    title: "Car Profile",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/path/to/car-profile-image.png",
    tags: ["React", "Express", "Spotify API", "Heroku"],
    link: "https://example.com/car-profile",
  },
];
