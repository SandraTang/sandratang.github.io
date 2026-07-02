import { useState } from "react";

type ExperienceFilter = "All" | "Game Development" | "Software" | "Art";

type ExperienceItem = {
  imageUrl: string;
  title: string;
  category: Exclude<ExperienceFilter, "All">;
  description: string;
};

const filters: { label: ExperienceFilter; color: string }[] = [
  { label: "All", color: "#FF6600" },
  { label: "Game Development", color: "#2CAD39" },
  { label: "Software", color: "#0066FF" },
  { label: "Art", color: "#FF005E" },
];

const experiences: ExperienceItem[] = [
  {
    imageUrl: "/experiences-img/tangerine-slice-games.png",
    title: "Tangerine Slice Games",
    category: "Game Development",
    description:
      "Game studio. Solo-founded and run in February 2026. Developing Lunar Crypt.",
  },
  {
    imageUrl: "/experiences-img/lunar-crypt.png",
    title: "Lunar Crypt",
    category: "Game Development",
    description:
      "Chinese New Year-themed action-adventure precision platformer and metroidvania. Journey through the spirit world to save the zodiac animals. Single-player PC game. Releasing February 2027. ",
  },
  {
    imageUrl: "/mmorpg-3d.png",
    title: "Game Development",
    category: "Game Development",
    description:
      "Game development is my life-long hobby. I began developing games at age 9, and have since created over 75 games and garnered over 1 million plays. ",
  },
  {
    imageUrl: "/gaps_game.png",
    title: "Town Square",
    category: "Game Development",
    description:
      "My game development story began when I wanted to create my own MMORPG as a child, inspired by games I played online. Post-grad, I finally created a simple live-service game as I had wished to do so all those years ago. ",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "AgentHub (YC S25) Co-Founder",
    category: "Software",
    description:
      "Cofounded AgentHub, an AI agent simulation and evaluation engine.",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6822db388c44137c00f8c124/685ee7f0d8929272d1cc402d_OG-Nooks_V%2002.png",
    title: "Nooks.ai Product Engineer",
    category: "Software",
    description:
      "Product Engineer. Created the SEP hackathon project. SEP is now one of the leading products at Nooks.",
  },
  {
    imageUrl:
      "https://techcrunch.com/wp-content/uploads/2022/08/pomelo_cards_pink_green.jpg",
    title: "Pomelo Software Engineer",
    category: "Software",
    description: "First new-grad hire.",
  },
  {
    imageUrl: "/san_francisco.png",
    title: "Figma Posters",
    category: "Art",
    description: "Preserving memories into wall art",
  },
  {
    imageUrl: "/arcadia_high_yearbook.png",
    title: "Yearbooks",
    category: "Art",
    description:
      "Everyone has a story worth celebrating. I've created half a dozen yearbooks during my time in high school and for fun, with and for friends.",
  },
  {
    imageUrl: "/maker_instagram.png",
    title: "Miscellaneous Creations",
    category: "Art",
    description:
      "From sewing my college senior ball dress to handcrafting a table, any new exploration into the arts excites me. ",
  },
  {
    imageUrl: "/sandra_tang_personal_branding.png",
    title: "Personal Branding",
    category: "Art",
    description: "S Tangerine",
  },
];

function Experiences() {
  const [selectedFilter, setSelectedFilter] = useState<ExperienceFilter>("All");
  const filterColors = Object.fromEntries(
    filters.map((filter) => [filter.label, filter.color])
  ) as Record<ExperienceFilter, string>;

  const filteredExperiences =
    selectedFilter === "All"
      ? experiences
      : experiences.filter(
          (experience) => experience.category === selectedFilter
        );

  return (
    <section className="flex w-full flex-col gap-8 lg:max-w-[750px]">
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.label}
            type="button"
            onClick={() => setSelectedFilter(filter.label)}
            className="rounded-full px-3 py-1 text-sm font-bold text-white transition-colors"
            style={{
              backgroundColor:
                selectedFilter === filter.label ? filter.color : "#E5E2DF",
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {filteredExperiences.map((experience) => (
          <article
            key={experience.title}
            className="grid gap-12 sm:grid-cols-2"
          >
            <div className="w-[375px] h-[242px] overflow-hidden">
              <img
                src={experience.imageUrl}
                alt={`${experience.title} cover`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 text-left max-w-[350px]">
              <p className="text-xl font-semibold">{experience.title}</p>
              <div>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-sm font-bold text-white"
                  style={{ backgroundColor: filterColors[experience.category] }}
                >
                  {experience.category}
                </span>
              </div>
              <p>{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
