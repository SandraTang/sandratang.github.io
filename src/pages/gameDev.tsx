import { Link } from "react-router-dom";

const stats = [
  { value: "75+", label: "games created" },
  { value: "1M+", label: "plays" },
  { value: "15+", label: "years creating" },
];

const lunarCryptFeatures = [
  {
    image: "/lunar-crypt/rabbit.gif",
    title: "Unique movement",
    description:
      "Dash until you hit a wall, but with one exception: you can change direction one time, leading to beautifully complex and precise challenges.",
  },
  {
    image: "/lunar-crypt/regions.gif",
    title: "A world waiting to be discovered",
    description:
      "Discover over 20 ethereally rendered regions over the vast, interconnected spirit world, each hiding their own secrets.",
  },
  {
    image: "/lunar-crypt/dog.gif",
    title: "Intricate level design",
    description:
      "Solve hundreds of carefully hand-designed challenges, obstacles, and puzzles.",
  },
  {
    image: "/lunar-crypt/ox.gif",
    title: "A story to uncover",
    description:
      "Befriend a cast of mythological characters and embark on a journey that becomes as much about finding yourself as saving those around you. Uncover a story about identity, belonging, and finding your own place within two worlds.",
  },
];

const conceptSteps = [
  {
    image: "/lunar-crypt/old-art-0.png",
    title: "1. The idea",
    description:
      "The first playable version of Lunar Crypt came alive in just one night.",
  },
  {
    image: "/lunar-crypt/old-art-1.png",
    title: "2. Early prototype",
    description:
      "Growing the world into a vast and varied word with mythological characters, myriad regions, and numerous obstacles and challenges.",
  },
  {
    image: "/lunar-crypt/old-art-2.png",
    title: "3. Lunar Crypt",
    description:
      "The game has improved by leaps and bounds over the past several months of development.",
  },
];

const journeyMilestones = [
  { year: "Age 9", title: "My first games" },
  { year: "Age 14", title: "First mobile game" },
  { year: "2017", title: "CodeDay LA Best Game" },
  { year: "2020", title: "MLH Best Educational Hack" },
  { year: "2024", title: "Online RPG" },
  { year: "2026", title: "Lunar Crypt" },
];

const communityRoles = [
  "MIT HSSP · Video Game Development and Design Teacher",
  "MIT Splash · Intro to Game Design Teacher",
  "CodeDay LA · Hackathon staff",
];

const yearAhead = [
  {
    when: "October 2026",
    title: "Steam Next Fest",
    description:
      "Participate in Steam Next Fest, releasing Lunar Crypt’s official demo.",
  },
  {
    when: "January 2027",
    title: "Release Lunar Crypt",
    description: "Launch ahead of Chinese New Year.",
  },
  {
    when: "After launch",
    title: "Support Lunar Crypt and make more games",
    description:
      "Continue releasing updates and marketing Lunar Crypt while fostering the community, especially the level editor and speedrunning sub-communities. This could also mean Lunar Crypt 2 or something new, based on market response and whether I feel drawn to any promising ideas.",
  },
];

