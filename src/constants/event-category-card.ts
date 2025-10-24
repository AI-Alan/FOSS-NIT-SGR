export interface eventCategoryCard {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
}

export const eventCategories: eventCategoryCard[] = [ 
  {
    id: 1,
    title: "Workshops",
    description: "Hands-on learning sessions on various technologies and tools.",
    img: "/events/workshopslego.png", // placeholder image
    url: "/events/workshops",
  },
  {
    id: 2,
    title: "Meetups",
    description: "Casual gatherings to discuss projects and share knowledge.",
    img: "/events/meetupslego.png", // placeholder image
    url: "/events/meetups",
  },
  {
    id: 3,
    title: "Hackathons",
    description: "Intensive coding competitions to build innovative solutions.",
    img: "/events/hackathonslego.png", // placeholder image
    url: "/events/hackathons",
  },
  {
    id: 4,
    title: "Talks",
    description: "Expert presentations on cutting-edge technologies and trends.",
    img: "/events/talkslego.png", 
    url: "/events/talks",
  },
];