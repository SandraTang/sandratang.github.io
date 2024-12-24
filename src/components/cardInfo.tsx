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
        <a href={datum.link} key={datum.link}>
          <button>{datum.text}</button>
        </a>
      ))}
    </>
  );
}

const professional: CardInfo[] = [
  {
    title: "Pomelo",
    labels: ["Coding", "Professional"],
    image:
      "https://techcrunch.com/wp-content/uploads/2022/08/pomelo_cards_pink_green.jpg",
    description:
      "Frontend Software Engineer (React, React Native, Typescript, Tailwind, SCSS, HTML, CSS, Storybook, Segment, Sentry, Mixpanel)",
    buttonText: "View Website",
    buttonLink: "https://www.pomelo.com/",
  },
  {
    title: "Mandolin AI Agent",
    labels: ["Coding", "Professional"],
    image:
      "https://cdn.prod.website-files.com/667223c75fbb608863bb39a9/667247d6201b091bd31a9430_Mandolin%20Meta%20Image.png",
    description:
      "Built an agent in 4 days to find valid prior authorization documents.",
    buttonText: "View Website",
    buttonLink: "https://www.mandolin.com/",
  },
  {
    title: "Mintlify AI Translation Assistant",
    labels: ["Coding", "Professional"],
    image:
      "https://www.etcentric.org/wp-content/uploads/2022/06/Mintlify_Logo_png.png",
    description:
      "Built a new pathway for the AI Assistant to translate documents.",
    buttonText: "View Website",
    buttonLink: "https://mintlify.com/",
  },
  {
    title: "Welfare Benefits Common Application",
    labels: ["Coding", "Design"],
    image: "/beni.png",
    description:
      "The government sets aside billions of dollars every year for welfare benefits. However, a large amount doesn't reach the people who need it most. There are numerous programs each with their own separate application and lots of repetitive questions. When someone's juggling two jobs and childcare, how can they navigate complex government processes to get the benefits they deserve? I set out to solve this issue. After talking with local government employees and industry experts in government sales in addition to doing lots of independent research, I learned that technical modernization in the government is largely limited by reliance on legacy systems and many applications are still done by pencil and paper (and digitization efforts are led by non-profits like Code for America and large corporations like Deloitte). While attempting to build a common app built on top of existing digital applications through scraping (with Playwright), I discovered that quite a few government websites block such activity. Applications can still be sent automatically through emailed PDFs, but not all programs offer this routes, and even so, they may not be processed at all. While I learned a lot from this experience and enjoyed creating prototypes, I've come to realize that the problem is extremely deep and complex.",
    buttonText: "View Figma",
    buttonLink:
      "https://www.figma.com/design/gV1i48UuWJsyoZMzzf2g6i/Beni?node-id=28-359&t=WL3MXzuZ1VMFzX2T-1",
  },
];

const socialMedia: CardInfo[] = [
  {
    title: "Dribbble",
    labels: ["Design"],
    image: "/dribbble.png",
    description: "Quick snapshot overviews of a few design projects.",
    buttonText: "View",
    buttonLink: "https://dribbble.com/sandratang",
  },
  {
    title: "Behance",
    labels: ["Design"],
    image:
      "https://blog.tubikstudio.com/wp-content/uploads/2015/10/Behance-Review-1-1024x711.jpg",
    description:
      "Responsive logo design, fonts, photography, publication design, architectural sculptures, and more.",
    buttonText: "View",
    buttonLink: "https://www.behance.net/sandra-tang",
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
    labels: ["Coding", "Game Development", "React"],
    description: `This is the earlier iteration of the 3D MMORPG.`,
    image: "/mmorpg-2d.png",
    buttonText: "Play",
    buttonLink: "https://cloob-pengoob.vercel.app/",
  },
  {
    title: "My game dev history (up to 2021)",
    subheadline: "Created in 2021",
    labels: ["Coding", "Game Development", "Javascript", "Processing"],
    image: "/game_dev_history_screenshot.png",
    buttonText: "View",
    buttonLink: "/game_dev_history",
  },
  {
    title: "Quake Shake",
    labels: ["Coding", "Game Development", "Godot"],
    image: "https://img.itch.zone/aW1nLzM2NjE0OTIucG5n/315x250%23c/I2JDmy.png",
    description:
      "Same Home Different Hacks 2020 Winner of Best Educational Hack",
    buttonText: "Play",
    buttonLink: "https://stangs.itch.io/quake-shake",
  },
  {
    title: "Telegem",
    labels: ["Coding", "Game Development", "Godot"],
    image: "https://img.itch.zone/aW1nLzc4ODI0MDQucG5n/315x250%23c/cGmoRE.png",
    buttonText: "Play",
    buttonLink: "https://stangs.itch.io/telegem",
  },
  {
    title: "Message Hunt",
    labels: ["Coding", "Game Development", "Godot"],
    image: "https://img.itch.zone/aW1nLzM1MTI2OTYuZ2lm/315x250%23cm/qi179G.gif",
    buttonText: "Play",
    buttonLink: "https://stangs.itch.io/message-hunt",
  },
  {
    title: "Gaps",
    labels: ["Coding", "Game Development"],
    image: "/gaps_game.png",
    description: "Created in Game Maker in 2017",
    buttonText: "Play",
    buttonLink: "https://gamejolt.net/?token=JfmsX4reJpFdMa7jMHKmWeo7rzPXbs",
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
  {
    title: "3D Modeling",
    labels: ["Design"],
    image: "/womp_desert_glass.gif",
    description: "Womp",
  },
];

const makerProjects: CardInfo[] = [
  {
    title: "MIT Senior Ball Dress",
    labels: ["Design", "Sewing"],
    image: "/senior_ball_dress.png",
    description:
      "Sewed a dress from scratch without a pattern for the MIT 2023 Senior Ball.",
  },
  {
    title: "Tailored Dress",
    labels: ["Sewing"],
    image: "/tailoring_green_dress.png",
    description: "Tailored a dress my friend gave me. Thank you, Trisha!",
  },
];

const posters: CardInfo[] = [
  {
    title: "Let's Go for a Drive",
    labels: ["Design", "Poster"],
    image: "/go_for_a_drive.png",
    description: "Original photo and design, created in Figma.",
  },
  {
    title: "Survival of the Fittest",
    labels: ["Design", "Poster"],
    image: "/jellyfish.png",
    description: "Original photo and design, created in Figma.",
  },
  {
    title: "Life is Good",
    labels: ["Design", "Poster"],
    image: "/life_is_good.png",
    description: "Original photos and design, created in Figma.",
  },
  {
    title: "San Francisco",
    labels: ["Design", "Poster"],
    image: "/san_francisco.png",
    description: "Original design, created in Figma.",
  },
  {
    title: "Summer 2022",
    labels: ["Design", "Poster"],
    image: "/summer_internship_friends.png",
    description: "Original photos and design, created in Figma.",
  },
  {
    title: "The Loner Pact",
    labels: ["Design", "Poster"],
    image: "/tlp.png",
    description: "Original photos and design, created in Figma.",
  },
  {
    title: "Toronto Geese",
    labels: ["Design", "Poster"],
    image: "/toronto.png",
    description: "Original photos and design, created in Figma.",
  },
];

export const cardInfo: CardInfo[] = [
  ...professional,
  ...socialMedia,
  ...codingProjects,
  ...designProjects,
  ...makerProjects,
  ...posters,
];