function GameDev() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#19172a] px-5 py-0 text-[#fff7e7] sm:px-10 sm:py-0">
      <nav className="absolute inset-x-5 top-5 z-20 mx-auto flex max-w-6xl items-center sm:inset-x-10 sm:top-8">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#fff7e7] transition-opacity hover:opacity-70"
          >
            Sandra Tang
          </Link>
          <span className="text-[#fff7e7]/45" aria-hidden="true">
            •
          </span>
          <span className="font-sans text-xs uppercase tracking-[0.16em] text-[#fff7e7]/60">
            Game dev portfolio
          </span>
        </div>
      </nav>

      <section className="relative -mx-5 flex h-[clamp(55vh,calc(55vh+512px-50vw),100vh)] flex-col justify-start overflow-hidden px-5 pt-[15svh] sm:-mx-10 sm:px-10 lg:h-[55vh] lg:px-0 lg:pt-0">
        <img
          src="/lunar-crypt/game-dev-portfolio-hero.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[60vw] origin-bottom-right select-none md:w-[clamp(35vw,calc(768px-40vw),60vw)] lg:w-auto lg:scale-100"
          style={{ imageRendering: "pixelated" }}
        />
        <div className="relative z-10 order-1 w-full max-w-6xl lg:absolute lg:inset-x-0 lg:top-[13svh] lg:mx-auto lg:px-5 xl:px-10">
          <div className="max-w-5xl">
            <h1 className="max-w-[calc(56rem-16px)] text-[2.25rem] leading-[0.96] sm:text-[3.5rem] lg:text-[4.5rem]">
              Hi, I&apos;m Sandra.
            </h1>
            <p className="mt-3 max-w-2xl font-sans text-[15px] leading-snug text-[#fff7e7]/80 sm:text-[18px]">
              I've been creating games since I was 9 years old. I studied
              Computer Science, Design, and Chinese at MIT, where I led the
              undergraduate game development club. Earlier this year, I founded
              my own game studio, Tangerine Slice Games, and am currently
              working on the first title: Lunar Crypt.
            </p>
          </div>

          <div className="mt-5 flex w-fit flex-wrap gap-16 sm:mt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-sans text-[1.75rem] font-semibold tracking-tight text-[#f7a05d] sm:text-[2.25rem]">
                  {stat.value}
                </p>
                <p className="mt-0.5 font-sans text-[11px] uppercase tracking-[0.12em] text-[#fff7e7]/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto -mx-5 bg-[#f8f0e3] px-5 py-16 text-[#241d2b] sm:-mx-10 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16">
            <div className="flex flex-col items-start lg:pt-5">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#a8423e]">
                Featured project
              </p>
              <h2 className="mt-4 text-5xl leading-none sm:text-6xl">
                Lunar Crypt
              </h2>
              <p className="mt-6 max-w-md font-sans text-xl leading-relaxed text-[#241d2b]/80">
                A Chinese New Year–themed, zero-gravity precision platformer.
              </p>
              <p className="mt-4 max-w-md font-sans leading-relaxed text-[#241d2b]/70">
                Journey through the spirit world to exorcise the twelve zodiac
                animals and save Chinese New Year in this zero-gravity precision
                platformer inspired by Chinese mythology and folklore.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://store.steampowered.com/app/5035390/Lunar_Crypt/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#9e413d] px-5 py-3 font-sans text-sm font-semibold text-[#fff7e7] transition-colors hover:bg-[#7f302f]"
                >
                  Steam <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://tangerineslice.itch.io/lunar-crypt-discord-playtest"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#9e413d] px-5 py-3 font-sans text-sm font-semibold text-[#9e413d] transition-colors hover:bg-[#9e413d] hover:text-[#fff7e7]"
                >
                  Demo <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://linktr.ee/tangerineslice"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#9e413d] px-5 py-3 font-sans text-sm font-semibold text-[#9e413d] transition-colors hover:bg-[#9e413d] hover:text-[#fff7e7]"
                >
                  Linktree <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <figure>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src="/lunar-crypt/gameplay-trailer-simple-cropped.mp4"
                poster="/experiences-img/lunar-crypt.png"
                className="aspect-[1.74] w-full rounded-lg border-2 border-[#241d2b] object-cover shadow-[7px_7px_0_#9e413d]"
                aria-label="Lunar Crypt gameplay trailer"
              />
            </figure>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lunarCryptFeatures.map((feature) => (
              <figure key={feature.title}>
                <img
                  src={feature.image}
                  alt={`Lunar Crypt gameplay: ${feature.title.toLowerCase()}`}
                  className="aspect-video w-full rounded-md object-cover"
                />
                <figcaption className="mt-3">
                  <p className="font-sans text-sm font-semibold">
                    {feature.title}
                  </p>
                  <p className="mt-1 font-sans text-sm leading-snug text-[#241d2b]/65">
                    {feature.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto -mx-5 bg-[#27233a] px-5 py-12 text-[#fff7e7] sm:-mx-10 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl leading-none sm:text-4xl">
            From a simple idea...
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conceptSteps.map((step, index) => (
              <article key={step.title} className="relative">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={`Lunar Crypt development art: ${step.title}`}
                    className="aspect-video w-full rounded-md border border-[#fff7e7]/20 object-cover"
                  />
                  {index < conceptSteps.length - 1 && (
                    <span
                      className="absolute -right-[22.5px] top-1/2 z-10 hidden -translate-y-1/2 font-sans text-2xl text-[#f7a05d] lg:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.1em] text-[#f7a05d]">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-snug text-[#fff7e7]/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto -mx-5 bg-[#e8d5be] px-5 py-16 text-[#241d2b] sm:-mx-10 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#a8423e]">
            My journey
          </p>
          <h2 className="mt-4 text-5xl leading-none sm:text-6xl">
            75+ games later...
          </h2>
          <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {journeyMilestones.map((milestone, index) => (
              <article
                key={`${milestone.year}-${milestone.title}`}
                className="relative"
              >
                {index < journeyMilestones.length - 1 && (
                  <span
                    className="absolute -right-4 top-[97px] hidden font-sans text-xl text-[#a8423e] lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#241d2b]/55">
                  {milestone.year}
                </p>
                <h3 className="mt-1 h-10 font-sans text-sm font-semibold uppercase leading-5 tracking-[0.08em]">
                  {milestone.title}
                </h3>
                <div className="mt-4 flex aspect-square items-center justify-center border border-dashed border-[#241d2b]/30 bg-[#fff7e7]/25 px-4 text-center font-sans text-xs uppercase tracking-[0.14em] text-[#241d2b]/45">
                  Image placeholder
                </div>
                <p className="mt-3 font-sans text-sm leading-snug text-[#241d2b]/65">
                  Placeholder milestone description.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto -mx-5 bg-[#19172a] px-5 py-16 text-[#fff7e7] sm:-mx-10 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#f7a05d]">
              Why I make games
            </p>
            <h2 className="mt-4 text-5xl leading-none sm:text-6xl">
              Easy to learn. Hard to master.
            </h2>
            <p className="mt-7 font-sans leading-relaxed text-[#fff7e7]/75">
              I became obsessed with how simple mechanics can give rise to
              intricate, layered complexity. I want players to enjoy the
              experience, learn something useful, and for myself to keep
              learning as I create.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto -mx-5 bg-[#f8f0e3] px-5 py-16 text-[#241d2b] sm:-mx-10 sm:px-10 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.5fr_0.45fr_0.85fr]">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#a8423e]">
              MIT & beyond
            </p>
            <h2 className="mt-4 text-5xl leading-none sm:text-6xl">
              Learning, teaching, and community.
            </h2>
            <p className="mt-6 font-sans leading-relaxed text-[#241d2b]/70">
              I studied computer science, design, and Chinese at MIT while
              leading the undergraduate gamedev club and volunteering to teach
              kids game design and development.
            </p>
          </div>
          <div className="flex justify-center lg:pt-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/44/MIT_Seal.svg"
              alt="MIT seal"
              className="w-36 max-w-full"
            />
          </div>
          <div className="lg:pt-12">
            <div className="space-y-5">
              {communityRoles.map((role) => (
                <article key={role}>
                  <p className="font-sans text-sm font-semibold leading-snug">
                    {role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mx-5 bg-[#27233a] px-5 py-16 text-[#fff7e7] sm:-mx-10 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#f7a05d]">
            What&apos;s next
          </p>
          <h2 className="mt-4 text-5xl leading-none sm:text-6xl">
            A year to create.
          </h2>
          <p className="mt-6 max-w-3xl font-sans leading-relaxed text-[#fff7e7]/75">
            In the next year, I plan to continue building out Lunar Crypt and
            marketing the game. This means creating more levels, fleshing out
            the narrative, adding a level editor, and polishing until it's
            ready.
          </p>

          <ol className="mt-12 space-y-9">
            {yearAhead.map((step, index) => (
              <li
                key={step.title}
                className="relative pl-7 sm:grid sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pl-10"
              >
                {index < yearAhead.length - 1 && (
                  <span
                    className="absolute -bottom-10 left-0 top-1 w-px bg-[#fff7e7]/20"
                    aria-hidden="true"
                  />
                )}
                <span
                  className="absolute -left-[6px] top-1 h-3 w-3 rounded-full bg-[#f7a05d]"
                  aria-hidden="true"
                />
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#f7a05d]">
                  {step.when}
                </p>
                <div className="mt-3 sm:mt-0">
                  <h3 className="font-sans text-xl font-semibold text-[#fff7e7]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-3xl font-sans leading-relaxed text-[#fff7e7]/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="mx-auto -mx-5 bg-[#11101c] px-5 py-10 text-[#fff7e7] sm:-mx-10 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              to="/"
              className="font-sans text-sm font-semibold uppercase tracking-[0.16em]"
            >
              Sandra Tang
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-[#fff7e7]/70">
            <a href="#top" className="transition-colors hover:text-[#f7a05d]">
              Home
            </a>
            <a
              href="https://store.steampowered.com/app/5035390/Lunar_Crypt/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#f7a05d]"
            >
              Steam
            </a>
            <a
              href="https://linktr.ee/tangerineslice"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#f7a05d]"
            >
              Linktree
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default GameDev;
