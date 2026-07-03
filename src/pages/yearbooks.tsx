import ExperiencePageTemplate from "../components/experiencePageTemplate";

function Yearbooks() {
  return (
    <ExperiencePageTemplate
      title="Yearbooks"
      media={
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="https://online.fliphtml5.com/wekjt/xhlt/#p=1"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden border border-black/10 transition-colors hover:border-black/20"
          >
            <div className="bg-[#f4f1ed] p-5">
              <img
                src="/yearbook/art-of-friendship-cover.png"
                alt="The Art of Friendship yearbook cover"
                className="h-[360px] w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 px-5 py-5 text-left">
              <p className="text-xl font-semibold">The Art of Friendship</p>
              <p className="text-black/70">Full digital yearbook</p>
            </div>
          </a>

          <a
            href="https://www.behance.net/gallery/91567917/Arcadia-High-Ignite-Yearbook-University-2018-Submission"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden border border-black/10 transition-colors hover:border-black/20"
          >
            <div className="bg-[#f4f1ed] p-5">
              <img
                src="/arcadia_high_yearbook.png"
                alt="Arcadia High Ignite Yearbook University 2018 Submission"
                className="h-[360px] w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 px-5 py-5 text-left">
              <p className="text-xl font-semibold">
                Arcadia High Ignite Yearbook University 2018 Submission (Gold
                Award)
              </p>
              <p className="text-black/70">Behance case study and spreads</p>
            </div>
          </a>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <p>
          Yearbook has been a huge part of my growth. I developed not only a
          love for design but also foundational skills and intuition that I
          still use for creating software, video games, and other media.
        </p>
      </div>
    </ExperiencePageTemplate>
  );
}

export default Yearbooks;
