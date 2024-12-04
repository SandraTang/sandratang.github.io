import { CardInfo } from "../types";

type ButtonsInfo = {
  data: {
    text: string;
    link: string;
  }[];
};

function Buttons({ data }: ButtonsInfo) {
  return (
    <>
      {data.map((datum) => (
        <a href={datum.link}>
          <button>{datum.text}</button>
        </a>
      ))}
    </>
  );
}

const resume: CardInfo[] = [
  {
    title: "Resume",
    labels: ["Professional Experience", "Education"],
    image: "/sandra_tang_resume.svg",
    description:
      "I am seeking employment opportunities in software engineering.",
    children: (
      <a href="/Sandra Tang Resume.pdf" download="Sandra Tang Resume.pdf">
        <button>Download Resume PDF</button>
      </a>
    ),
  },
];

const socialMedia: CardInfo[] = [
  {
    title: "LinkedIn",
    labels: ["Professional Experience"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/2560px-LinkedIn_2021.svg.png",
    buttonText: "View LinkedIn",
    buttonLink: "https://www.linkedin.com/in/sandra-tang/",
  },
  {
    title: "GitHub",
    labels: ["Coding"],
    image:
      "https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1-1024x512.png",
    buttonText: "View GitHub",
    buttonLink: "https://github.com/SandraTang",
  },
  {
    title: "Dribbble and Behance",
    labels: ["Design"],
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*bctUMY9zXVf6ADrud7JuGg.png",
    description:
      "Responsive logo design, fonts, photography, publication design, architectural sculptures, and more.",
    children: (
      <Buttons
        data={[
          { text: "Dribbble", link: "https://dribbble.com/sandratang" },
          { text: "Behance", link: "https://www.behance.net/sandra-tang" },
        ]}
      />
    ),
  },
  {
    title: "Maker Instagram",
    subheadline: "Created in 2023",
    labels: ["Design", "Maker"],
    image: "/maker_instagram.png",
    description:
      "Check out all the things I've been making! From posters to perfume, pants to pottery, yearbooks to woodworking, and more.",
    buttonText: "View Instagram",
    buttonLink: "https://www.instagram.com/stangcreates/",
  },
  {
    title: "Itch.io",
    subheadline: "Games uploaded 2019-2023",
    labels: ["Maker", "Game Development", "Coding"],
    image:
      "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/04/Itch.io_.jpg",
    description: "A small subset of the games I've made.",
    buttonText: "View Itch.io",
    buttonLink: "https://stangs.itch.io/",
  },
];

const codingProjects: CardInfo[] = [
  {
    title: "3D MMORPG",
    subheadline: "Developed fall 2024 to present",
    labels: [
      "Coding",
      "Game Development",
      "React",
      "Three.js",
      "Typescript",
      "Socket.io",
    ],
    description: `My coding origin story comes from my childhood love for online multiplayer games. My interest in games jumpstarted my coding journey, from game development to majoring in computer science to becoming a software engineer. A year into my first job, I realized that I had made all these things, but I had yet to fulfill my childhood dream of creating my own online multiplayer game. So I did. [Note: Server may be down.]`,
    image: "/mmorpg-3d.png",
    buttonText: "Play",
    buttonLink: "https://cloob-pengoob-3d.vercel.app/",
  },
  {
    title: "2D MMORPG",
    subheadline: "Developed fall 2023 to summer 2024",
    labels: [
      "Coding",
      "Game Development",
      "React",
      "Three.js",
      "Typescript",
      "Socket.io",
    ],
    description: `This is the earlier iteration of the 3D MMORPG.`,
    image: "/mmorpg-2d.png",
    buttonText: "Play",
    buttonLink: "https://cloob-pengoob.vercel.app/",
  },
  {
    title: "My personal game development history from birth to 2021",
    subheadline: "Created in 2021",
    labels: ["Coding", "Game Development", "Javascript", "Processing"],
    image: "/game_dev_history_screenshot.png",
    buttonText: "View",
    buttonLink: "/game_dev_history",
  },
];

const designProjects: CardInfo[] = [
  {
    title: "Personal Branding",
    subheadline: "Designed in 2018",
    labels: ["Design"],
    image: "/sandra_tang_personal_branding.png",
    description: "Responsive personal logo",
    buttonText: "View Behance",
    buttonLink: "https://www.behance.net/gallery/67494769/Personal-Branding",
  },
  {
    title: "Arcadia High School Yearbook",
    subheadline: "Designed Summer 2018 to Spring 2019",
    labels: ["Design"],
    image: "/arcadia_high_yearbook.png",
    description: `Arcadia High School's yearbook organization, The Arcadian, won the Gold Award for Yearbook Ignite University's yearbook designing competition.`,
    children: (
      <Buttons
        data={[
          {
            text: "Behance",
            link: "https://www.behance.net/gallery/91567917/Arcadia-High-Ignite-Yearbook-University-2018-Submission",
          },
          {
            text: "Balfour 2019 Yearbook Yearbook",
            link: "https://issuu.com/balfour/docs/2019_edition_33_yearbook_yearbook",
          },
        ]}
      />
    ),
  },
];

export const cardInfo: CardInfo[] = [
  ...resume,
  ...socialMedia,
  ...codingProjects,
  ...designProjects,
];
