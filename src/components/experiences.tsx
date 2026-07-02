import { useState } from "react";

type ExperienceFilter = "All" | "Game Development" | "Software" | "Art";

type ExperienceItem = {
  imageUrl: string;
  title: string;
  category: Exclude<ExperienceFilter, "All">;
  description: string;
};

const filters: { label: ExperienceFilter; color: string }[] = [
  { label: "All", color: "#A99178" },
  { label: "Game Development", color: "#FF6600" },
  { label: "Software", color: "#0066FF" },
  { label: "Art", color: "#FF005E" },
];

const experiences: ExperienceItem[] = [
  {
    imageUrl: "/tangerine-slice-cover-image.png",
    title: "Tangerine Slice Games",
    category: "Game Development",
    description:
      "Game studio. Solo-founded and run in February 2026. Developing Lunar Crypt.",
  },
  {
    imageUrl: "/kickstarter-cover.png",
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
      "Game development is my life-long hobby. I began developing games at age 9, and have since created over 75 and garnered over 1 million plays. ",
  },
  {
    imageUrl: "/gaps_game.png",
    title: "Town Square",
    category: "Game Development",
    description:
      "My game development story began when I wanted to create my own MMORPG as a child, inspired by games I played online. Post-grad, I finally tried my hand at creating a simple live-service game. ",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "AgentHub (YC S25) Co-Founder",
    category: "Software",
    description:
      "Cofounded AgentHub, an AI agent simulation and evaluation engine.",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "Nooks.ai Product Engineer",
    category: "Software",
    description:
      "Product Engineer. Created the SEP hackathon project. SEP is now one of the leading products at Nooks.",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "Pomelo Software Engineer",
    category: "Software",
    description: "First new-grad hire.",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "Figma Posters",
    category: "Art",
    description: "Preserving memories into wall art",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "Yearbooks",
    category: "Art",
    description:
      "Everyone has a story worth celebrating. I’ve created half a dozen yearbooks during my time in high school and for fun, with and for friends.",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "Miscellaneous Creations",
    category: "Art",
    description:
      "From sewing my college senior ball dress to handcrafting a table, any new exploration into the arts excites me. ",
  },
  {
    imageUrl: "/agenthub-personal-website.png",
    title: "Personal Branding",
    category: "Art",
    description: "S Tangerine",
  },
];

function Experiences() {
  const [selectedFilter, setSelectedFilter] = useState<ExperienceFilter>("All");

  const filteredExperiences =
    selectedFilter === "All"
      ? experiences
      : experiences.filter(
          (experience) => experience.category === selectedFilter
        );

  return (
    <section className="flex w-full flex-col gap-8">
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.label}
            type="button"
            onClick={() => setSelectedFilter(filter.label)}
            className="rounded-full px-3 py-1 text-sm font-bold text-white transition-opacity"
            style={{
              backgroundColor: filter.color,
              opacity: selectedFilter === filter.label ? 1 : 0.55,
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Experiences</h2>
        {filteredExperiences.map((experience) => (
          <article
            key={experience.title}
            className="grid gap-6 sm:grid-cols-2 sm:p-6"
          >
            <div className="h-[250px] w-full overflow-hidden">
              <img
                src={experience.imageUrl}
                alt={`${experience.title} cover`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 text-left">
              <p className="text-xl font-semibold">{experience.title}</p>
              <div>
                <span className="inline-flex rounded-full bg-[#FF6600] px-3 py-1 text-sm font-bold text-white">
                  Game Development
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
