interface InfoPillItem {
  imageUrl: string;
  title: string;
  description: string;
  href?: string;
}

function SoftwareCareerOverview() {
  const infoPillItems: InfoPillItem[] = [
    {
      imageUrl: "/logos-career/mit.png",
      title: "MIT '23",
      description:
        "MIT Class of 2023 Computer Science + Design Minor + Chinese Concentration",
    },
    {
      imageUrl: "/logos-career/yc.png",
      title: "YC S25",
      description: "AgentHub YC S25",
    },
    {
      imageUrl: "/logos-career/prod-square.png",
      title: "Prod.so",
      description:
        "Prod.so Cohort 2. Prod is an exclusive MIT, Harvard, and Stanford startup accelerator, boasting an alumni portfolio that includes multi-billion-dollar startups like Mercor, Cursor, and Etched.",
      href: "https://prod.so/",
    },
    {
      imageUrl: "/logos-career/mit-ssl.png",
      title: "MIT SSL",
      description: "MIT Space Systems Laboratory",
      href: "https://en.wikipedia.org/wiki/Space_Systems_Laboratory_(MIT)",
    },
    {
      imageUrl: "/logos-career/mit-url.png",
      title: "MIT URL",
      description: "MIT Urban Risk Lab",
      href: "https://urbanrisklab.org/",
    },
    {
      imageUrl: "/logos-career/google.png",
      title: "Google",
      description: "Backend Intern",
    },
    {
      imageUrl: "/logos-career/meta.png",
      title: "Meta",
      description: "TPM Intern",
    },
    {
      imageUrl: "/logos-career/pomelo.png",
      title: "Pomelo",
      description: "SWE. First new grad hired. Acquired by SendWave.",
    },
    {
      imageUrl: "/logos-career/nooks.png",
      title: "Nooks.ai",
      description: "Product Engineer",
    },
  ];
  return (
    <div className="mb-[350px] flex flex-col items-center gap-8">
      <div
        className="flex w-fit flex-wrap items-center justify-center gap-0 self-center rounded-full"
        style={{ padding: 10 }}
      >
        {infoPillItems.map((item) => (
          <div
            key={item.title}
            className="group relative flex w-24 items-center justify-center overflow-visible py-2 transition-all duration-500 ease-out hover:w-28"
          >
            <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-5 hidden w-[220px] -translate-x-1/2 group-hover:block">
              <div className="relative rounded-2xl bg-black px-4 py-3 text-center text-xs text-white shadow-lg">
                <p className="font-bold">{item.title}</p>
                <p className="mt-1 font-normal">{item.description}</p>
                <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
              </div>
            </div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
                className="flex w-full items-center justify-center overflow-hidden rounded-2xl px-[10px]"
              >
                <img
                  src={item.imageUrl}
                  alt={`${item.title} logo`}
                  className="h-16 w-auto object-contain transition-all duration-500 ease-out group-hover:h-[72px]"
                />
              </a>
            ) : (
              <div className="flex w-full items-center justify-center overflow-hidden rounded-2xl px-[10px]">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} logo`}
                  className="h-16 w-auto object-contain transition-all duration-500 ease-out group-hover:h-[72px]"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftwareCareerOverview;
