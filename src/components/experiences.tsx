import { useState } from "react";
import { Link } from "react-router-dom";

type ExperienceFilter = "All" | "Game Development" | "Software" | "Art";

type ExperienceItem = {
  imageUrl: string;
  title: string;
  category: Exclude<ExperienceFilter, "All">;
  description: string;
  href?: string;
  hrefDescription?: string;
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
    href: "https://tangerineslice.com/",
    hrefDescription: "View website",
  },
  {
    imageUrl: "/experiences-img/lunar-crypt.png",
    title: "Lunar Crypt",
    category: "Game Development",
    description:
      "Chinese New Year-themed action-adventure precision platformer and metroidvania. Journey through the spirit world to save the zodiac animals. Single-player PC game. Releasing February 2027. ",
    href: "https://tangerineslice.com/",
    hrefDescription: "View website",
  },
  {
    imageUrl: "/gaps_game.png",
    title: "Game Development",
    category: "Game Development",
    description:
      "Game development is my life-long hobby. I began developing games at age 9, and have since created over 75 games and garnered over 1 million plays. ",
    href: "/gamedev",
    hrefDescription: "View portfolio",
  },
  {
    imageUrl: "/mmorpg-3d.png",
    title: "Online RPG",
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
    href: "https://www.ycombinator.com/launches/O6a-agenthub-the-staging-environment-for-your-ai-agents",
    hrefDescription: "View YC launch",
  },
  {
    imageUrl: "/figma-posters/san_francisco.png",
    title: "Figma Posters",
    category: "Art",
    description: "Preserving memories into wall art",
    href: "/figma-posters",
    hrefDescription: "Read more",
  },
  {
    imageUrl: "/arcadia_high_yearbook.png",
    title: "Yearbooks",
    category: "Art",
    description:
      "Everyone has a story worth celebrating. I've created half a dozen yearbooks during my time in high school and for fun, with and for friends.",
    href: "/yearbooks",
    hrefDescription: "Read more",
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
    href: "https://www.behance.net/gallery/67494769/Personal-Branding",
    hrefDescription: "View on Behance",
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
    <section className="flex w-full flex-col gap-8 lg:max-w-[800px]">
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

      <div className="flex flex-col gap-8">
        {filteredExperiences.map((experience) => (
          <article
            key={experience.title}
            className="grid gap-6 sm:grid-cols-2 sm:gap-12"
          >
            <div className="h-[242px] w-full overflow-hidden sm:h-[242px]">
              <img
                src={experience.imageUrl}
                alt={`${experience.title} cover`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-full w-full max-w-[400px] flex-col gap-4 text-left">
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
              {experience.href && experience.hrefDescription && (
                <div className="mt-auto pt-2">
                  {experience.href.startsWith("/") ? (
                    <Link
                      to={experience.href}
                      className="inline-flex items-center rounded-md border border-black/10 px-3 py-1.5 text-sm font-medium text-black/70 transition-colors hover:border-black/20 hover:text-black"
                    >
                      {experience.hrefDescription}
                    </Link>
                  ) : (
                    <a
                      href={experience.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-md border border-black/10 px-3 py-1.5 text-sm font-medium text-black/70 transition-colors hover:border-black/20 hover:text-black"
                    >
                      {experience.hrefDescription}
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
